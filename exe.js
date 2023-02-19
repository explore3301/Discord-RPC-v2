const { rpc } = require("./rpc.js")
const { xxx } = require("./xxx.js")
const Discord = require("discord.js-selfbot-v13")

async function task() {
  for (i = 0; i < xxx.length; i++) {

    let client = new Discord.Client({ checkUpdate: false })
    let value = xxx[i]
    let initials = value.substring(0, 10)

    client.login(xxx[i]).catch(r => {
      console.log("❌ : " + initials + " : " + r.code)
    })

    client.on("ready", async () => {
      client.user.setActivity(rpc)
      console.log("✅ : " + initials + " : " + client.user.username)
    })

  }
}

let exe = task()

module.exports = {
  exe
}
