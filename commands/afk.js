module.exports.run = (bot, guild, message, args) => {
    if(!message.member.displayName.startsWith('[AFK]')) {
        message.member.setNickname('[AFK] ' + message.member.displayName);
    } else {
        message.member.setNickname(message.member.displayName.replace('[AFK] ', ''));
    }
}
