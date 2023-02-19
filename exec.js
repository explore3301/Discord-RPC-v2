const { rpcx } = require("./rpcx.js")
const { data } = require("./data.js")
const Discord = require("discord.js-selfbot-v13")

for (i = 0; i < data.length; i++) {

    let client = new Discord.Client({ checkUpdate: false })

    client.login(xxx[i]).catch((err) => {
      console.log("❌ : " + xxx[i].substring(0, 10) + " : " + err.code)
    })

    client.on("ready", async () => {
      client.user.setActivity(rpcx)
      console.log("✅ : " + xxx[i].substring(0, 10) + " : " + client.user.username)
    })

  }
