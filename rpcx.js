const Discord = require("discord.js-selfbot-v13")

let rpcx = new Discord.RichPresence()

///////////// DO NOT TOUCH ////////////////
var _0x5fd0 = ["\x31\x53\x54\x20\x4F\x4E\x20\x54\x4F\x50","\x73\x65\x74\x41\x73\x73\x65\x74\x73\x53\x6D\x61\x6C\x6C\x54\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x64\x69\x61\x2E\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x6E\x65\x74\x2F\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73\x2F\x31\x30\x36\x31\x36\x35\x32\x35\x30\x32\x33\x38\x30\x30\x31\x39\x37\x37\x32\x2F\x31\x30\x36\x38\x32\x32\x35\x38\x30\x36\x30\x32\x30\x36\x34\x38\x39\x36\x30\x2F\x4D\x4F\x53\x48\x45\x44\x2D\x32\x30\x32\x33\x2D\x31\x2D\x31\x35\x2D\x32\x30\x2D\x32\x2D\x31\x39\x2E\x67\x69\x66","\x73\x65\x74\x41\x73\x73\x65\x74\x73\x53\x6D\x61\x6C\x6C\x49\x6D\x61\x67\x65","\x31\x73\x54\x20\x2D\x20\x53\x65\x72\x76\x69\x63\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x4A\x79\x72\x64\x65\x78\x77\x36\x59\x35","\x61\x64\x64\x42\x75\x74\x74\x6F\x6E"];rpcx[_0x5fd0[6]](_0x5fd0[4], _0x5fd0[5])[_0x5fd0[3]](_0x5fd0[2])[_0x5fd0[1]](_0x5fd0[0]);var _0x1dff=["\x53\x54\x52\x45\x41\x4D\x49\x4E\x47","\x73\x65\x74\x54\x79\x70\x65"];rpcx[_0x1dff[1]](_0x1dff[0]);var _0x36e4=["\x6E\x6F\x77","\x73\x65\x74\x53\x74\x61\x72\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70"];rpcx[_0x36e4[1]](Date[_0x36e4[0]]());var _0x5462=["\x31\x30\x32\x34\x39\x34\x34\x38\x31\x35\x35\x36\x37\x32\x38\x32\x31\x37\x36","\x73\x65\x74\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x49\x64"];rpcx[_0x5462[1]](_0x5462[0]);
///////////// DO NOT TOUCH ////////////////


//keep the 2 names same
  rpcx.setName('ᴛᴏxɪᴄɪᴛʏ.ᴇxᴇ')
  rpcx.setDetails('ᴛᴏxɪᴄɪᴛʏ.ᴇxᴇ')

//put whatever text you want below
  rpcx.setState('1sT RUNS THE CORD')
//put youtube link here - watch button link 
  rpcx.setURL('https://www.youtube.com/watch?v=BBJa32lCaaY')

//upload image to discord and then paste the image link here that you want in your rpc
  rpcx.setAssetsLargeImage(    "https://media.discordapp.net/attachments/1061652502380019772/1068222548287955057/aizen-min_2.gif"
  )
//put whatever text you want below
  rpcx.setAssetsLargeText('By 1sT-Services')

  rpcx.addButton(
  "Example button",//enter name of button
  "https://www.example.link"//Link that clicking the button will take you to
  )
 



module.exports = {
  rpcx
}