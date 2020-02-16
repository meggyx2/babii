const fs = require('fs');
const gifs = require('../gifs/gifs.json');

module.exports.randomPercent = () => {
    return Math.floor(Math.random() * 100) + "%"
}

module.exports.handleGif = (cmd, message) => {
    var arr = gifs[cmd];
    var gif = arr[Math.floor(Math.random() * arr.length)];

    message.channel.send(gif);
}
