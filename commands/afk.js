module.exports.run = (bot, guild, message, args) => {
    if(!message.member.nickname.startsWith('[AFK]')) {
        message.member.setNickname('[AFK] ' + message.member.nickname);
    } else {
        message.member.setNickname(message.member.nickname.replace('[AFK] ', ''));
    }
}
