const {RichEmbed} = require("discord.js");

var res = [
    "No",
    "Yes",
    "Perhaps",
    "It could not be possible",
    "I think so",
    "I don't think so",
    "Never",
    "It is very likely",
    "Probably",
    "Probably not"
]

module.exports.run = (bot, guild, message, args) => {
    args.shift()

    var embed = new RichEmbed()
        .setColor("BLUE")
        .setTitle("Q: " + args.join(" "))
        .setDescription("The 8ball says: 🎱 " + res[Math.floor(Math.random() * res.length)]) 
    
    return message.channel.send(embed);
