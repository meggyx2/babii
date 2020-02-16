const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const { handleGif } = require("./lib/lib.js");
var {prefix, token} = require("./cfg.json");
var cmdDirs = ["commands", "commands/how", "commands/rate"];
var gifs = ["blush", "facepalm", "hug", "kiss", "pat", "poke", "slap"]
bot.commands = new Discord.Collection()

var lastDeleted;
var lastEdited;

bot.login(token);
token = '';

bot.on('messageUpdate', (message) => lastEdited = message);
bot.on('messageDelete', (message) => lastDeleted = message);

bot.on('ready', function () {
    bot.user.setPresence({ game: { name: 'boost babi pwease' }, status: 'online' });

    const str = `
    ##########################################################################
    by SpikeGD#3336
    ##########################################################################
    `

    console.log(str);

    // Load commands
    cmdDirs.forEach(dir => {
        fs.readdirSync(`./${dir}/`).forEach(command => {
            if(command.endsWith('.js')) {
                console.log(`Loading command: ${command}`)
    
                let props = require(`./${dir}/${command}`)
                bot.commands.set(command.replace('.js', ''), props);
            }
        });
    })
});

bot.on('message', function (message) {
    if (message.author.bot) return;
    if (message.mentions.members.first()){
        var user = message.mentions.members.first();
        if(user.nickname && user.nickname.startsWith('[AFK] ')) message.channel.send(`${user.nickname.replace('[AFK] ', '')} is AFK`)
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

    if (!message.content.startsWith(prefix)) return;
    var command = message.content.split(prefix)[1].split(" ")[0]
    var args = message.content.split(' ');
    var cmd = bot.commands.get(command)

    if(command == 'snipe') {
        cmd.run(message, lastDeleted);
    } else if(command == 'editsnipe') {
        cmd.run(message, lastEdited);
    } else if(gifs.includes(command)) {
        handleGif(command, message);
    } else if (cmd) {
        cmd.run(bot, message.guild, message, args);
    }
});
