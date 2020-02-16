const lib = require("../lib/lib.js");

module.exports.run = (bot, guild, message, args) => {
    if(message.mentions.users.size < 1) return message.channel.send("You must mentions one or two people!");
    var u1 = message.mentions.users.array()[1] || message.author;
    var u2 = message.mentions.users.first();
    
    return message.channel.send(`<@${u1.id}> is a ${lib.randomPercent()} match with <@${u2.id}>!`);
}
