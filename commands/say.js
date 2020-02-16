module.exports.run = (bot, guild, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    args.shift();
    return message.channel.send(args.join(" "));
}
