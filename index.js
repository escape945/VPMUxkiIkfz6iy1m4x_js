const _0x14c625=_0x33a0;(function(_0x13e5ee,_0x1d9885){const _0x1734b0=_0x33a0,_0x3b81d0=_0x13e5ee();while(!![]){try{const _0x258e68=-parseInt(_0x1734b0(0x21d))/0x1+parseInt(_0x1734b0(0x1f3))/0x2*(-parseInt(_0x1734b0(0x1d4))/0x3)+parseInt(_0x1734b0(0x212))/0x4*(parseInt(_0x1734b0(0x20d))/0x5)+-parseInt(_0x1734b0(0x1db))/0x6+-parseInt(_0x1734b0(0x214))/0x7*(-parseInt(_0x1734b0(0x1bf))/0x8)+parseInt(_0x1734b0(0x1c3))/0x9+parseInt(_0x1734b0(0x1c1))/0xa;if(_0x258e68===_0x1d9885)break;else _0x3b81d0['push'](_0x3b81d0['shift']());}catch(_0x4f3789){_0x3b81d0['push'](_0x3b81d0['shift']());}}}(_0x674d,0x644f7));const express=require('\x65\x78\x70\x72\x65\x73\x73'),axios=require(_0x14c625(0x217)),fs=require('\x66\x73'),os=require('\x6f\x73'),path=require('\x70\x61\x74\x68'),cp=require(_0x14c625(0x1dd)),http=require('\x68\x74\x74\x70'),https=require(_0x14c625(0x1b9)),net=require(_0x14c625(0x1ce)),{WebSocket,createWebSocketStream}=require('\x77\x73'),{TextDecoder}=require(_0x14c625(0x1b3)),dotenv=require(_0x14c625(0x228));let err404='\x3c\x21\x44\x4f\x43\x54\x59\x50\x45\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x20\x6c\x61\x6e\x67\x3d\x22\x65\x6e\x22\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x55\x54\x46\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x68\x74\x74\x70\x2d\x65\x71\x75\x69\x76\x3d\x22\x58\x2d\x55\x41\x2d\x43\x6f\x6d\x70\x61\x74\x69\x62\x6c\x65\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x49\x45\x3d\x65\x64\x67\x65\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x50\x61\x67\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x2a\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x70\x61\x64\x64\x69\x6e\x67\x3a\x30\x3b\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3a\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x2c\x68\x74\x6d\x6c\x7b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x6f\x76\x65\x72\x66\x6c\x6f\x77\x3a\x61\x75\x74\x6f\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x30\x30\x30\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x66\x66\x3b\x62\x6f\x78\x2d\x73\x69\x7a\x69\x6e\x67\x3a\x62\x6f\x72\x64\x65\x72\x2d\x62\x6f\x78\x7d\x2e\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x7b\x6d\x61\x72\x67\x69\x6e\x2d\x6c\x65\x66\x74\x3a\x61\x75\x74\x6f\x3b\x6d\x61\x72\x67\x69\x6e\x2d\x72\x69\x67\x68\x74\x3a\x61\x75\x74\x6f\x3b\x2d\x2d\x70\x61\x64\x64\x69\x6e\x67\x3a\x31\x38\x70\x78\x3b\x70\x61\x64\x64\x69\x6e\x67\x2d\x6c\x65\x66\x74\x3a\x76\x61\x72\x28\x2d\x2d\x70\x61\x64\x64\x69\x6e\x67\x29\x3b\x70\x61\x64\x64\x69\x6e\x67\x2d\x72\x69\x67\x68\x74\x3a\x76\x61\x72\x28\x2d\x2d\x70\x61\x64\x64\x69\x6e\x67\x29\x3b\x77\x69\x64\x74\x68\x3a\x63\x61\x6c\x63\x28\x31\x30\x30\x25\x20\x2d\x20\x76\x61\x72\x28\x2d\x2d\x70\x61\x64\x64\x69\x6e\x67\x29\x20\x2a\x20\x32\x29\x3b\x6d\x61\x72\x67\x69\x6e\x2d\x74\x6f\x70\x3a\x38\x30\x70\x78\x3b\x62\x6f\x72\x64\x65\x72\x2d\x72\x61\x64\x69\x75\x73\x3a\x38\x70\x78\x3b\x74\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e\x3a\x61\x6c\x6c\x20\x65\x61\x73\x65\x20\x2e\x32\x73\x2c\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x20\x30\x73\x2c\x63\x6f\x6c\x6f\x72\x20\x30\x73\x7d\x40\x6d\x65\x64\x69\x61\x20\x28\x6d\x69\x6e\x2d\x77\x69\x64\x74\x68\x3a\x39\x38\x30\x70\x78\x29\x7b\x2e\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x7b\x6d\x61\x78\x2d\x77\x69\x64\x74\x68\x3a\x39\x37\x38\x70\x78\x7d\x7d\x40\x6d\x65\x64\x69\x61\x20\x28\x6d\x69\x6e\x2d\x77\x69\x64\x74\x68\x3a\x31\x32\x30\x30\x70\x78\x29\x7b\x2e\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x7b\x6d\x61\x78\x2d\x77\x69\x64\x74\x68\x3a\x31\x31\x32\x38\x70\x78\x7d\x7d\x40\x6d\x65\x64\x69\x61\x20\x28\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74\x3a\x35\x30\x30\x70\x78\x29\x7b\x2e\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x7b\x6d\x61\x72\x67\x69\x6e\x2d\x74\x6f\x70\x3a\x31\x38\x70\x78\x7d\x7d\x23\x62\x61\x63\x6b\x48\x6f\x6d\x65\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x69\x6e\x6c\x69\x6e\x65\x2d\x66\x6c\x65\x78\x3b\x61\x6c\x69\x67\x6e\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x66\x66\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x3a\x23\x33\x33\x33\x3b\x62\x6f\x72\x64\x65\x72\x2d\x72\x61\x64\x69\x75\x73\x3a\x31\x36\x70\x78\x3b\x6d\x61\x72\x67\x69\x6e\x3a\x31\x36\x70\x78\x20\x30\x20\x30\x3b\x70\x61\x64\x64\x69\x6e\x67\x3a\x31\x36\x70\x78\x20\x33\x32\x70\x78\x3b\x74\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e\x3a\x61\x6c\x6c\x20\x65\x61\x73\x65\x20\x2e\x32\x73\x2c\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x20\x30\x73\x2c\x63\x6f\x6c\x6f\x72\x20\x30\x73\x3b\x75\x73\x65\x72\x2d\x73\x65\x6c\x65\x63\x74\x3a\x6e\x6f\x6e\x65\x7d\x23\x62\x61\x63\x6b\x48\x6f\x6d\x65\x3a\x68\x6f\x76\x65\x72\x7b\x74\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e\x3a\x61\x6c\x6c\x20\x65\x61\x73\x65\x20\x2e\x32\x73\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x3a\x23\x32\x61\x32\x61\x32\x61\x7d\x23\x62\x61\x63\x6b\x48\x6f\x6d\x65\x3a\x61\x63\x74\x69\x76\x65\x7b\x74\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e\x3a\x61\x6c\x6c\x20\x65\x61\x73\x65\x20\x2e\x32\x73\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x63\x6f\x6c\x6f\x72\x3a\x23\x32\x61\x32\x61\x32\x61\x3b\x74\x72\x61\x6e\x73\x66\x6f\x72\x6d\x3a\x73\x63\x61\x6c\x65\x28\x2e\x39\x35\x29\x7d\x23\x62\x61\x63\x6b\x48\x6f\x6d\x65\x20\x73\x76\x67\x7b\x66\x69\x6c\x6c\x3a\x23\x66\x66\x66\x7d\x2e\x63\x6f\x6c\x2d\x32\x7b\x63\x6f\x6c\x6f\x72\x3a\x23\x32\x32\x32\x7d\x2e\x68\x65\x61\x64\x6c\x69\x6e\x65\x2d\x31\x7b\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x33\x65\x6d\x3b\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x36\x30\x30\x3b\x6d\x61\x72\x67\x69\x6e\x2d\x62\x6f\x74\x74\x6f\x6d\x3a\x32\x34\x70\x78\x7d\x2e\x68\x65\x61\x64\x6c\x69\x6e\x65\x2d\x35\x7b\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x31\x65\x6d\x3b\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x36\x30\x30\x3b\x6d\x61\x72\x67\x69\x6e\x2d\x62\x6f\x74\x74\x6f\x6d\x3a\x30\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x22\x3e\x3c\x64\x69\x76\x3e\x3c\x68\x31\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x65\x61\x64\x6c\x69\x6e\x65\x2d\x31\x20\x63\x6f\x6c\x2d\x32\x22\x3e\x50\x61\x67\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x3c\x2f\x68\x31\x3e\x3c\x68\x35\x20\x63\x6c\x61\x73\x73\x3d\x22\x68\x65\x61\x64\x6c\x69\x6e\x65\x2d\x35\x20\x63\x6f\x6c\x2d\x32\x22\x3e\x53\x6f\x72\x72\x79\x2c\x20\x77\x65\x20\x63\x61\x6e\x27\x74\x20\x66\x69\x6e\x64\x20\x74\x68\x65\x20\x70\x61\x67\x65\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x6c\x6f\x6f\x6b\x69\x6e\x67\x20\x66\x6f\x72\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x73\x65\x72\x76\x65\x72\x2e\x3c\x2f\x68\x35\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x64\x69\x76\x20\x69\x64\x3d\x22\x62\x61\x63\x6b\x48\x6f\x6d\x65\x22\x3e\x42\x61\x63\x6b\x20\x48\x6f\x6d\x65\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x73\x63\x72\x69\x70\x74\x3e\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x28\x27\x23\x62\x61\x63\x6b\x48\x6f\x6d\x65\x27\x29\x2e\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72\x28\x27\x63\x6c\x69\x63\x6b\x27\x2c\x20\x28\x29\x20\x3d\x3e\x20\x7b\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x70\x61\x74\x68\x6e\x61\x6d\x65\x20\x3d\x20\x22\x2f\x22\x20\x7d\x29\x3b\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e';dotenv[_0x14c625(0x1e4)]();const app=express(),config=((()=>{const _0x5376cb=_0x14c625;let _0x46d7c7;try{_0x46d7c7=JSON[_0x5376cb(0x1cd)](process[_0x5376cb(0x1df)][_0x5376cb(0x1f8)]);}catch{try{_0x46d7c7=JSON[_0x5376cb(0x1cd)](fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x5376cb(0x20e))[_0x5376cb(0x20b)]());}catch{console['\x6c\x6f\x67'](_0x5376cb(0x1cf),'\x43\x6f\x6e\x66\x69\x67\x20\x45\x72\x72\x6f\x72'),_0x46d7c7={};}}let _0x57f9a7;_0x46d7c7[_0x5376cb(0x1c8)]&&(_0x57f9a7={'\x61\x72\x67\x6f\x5f\x70\x61\x74\x68':_0x46d7c7[_0x5376cb(0x211)]||(os[_0x5376cb(0x1ba)]()==_0x5376cb(0x208)?_0x5376cb(0x1c5):_0x5376cb(0x1e5)),'\x75\x73\x65\x5f\x61\x72\x67\x6f':_0x46d7c7[_0x5376cb(0x1c8)][_0x5376cb(0x216)]||![],'\x61\x72\x67\x6f\x5f\x70\x72\x6f\x74\x6f\x63\x6f\x6c':_0x46d7c7[_0x5376cb(0x1c8)][_0x5376cb(0x1da)]||'','\x61\x72\x67\x6f\x5f\x72\x65\x67\x69\x6f\x6e':_0x46d7c7[_0x5376cb(0x1c8)][_0x5376cb(0x1ec)]||'','\x61\x72\x67\x6f\x5f\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e':_0x46d7c7[_0x5376cb(0x1c8)][_0x5376cb(0x21a)]||''});let _0x6163b;return _0x46d7c7[_0x5376cb(0x1b1)]&&(_0x6163b={'\x75\x73\x65\x5f\x74\x6c\x73':_0x46d7c7[_0x5376cb(0x1b1)][_0x5376cb(0x216)]||![],'\x74\x6c\x73\x5f\x6b\x65\x79':Buffer['\x66\x72\x6f\x6d'](_0x46d7c7['\x74\x6c\x73'][_0x5376cb(0x1b5)],_0x5376cb(0x1d8))[_0x5376cb(0x20b)]()||'','\x74\x6c\x73\x5f\x63\x65\x72\x74':Buffer[_0x5376cb(0x227)](_0x46d7c7[_0x5376cb(0x1b1)][_0x5376cb(0x21c)],_0x5376cb(0x1d8))[_0x5376cb(0x20b)]()||''}),{'\x70\x6f\x72\x74':_0x46d7c7[_0x5376cb(0x1b8)]||0xbb8,'\x75\x75\x69\x64':_0x46d7c7['\x75\x75\x69\x64']||guid(),'\x70\x61\x74\x68':_0x46d7c7[_0x5376cb(0x1d0)]||_0x5376cb(0x201),..._0x6163b,..._0x57f9a7};})());function guid(){const _0x4a1527=_0x14c625;return _0x4a1527(0x21b)[_0x4a1527(0x225)](/[xy]/g,function(_0x163db8){const _0x5da46b=_0x4a1527;var _0x1b6916=Math['\x72\x61\x6e\x64\x6f\x6d']()*0x10|0x0,_0x922920=_0x163db8=='\x78'?_0x1b6916:_0x1b6916&0x3|0x8;return _0x922920[_0x5da46b(0x20b)](0x10);});}function _0x33a0(_0x4af249,_0x31b8e0){const _0x674d85=_0x674d();return _0x33a0=function(_0x33a0bc,_0x25324c){_0x33a0bc=_0x33a0bc-0x1b0;let _0x5a48d6=_0x674d85[_0x33a0bc];return _0x5a48d6;},_0x33a0(_0x4af249,_0x31b8e0);}app['\x67\x65\x74']('\x2f\x67\x65\x6e\x65\x72\x61\x74\x65\x5f\x32\x30\x34',(_0x54cb2a,_0x382e72)=>{const _0x534771=_0x14c625;_0x382e72[_0x534771(0x213)](0xcc)[_0x534771(0x1e9)]('');}),app[_0x14c625(0x1e3)]('\x2f\x64\x65\x62\x75\x67'+config[_0x14c625(0x1d0)],(_0x3bd295,_0x4c5ad4)=>{const _0xaed08=_0x14c625;_0x4c5ad4[_0xaed08(0x1c0)](_0xaed08(0x1d7),_0xaed08(0x1f6))['\x73\x65\x6e\x64'](cp[_0xaed08(0x219)]('\x70\x73\x20\x61\x75\x78\x7c\x73\x6f\x72\x74\x20\x2d\x72\x6e\x20\x2d\x6b\x20\x2b\x34\x7c\x68\x65\x61\x64\x20\x2d\x35\x30')[_0xaed08(0x20b)]());}),app['\x75\x73\x65']((_0x4f2bf7,_0x16f8d7,_0x1a9ee1)=>{const _0x40ab0e=_0x14c625;_0x16f8d7['\x73\x74\x61\x74\x75\x73'](0x194)[_0x40ab0e(0x1e9)](err404);});async function start_core(){const _0x30bbbe=_0x14c625,_0x54e30c=config[_0x30bbbe(0x1e1)][_0x30bbbe(0x225)](/-/g,''),_0x5e44cb=(..._0x2ef9cc)=>{const _0x8916ac=(..._0x5092fb)=>{};return _0x8916ac['\x62\x69\x6e\x64'](this,..._0x2ef9cc);},_0x3d5cc8=new WebSocket['\x53\x65\x72\x76\x65\x72']({'\x6e\x6f\x53\x65\x72\x76\x65\x72':!![]});return _0x3d5cc8['\x6f\x6e'](_0x30bbbe(0x1d9),_0x44002c=>{const _0x26cf4f=_0x30bbbe;_0x44002c[_0x26cf4f(0x22d)](_0x26cf4f(0x1f5),_0x546814=>{const _0x15aee1=_0x26cf4f;try{const [_0x99714c]=_0x546814,_0x487054=_0x546814[_0x15aee1(0x1fb)](0x1,0x11);if(!_0x487054[_0x15aee1(0x1d3)]((_0x3f49ea,_0x524beb)=>_0x3f49ea==parseInt(_0x54e30c[_0x15aee1(0x20f)](_0x524beb*0x2,0x2),0x10)))return;let _0x50ff81=_0x546814[_0x15aee1(0x1fb)](0x11,0x12)[_0x15aee1(0x1be)]()+0x13;const _0x2d7642=_0x546814[_0x15aee1(0x1fb)](_0x50ff81,_0x50ff81+=0x2)[_0x15aee1(0x1b2)](0x0),_0x38242d=_0x546814[_0x15aee1(0x1fb)](_0x50ff81,_0x50ff81+=0x1)[_0x15aee1(0x1be)](),_0x3be46b=_0x38242d==0x1?_0x546814[_0x15aee1(0x1fb)](_0x50ff81,_0x50ff81+=0x4)['\x6a\x6f\x69\x6e']('\x2e'):_0x38242d==0x2?new TextDecoder()[_0x15aee1(0x1ea)](_0x546814['\x73\x6c\x69\x63\x65'](_0x50ff81+0x1,_0x50ff81+=0x1+_0x546814[_0x15aee1(0x1fb)](_0x50ff81,_0x50ff81+0x1)[_0x15aee1(0x1be)]())):_0x38242d==0x3?_0x546814['\x73\x6c\x69\x63\x65'](_0x50ff81,_0x50ff81+=0x10)[_0x15aee1(0x220)]((_0x10f024,_0x3a9f05,_0x81ffa6,_0x2b6d6f)=>_0x81ffa6%0x2?_0x10f024['\x63\x6f\x6e\x63\x61\x74'](_0x2b6d6f[_0x15aee1(0x1fb)](_0x81ffa6-0x1,_0x81ffa6+0x1)):_0x10f024,[])[_0x15aee1(0x1eb)](_0x497845=>_0x497845['\x72\x65\x61\x64\x55\x49\x6e\x74\x31\x36\x42\x45'](0x0)[_0x15aee1(0x20b)](0x10))[_0x15aee1(0x1e6)]('\x3a'):'';_0x44002c[_0x15aee1(0x1e9)](new Uint8Array([_0x99714c,0x0]));const _0x337d33=createWebSocketStream(_0x44002c);net[_0x15aee1(0x22a)]({'\x68\x6f\x73\x74':_0x3be46b,'\x70\x6f\x72\x74':_0x2d7642},function(){const _0xf78eb0=_0x15aee1;this[_0xf78eb0(0x1d2)](_0x546814[_0xf78eb0(0x1fb)](_0x50ff81)),_0x337d33['\x6f\x6e'](_0xf78eb0(0x1b6),_0x5e44cb(_0xf78eb0(0x1f7)))[_0xf78eb0(0x1c7)](this)['\x6f\x6e'](_0xf78eb0(0x1b6),_0x5e44cb('\x45\x32\x3a'))[_0xf78eb0(0x1c7)](_0x337d33);})['\x6f\x6e']('\x65\x72\x72\x6f\x72',_0x5e44cb(_0x15aee1(0x1fc),{'\x68\x6f\x73\x74':_0x3be46b,'\x70\x6f\x72\x74':_0x2d7642}));}catch(_0x55ebff){}})['\x6f\x6e'](_0x26cf4f(0x1b6),_0x5e44cb(_0x26cf4f(0x226)));}),new Promise(_0x279b83=>{const _0x2bd33d=_0x30bbbe;console[_0x2bd33d(0x210)]('\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x0a\x5b\x43\x6f\x6e\x66\x69\x67\x5d\x0a\x70\x61\x74\x68\x3a\x20'+config['\x70\x61\x74\x68']+_0x2bd33d(0x224)+config[_0x2bd33d(0x1e1)]+_0x2bd33d(0x22c)),_0x279b83(_0x3d5cc8);});}function _0x674d(){const _0x5e3007=['\x61\x78\x69\x6f\x73','\x73\x74\x64\x65\x72\x72','\x65\x78\x65\x63\x53\x79\x6e\x63','\x74\x6f\x6b\x65\x6e','\x78\x78\x78\x78\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x34\x78\x78\x78\x2d\x79\x78\x78\x78\x2d\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78','\x63\x65\x72\x74','\x33\x39\x36\x33\x33\x31\x6b\x48\x74\x6b\x6c\x79','\x5b\u521d\u59cb\u5316\x5d\x20\x61\x72\x67\x6f\u542f\u52a8\u9519\u8bef\uff1a','\x65\x6d\x69\x74','\x72\x65\x64\x75\x63\x65','\x74\x6c\x73\x5f\x6b\x65\x79','\x68\x74\x74\x70\x73\x20\x6d\x69\x73\x73\x69\x6e\x67\x3a\x20\x74\x6c\x73\x5f\x63\x65\x72\x74\x2c\x74\x6c\x73\x5f\x6b\x65\x79','\x61\x72\x67\x6f\x5f\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x0a\x75\x75\x69\x64\x3a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x45\x45\x3a','\x66\x72\x6f\x6d','\x64\x6f\x74\x65\x6e\x76','\x74\x6c\x73\x5f\x63\x65\x72\x74','\x63\x6f\x6e\x6e\x65\x63\x74','\x4c\x69\x73\x74\x65\x6e\x69\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74\x20','\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x6f\x6e\x63\x65','\x70\x75\x73\x68','\x74\x6c\x73','\x72\x65\x61\x64\x55\x49\x6e\x74\x31\x36\x42\x45','\x75\x74\x69\x6c','\x78\x36\x34','\x6b\x65\x79','\x65\x72\x72\x6f\x72','\x5b\u521d\u59cb\u5316\x5d\x20\x61\x72\x67\x6f\u542f\u52a8\u6210\u529f','\x70\x6f\x72\x74','\x68\x74\x74\x70\x73','\x70\x6c\x61\x74\x66\x6f\x72\x6d','\x43\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x3a\x20\x55\x6e\x73\x75\x70\x70\x6f\x72\x74\x20\x41\x72\x63\x68\x20\x2d\x20','\x72\x65\x73\x6f\x6c\x76\x65','\x75\x73\x65\x5f\x74\x6c\x73','\x72\x65\x61\x64\x55\x49\x6e\x74\x38','\x32\x34\x59\x41\x70\x50\x53\x63','\x73\x65\x74\x48\x65\x61\x64\x65\x72','\x31\x32\x30\x34\x37\x38\x30\x30\x6d\x5a\x4e\x70\x64\x5a','\x64\x6f\x6d\x61\x69\x6e\x3a\x20','\x33\x34\x36\x32\x37\x30\x35\x4a\x68\x53\x6d\x69\x67','\x61\x72\x6d\x36\x34','\x2e\x2f\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x2e\x65\x78\x65','\x45\x6e\x61\x62\x6c\x65\x64\x20\x68\x74\x74\x70\x73','\x70\x69\x70\x65','\x61\x72\x67\x6f','\x64\x65\x73\x74\x72\x6f\x79','\x6c\x69\x73\x74\x65\x6e','\x63\x68\x6d\x6f\x64','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x70\x61\x72\x73\x65','\x6e\x65\x74','\x5b\u8f6f\u4ef6\x5d','\x70\x61\x74\x68','\x61\x72\x67\x6f\x5f\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e','\x77\x72\x69\x74\x65','\x65\x76\x65\x72\x79','\x33\x56\x50\x6d\x75\x59\x75','\x72\x75\x6e','\x63\x72\x65\x61\x74\x65\x53\x65\x72\x76\x65\x72','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65','\x62\x61\x73\x65\x36\x34','\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x31\x35\x31\x36\x37\x37\x36\x70\x71\x4c\x78\x4d\x50','\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73','\x61\x72\x67\x6f\u4e0b\u8f7d\u5931\u8d25','\x65\x6e\x76','\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a','\x75\x75\x69\x64','\x6d\x61\x74\x63\x68','\x67\x65\x74','\x63\x6f\x6e\x66\x69\x67','\x2e\x2f\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64','\x6a\x6f\x69\x6e','\x2d\x2d\x74\x6f\x6b\x65\x6e','\x61\x72\x67\x6f\x5f\x72\x65\x67\x69\x6f\x6e','\x73\x65\x6e\x64','\x64\x65\x63\x6f\x64\x65','\x6d\x61\x70','\x72\x65\x67\x69\x6f\x6e','\x5b\u521d\u59cb\u5316\x5d','\x73\x70\x6c\x69\x74','\x75\x70\x67\x72\x61\x64\x65','\x2d\x2d\x6e\x6f\x2d\x61\x75\x74\x6f\x75\x70\x64\x61\x74\x65','\x61\x72\x67\x6f\u4e0b\u8f7d\u6210\u529f','\x2d\x2d\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x31\x32\x38\x31\x30\x36\x32\x71\x70\x74\x5a\x6b\x6f','\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72','\x6d\x65\x73\x73\x61\x67\x65','\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e','\x45\x31\x3a','\x43\x4f\x4e\x46\x49\x47','\x6c\x69\x6e\x75\x78','\x5b\x41\x72\x67\x6f\x20\x43\x6f\x6e\x66\x69\x67\x5d','\x73\x6c\x69\x63\x65','\x43\x6f\x6e\x6e\x2d\x45\x72\x72\x3a','\x5b\x41\x72\x67\x6f\x20\x49\x6e\x66\x6f\x5d','\x74\x72\x69\x6d','\x64\x6f\x6d\x61\x69\x6e\x3a\x20\x43\x75\x73\x74\x6f\x6d\x20\x54\x6f\x6b\x65\x6e','\x75\x72\x6c','\x2f\x61\x70\x69','\x61\x6d\x64\x36\x34','\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x2d\x6c\x69\x6e\x75\x78\x2d','\x61\x6d\x64\x36\x34\x2e\x65\x78\x65','\x61\x72\x67\x6f\x20\x63\x68\x6d\x6f\x64\u5b8c\u6210','\x63\x77\x64','\x68\x61\x6e\x64\x6c\x65\x55\x70\x67\x72\x61\x64\x65','\x77\x69\x6e\x33\x32','\x2d\x2d\x75\x72\x6c','\x61\x72\x63\x68','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x64\x61\x74\x61','\x35\x39\x35\x31\x35\x73\x63\x42\x62\x76\x58','\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e','\x73\x75\x62\x73\x74\x72','\x6c\x6f\x67','\x61\x72\x67\x6f\x5f\x70\x61\x74\x68','\x32\x30\x45\x59\x58\x71\x7a\x63','\x73\x74\x61\x74\x75\x73','\x31\x32\x30\x31\x34\x31\x73\x5a\x75\x74\x52\x72','\x61\x72\x67\x6f\u5df2\u5b58\u5728','\x75\x73\x65'];_0x674d=function(){return _0x5e3007;};return _0x674d();}function download_argo(){return new Promise(async(_0xc99b9e,_0x44a02e)=>{const _0x48c825=_0x33a0;let _0x47fa39='\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x2f\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x2f\x72\x65\x6c\x65\x61\x73\x65\x73\x2f\x6c\x61\x74\x65\x73\x74\x2f\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2f';if(os[_0x48c825(0x1ba)]()==_0x48c825(0x1f9)){let _0x16dd0e=_0x48c825(0x203);switch(os[_0x48c825(0x20a)]()){case _0x48c825(0x1c4):_0x16dd0e+='\x61\x72\x6d\x36\x34';break;case _0x48c825(0x1b4):_0x16dd0e+=_0x48c825(0x202);break;default:_0x44a02e('\x43\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x3a\x20\x55\x6e\x73\x75\x70\x70\x6f\x72\x74\x20\x41\x72\x63\x68\x20\x2d\x20'+os['\x61\x72\x63\x68']());return;break;}_0x47fa39=_0x47fa39+_0x16dd0e;}else{if(os['\x70\x6c\x61\x74\x66\x6f\x72\x6d']()==_0x48c825(0x208)){let _0x11255f='\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x2d\x77\x69\x6e\x64\x6f\x77\x73\x2d';switch(os[_0x48c825(0x20a)]()){case _0x48c825(0x1b4):_0x11255f+=_0x48c825(0x204);break;default:_0x44a02e(_0x48c825(0x1bb)+os[_0x48c825(0x20a)]());return;break;}_0x47fa39=_0x47fa39+_0x11255f;}else{_0x44a02e('\x43\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x64\x3a\x20\x55\x6e\x73\x75\x70\x70\x6f\x72\x74\x20\x50\x6c\x61\x74\x66\x6f\x72\x6d\x20\x2d\x20'+os[_0x48c825(0x1ba)]());return;}}try{const _0x4c34fa=await axios({'\x6d\x65\x74\x68\x6f\x64':_0x48c825(0x1e3),'\x75\x72\x6c':_0x47fa39,'\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79\x70\x65':_0x48c825(0x1f4),'\x6d\x61\x78\x52\x65\x64\x69\x72\x65\x63\x74\x73':0xa});fs[_0x48c825(0x1cc)](path[_0x48c825(0x1bc)](process['\x63\x77\x64'](),config['\x61\x72\x67\x6f\x5f\x70\x61\x74\x68']),_0x4c34fa[_0x48c825(0x20c)]),_0xc99b9e(!![]);}catch(_0x289f8b){console['\x6c\x6f\x67'](_0x289f8b),_0xc99b9e(![]);}});}async function start_argo(){const _0x14ea63=_0x14c625;await(_0x3bd6dd=>{return new Promise(async _0x2d9b6a=>{const _0x50f572=_0x33a0;if(os[_0x50f572(0x1ba)]()!=_0x50f572(0x1f9)){_0x2d9b6a();return;}let _0x4e14a9=['\x2b\x78',path[_0x50f572(0x1bc)](process[_0x50f572(0x206)](),config['\x61\x72\x67\x6f\x5f\x70\x61\x74\x68'])],_0x25d522=cp['\x73\x70\x61\x77\x6e'](_0x50f572(0x1cb),_0x4e14a9);_0x25d522['\x6f\x6e']('\x63\x6c\x6f\x73\x65',()=>{const _0x112225=_0x50f572;console['\x6c\x6f\x67'](_0x112225(0x1ed),_0x112225(0x205)),setTimeout(_0x4b253e=>_0x2d9b6a(),0x64);});});})();let _0x312b63=[_0x14ea63(0x209),_0x14ea63(0x1e0)+config[_0x14ea63(0x1b8)]];config[_0x14ea63(0x1d1)]&&(_0x312b63=[_0x14ea63(0x1d5),_0x14ea63(0x1e7),config['\x61\x72\x67\x6f\x5f\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e']],console[_0x14ea63(0x210)](_0x14ea63(0x1fa),_0x14ea63(0x1ff)));config[_0x14ea63(0x223)]&&_0x312b63[_0x14ea63(0x1b0)](_0x14ea63(0x1f2),config['\x61\x72\x67\x6f\x5f\x70\x72\x6f\x74\x6f\x63\x6f\x6c']);config[_0x14ea63(0x1e8)]&&_0x312b63['\x70\x75\x73\x68']('\x2d\x2d\x72\x65\x67\x69\x6f\x6e',config[_0x14ea63(0x1e8)]);let _0x4cdfac=cp['\x73\x70\x61\x77\x6e'](path[_0x14ea63(0x1bc)](process['\x63\x77\x64'](),config[_0x14ea63(0x211)]),['\x74\x75\x6e\x6e\x65\x6c',_0x14ea63(0x1f0),..._0x312b63]);return new Promise(_0x57c100=>{const _0xb7793a=_0x14ea63;_0x4cdfac[_0xb7793a(0x218)]['\x6f\x6e'](_0xb7793a(0x20c),_0x3f4d1f=>{const _0x17a3ce=_0xb7793a;if(/Registered tunnel connection/['\x74\x65\x73\x74'](_0x3f4d1f))console[_0x17a3ce(0x210)](_0x17a3ce(0x1fd),_0x3f4d1f['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x17a3ce(0x1e2)](/(?<=Registered tunnel connection).*/)[0x0][_0x17a3ce(0x1fe)]());else{if(!config[_0x17a3ce(0x1d1)]&&/https:\/\/.*[a-z]+cloudflare.com/['\x74\x65\x73\x74'](_0x3f4d1f))console[_0x17a3ce(0x210)](_0x17a3ce(0x1fa),_0x17a3ce(0x1c2)+_0x3f4d1f['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x6d\x61\x74\x63\x68'](/(?<=https:\/\/).*[a-z]+cloudflare.com/)[0x0]);else{}}_0x57c100(_0x17a3ce(0x1b7));}),_0x4cdfac['\x6f\x6e'](_0xb7793a(0x1b6),_0x4ea171=>{const _0x145fdf=_0xb7793a;_0x57c100(_0x145fdf(0x21e)+_0x4ea171);});});}function listen_port(_0xc531e8){const _0x302276=_0x14c625;let _0x56fd1e;if(config[_0x302276(0x1bd)]){console[_0x302276(0x210)](_0x302276(0x1cf),_0x302276(0x1c6));if(config[_0x302276(0x229)]&&config[_0x302276(0x221)]){const _0x5c7234={'\x6b\x65\x79':config[_0x302276(0x221)],'\x63\x65\x72\x74':config[_0x302276(0x229)]};_0x56fd1e=https[_0x302276(0x1d6)](_0x5c7234,app);}else console[_0x302276(0x210)](_0x302276(0x1cf),_0x302276(0x222));}else _0x56fd1e=http['\x63\x72\x65\x61\x74\x65\x53\x65\x72\x76\x65\x72'](app);_0x56fd1e[_0x302276(0x1ca)](config['\x70\x6f\x72\x74'],()=>{const _0x583506=_0x302276;console[_0x583506(0x210)]('\x5b\u8f6f\u4ef6\x5d',_0x583506(0x22b)+config[_0x583506(0x1b8)]);}),_0x56fd1e['\x6f\x6e'](_0x302276(0x1ef),(_0x1839ad,_0x559c12,_0x25ab71)=>{const _0x555382=_0x302276;_0x1839ad[_0x555382(0x200)][_0x555382(0x1ee)]('\x3f')[0x0]===config[_0x555382(0x1d0)]?_0xc531e8[_0x555382(0x207)](_0x1839ad,_0x559c12,_0x25ab71,_0x5bc8bc=>{const _0xc76b7b=_0x555382;_0xc531e8[_0xc76b7b(0x21f)]('\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',_0x5bc8bc,_0x1839ad);}):_0x559c12[_0x555382(0x1c9)]();});}(async _0x97e08c=>{})(),start();async function start(){const _0x3a8873=_0x14c625;if(config['\x75\x73\x65\x5f\x61\x72\x67\x6f']){if(!fs[_0x3a8873(0x1dc)](path[_0x3a8873(0x1bc)](process['\x63\x77\x64'](),config[_0x3a8873(0x211)]))){const _0x2c719b=await download_argo();_0x2c719b?console[_0x3a8873(0x210)](_0x3a8873(0x1ed),_0x3a8873(0x1f1)):console[_0x3a8873(0x210)](_0x3a8873(0x1ed),_0x3a8873(0x1de));}else console[_0x3a8873(0x210)]('\x5b\u521d\u59cb\u5316\x5d',_0x3a8873(0x215));console[_0x3a8873(0x210)](await start_argo());}const _0x3715df=await start_core();console[_0x3a8873(0x210)]('\x5b\u521d\u59cb\u5316\x5d\x20\u542f\u52a8\u6210\u529f\x28\x3f\x29'),listen_port(_0x3715df);}
