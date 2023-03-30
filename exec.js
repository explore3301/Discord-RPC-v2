const { rpcx } = require("./rpcx.js")
const Discord = require("discord.js-selfbot-v13")


  let client = new Discord.Client({ checkUpdate: true })

  client.login(process.env.TOKEN).catch((err) => {
    console.log("❌ :: " + err.code)
  })

  client.on("ready", async () => {
    client.user.setActivity(rpcx)
    console.log("✅ :: " + client.user.username)
  })

  setInterval(async()=>{
    if(!client.isReady())process.kill(1)
    await client.checkUpdate()
  },15000)

client.on('update', async (x, y) => {
  if(x !== y)
  {
    const { exec } = require('child_process')
    exec('npm i discord.js-selfbot-v13@latest')
    await process.kill(1)
  }
})
