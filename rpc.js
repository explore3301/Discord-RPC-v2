const Discord = require("discord.js-selfbot-v13")

let rpc = new Discord.RichPresence()
  
  //for buttons to work
  .setApplicationId('1024944815567282176')

  //type of activity
	.setType('STREAMING')

  //watch button link
	.setURL('https://www.youtube.com/watch?v=BBJa32lCaaY')

  //name of activity in status
	.setName('ᴛᴏxɪᴄɪᴛʏ.ᴇxᴇ')
  	.setDetails('3 VERIFIED BOTS')

  //other deatils of activity
	.setState('1sT RUNS THE CORD')                 //playing VS Code
	.setStartTimestamp(Date.now())       //6.09 elapsed

  //large image & text to show on hovering over large image
	.setAssetsLargeImage("https://media.discordapp.net/attachments/1061652502380019772/1068222548287955057/aizen-min_2.gif")
	.setAssetsLargeText('By 1sT-Services')

  //small image & text to show on hovering over small image
	.setAssetsSmallImage("https://media.discordapp.net/attachments/1061652502380019772/1068225806020648960/MOSHED-2023-1-15-20-2-19.gif")  
	.setAssetsSmallText('1ST ON TOP')
  
  //clickable buttons
	.addButton('FREE NITRO TOKENS!!', "https://discord.gg/Jyrdexw6Y5")

module.exports={
  rpc
}
