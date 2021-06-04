module.exports = {
    name: 'avatar',
    description: `Affiche l'url de l'avatar.`,
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Ton avatar est : ${message.author.displayAvatarURL({format: 'jpg' })}`);
        }
 
        const avatarList = message.mentions.users.map(user => {
            return `L'avatar de ${user.username} est ${user.displayAvatarURL({format: 'jpg' })}`;
        });
 
        message.channel.send(avatarList);
    }
};