const { RichEmbed } = require('discord.js'); 
const fs = require('fs');
const gifs = require('../gifs/gifs.json');

module.exports.randomPercent = () => {
    return Math.floor(Math.random() * 100) + "%"
}

module.exports.handleGif = (cmd, message) => {
    var arr = gifs[cmd];
    var gif = arr[Math.floor(Math.random() * arr.length)];

    var embed = new RichEmbed()
        .setImage(gif)
        .setColor('RANDOM')

    message.channel.send(embed);
}
