const express = require('express');
const axios = require('axios');
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');
const http = require('http');
const https = require('https');
const net = require('net');
const { WebSocket, createWebSocketStream } = require('ws');
const { TextDecoder } = require('util');
const dotenv = require('dotenv');

let err404 = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found</title><style>*{margin:0;padding:0;font-family:sans-serif}body,html{width:100%;height:100%;overflow:auto;color:#000;background-color:#fff;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;--padding:18px;padding-left:var(--padding);padding-right:var(--padding);width:calc(100% - var(--padding) * 2);margin-top:80px;border-radius:8px;transition:all ease .2s,background-color 0s,color 0s}@media (min-width:980px){.container{max-width:978px}}@media (min-width:1200px){.container{max-width:1128px}}@media (max-height:500px){.container{margin-top:18px}}#backHome{display:inline-flex;align-items:center;color:#fff;background-color:#333;border-radius:16px;margin:16px 0 0;padding:16px 32px;transition:all ease .2s,background-color 0s,color 0s;user-select:none}#backHome:hover{transition:all ease .2s;background-color:#2a2a2a}#backHome:active{transition:all ease .2s;background-color:#2a2a2a;transform:scale(.95)}#backHome svg{fill:#fff}.col-2{color:#222}.headline-1{font-size:3em;font-weight:600;margin-bottom:24px}.headline-5{font-size:1em;font-weight:600;margin-bottom:0}</style></head><body><div class="container"><div><h1 class="headline-1 col-2">Page not found</h1><h5 class="headline-5 col-2">Sorry, we can't find the page you are looking for in this download server.</h5></div><div id="backHome">Back Home</div></div></body><script>document.querySelector('#backHome').addEventListener('click', () => { location.pathname = "/" });</script></html>`;

dotenv.config();
const app = express();
const config = (() => {
  let config_json;
  try {
    config_json = JSON.parse(process.env.CONFIG);
  } catch {
    try {
      config_json = JSON.parse(fs.readFileSync('./config.json').toString());
    } catch {
      console.log('[软件]', `Config Error`);
      config_json = {};
    }
  }
  let part_warp;
  if (config_json['warp']) {
    part_warp = {
      warp_secretKey: config_json['warp']['key'] || '',
      warp_ipv6: config_json['warp']['ipv6'] || '',
      warp_endpoint:
        config_json['warp']['endpoint'] || 'engage.cloudflareclient.com',
      add_ipv4: config_json['warp']['add4'] || false,
      add_ipv6: config_json['warp']['add6'] || false,
    };
  }
  let part_argo;
  if (config_json['argo']) {
    part_argo = {
      argo_path:
        config_json['argo_path'] ||
        (os.platform() == 'win32' ? './cloudflared.exe' : './cloudflared'),
      use_argo: config_json['argo']['use'] || false,
      argo_protocol: config_json['argo']['protocol'] || '',
      argo_region: config_json['argo']['region'] || '',
      argo_access_token: config_json['argo']['token'] || '',
    };
  }
  let part_tls;
  if (config_json['tls']) {
    part_tls = {
      use_tls: config_json['tls']['use'] || false,
      // please use base64 encode
      tls_key:
        Buffer.from(config_json['tls']['key'], 'base64').toString() || '',
      tls_cert:
        Buffer.from(config_json['tls']['cert'], 'base64').toString() || '',
    };
  }
  return {
    // core
    // core_path:
    //   config_json['core_path'] ||
    //   (os.platform() == 'win32' ? './core.exe' : './core'),
    port: config_json['port'] || 3000,
    // not use in this edition
    // middle_port: config_json['middle_port'] || 58515,
    // protocol: config_json['protocol'] || 'dmxlc3M=',
    uuid: config_json['uuid'] || guid(),
    path: config_json['path'] || '/api',
    // tls
    ...part_tls,
    // warp
    ...part_warp,
    // argo (cloudflared)
    ...part_argo,
  };
})();

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

app.get('/generate_204', (req, res) => {
  res.status(204).send('');
});
app.get('/debug' + config.path, (req, res) => {
  res
    .setHeader('Content-Type', 'text/plain')
    .send(cp.execSync(`ps aux|sort -rn -k +4|head -50`).toString());
});

// 404 page
app.use((req, res, next) => {
  res.status(404).send(err404);
});

// 启动核心
async function start_core() {
  const uuid = config.uuid.replace(/-/g, '');
  const errcb = (...args) => {
    const error = (...innerArgs) => {
      // console.error(...innerArgs);
    };
    return error.bind(this, ...args);
  };
  const wss = new WebSocket.Server({ noServer: true });
  wss.on('connection', ws => {
    // console.log('connected successfully');
    ws.once('message', msg => {
      try {
        const [VERSION] = msg;
        const id = msg.slice(1, 17);
        if (!id.every((v, i) => v == parseInt(uuid.substr(i * 2, 2), 16)))
          return;
        let i = msg.slice(17, 18).readUInt8() + 19;
        const port = msg.slice(i, (i += 2)).readUInt16BE(0);
        const ATYP = msg.slice(i, (i += 1)).readUInt8();
        const host =
          ATYP == 1
            ? msg.slice(i, (i += 4)).join('.') //IPV4
            : ATYP == 2
            ? new TextDecoder().decode(
                msg.slice(i + 1, (i += 1 + msg.slice(i, i + 1).readUInt8()))
              ) //domain
            : ATYP == 3
            ? msg
                .slice(i, (i += 16))
                .reduce(
                  (s, b, i, a) => (i % 2 ? s.concat(a.slice(i - 1, i + 1)) : s),
                  []
                )
                .map(b => b.readUInt16BE(0).toString(16))
                .join(':')
            : ''; //ipv6

        // console.log('conn:', host, port);
        ws.send(new Uint8Array([VERSION, 0]));
        const duplex = createWebSocketStream(ws);
        net
          .connect({ host, port }, function () {
            this.write(msg.slice(i));
            duplex
              .on('error', errcb('E1:'))
              .pipe(this)
              .on('error', errcb('E2:'))
              .pipe(duplex);
          })
          .on('error', errcb('Conn-Err:', { host, port }));
      } catch (error) {}
    }).on('error', errcb('EE:'));
  });
  return new Promise(resolve => {
    console.log(`----------
[Config]
path: ${config.path}
uuid: ${config.uuid}
----------`);
    resolve(wss);
  });
}

// 下载argo
function download_argo() {
  return new Promise(async (resolve, reject) => {
    let url =
      'https://github.com/cloudflare/cloudflared/releases/latest/download/';
    if (os.platform() == 'linux') {
      let name = 'cloudflared-linux-';
      switch (os.arch()) {
        case 'arm64':
          name += 'arm64';
          break;
        case 'x64':
          name += 'amd64';
          break;

        default:
          reject('Cloudflared: Unsupport Arch - ' + os.arch());
          return;
          break;
      }
      url = url + name;
    } else if (os.platform() == 'win32') {
      let name = 'cloudflared-windows-';
      switch (os.arch()) {
        case 'x64':
          name += 'amd64.exe';
          break;

        default:
          reject('Cloudflared: Unsupport Arch - ' + os.arch());
          return;
          break;
      }
      url = url + name;
    } else {
      reject('Cloudflared: Unsupport Platform - ' + os.platform());
      return;
    }
    try {
      const response = await axios({
        method: 'get',
        url: url,
        responseType: 'arraybuffer',
        maxRedirects: 10,
      });
      fs.writeFileSync(
        path.resolve(process.cwd(), config.argo_path),
        response.data
      );
      resolve(true);
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}
// 启动argo
async function start_argo() {
  await (_ => {
    return new Promise(async resolve => {
      if (os.platform() != 'linux') {
        resolve();
        return;
      }
      let args = ['+x', path.resolve(process.cwd(), config.argo_path)];
      let processC = cp.spawn('chmod', args);
      processC.on('close', () => {
        console.log('[初始化]', 'argo chmod完成');
        setTimeout(_ => resolve(), 100);
      });
    });
  })();

  let args = ['--url', `http://localhost:${config.port}`];
  if (config.argo_access_token) {
    args = ['run', '--token', config.argo_access_token];
    console.log('[Argo Config]', 'domain: Custom Token');
  }
  if (config.argo_protocol) {
    args.push('--protocol', config.argo_protocol);
  }
  if (config.argo_region) {
    args.push('--region', config.argo_region);
  }
  let processC = cp.spawn(path.resolve(process.cwd(), config.argo_path), [
    'tunnel',
    '--no-autoupdate',
    ...args,
  ]);
  return new Promise(resolve => {
    processC.stderr.on('data', data => {
      // https://.*[a-z]+cloudflare.com
      if (/Registered tunnel connection/.test(data)) {
        console.log(
          '[Argo Info]',
          data
            .toString()
            .match(/(?<=Registered tunnel connection).*/)[0]
            .trim()
        );
      } else if (
        !config.argo_access_token &&
        /https:\/\/.*[a-z]+cloudflare.com/.test(data)
      ) {
        console.log(
          '[Argo Config]',
          `domain: ${
            data.toString().match(/(?<=https:\/\/).*[a-z]+cloudflare.com/)[0]
          }`
        );
      } else {
        // console.log(data.toString().trim());
      }
      resolve('[初始化] argo启动成功');
    });
    processC.on('error', err => {
      resolve('[初始化] argo启动错误：' + err);
    });
  });
}

// 监听端口
function listen_port(wss) {
  let serverProxy;
  if (config.use_tls) {
    console.log('[软件]', `Enabled https`);
    if (config.tls_cert && config.tls_key) {
      const options = {
        key: config.tls_key,
        cert: config.tls_cert,
      };
      serverProxy = https.createServer(options, app);
    } else {
      console.log('[软件]', `https missing: tls_cert,tls_key`);
    }
  } else {
    serverProxy = http.createServer(app);
  }
  serverProxy.listen(config.port, () => {
    console.log('[软件]', `Listening on port ${config.port}`);
  });
  serverProxy.on('upgrade', (request, socket, head) => {
    if (request.url.split('?')[0] === config.path) {
      wss.handleUpgrade(request, socket, head, ws => {
        wss.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });
}

(async _ => {
  // console.log(await start_argo());
})();
start();
async function start() {
  if (config.use_argo) {
    if (!fs.existsSync(path.resolve(process.cwd(), config.argo_path))) {
      const foo = await download_argo();
      if (foo) {
        console.log('[初始化]', 'argo下载成功');
      } else {
        console.log('[初始化]', 'argo下载失败');
      }
    } else {
      console.log('[初始化]', 'argo已存在');
    }
    console.log(await start_argo());
  }
  const foo = await start_core();
  console.log('[初始化] 启动成功(?)');
  listen_port(foo);
}
