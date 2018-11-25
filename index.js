const Discord = require("Discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("slime_bot, !help");
console.log("le bot a bien été connecter")
})

bot.login ("NTE2MjExMzQ5MTUyNDY0ODk2.DtwXQA.csMQyWQ3bLLtQtbDtaXRq_zj2hM
")
