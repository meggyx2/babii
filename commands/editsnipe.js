const {RichEmbed} = require('discord.js');

module.exports.run = (message, last) => {
    if(!last) return;

    var embed = new RichEmbed()
        .setColor('BLUE')
        .setAuthor(last.member.displayName, last.author.avatarURL)
        .setDescription(last.content);

    message.channel.send(embed)
}
