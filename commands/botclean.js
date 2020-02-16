module.exports.run = (bot, guild, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    var total = 0;
    var i = 0;

    message.channel.fetchMessages().then(messages => {
        total = messages.length;

        messages.forEach(m => m.delete());
    })
}
