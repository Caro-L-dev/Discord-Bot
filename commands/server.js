module.exports = {
    name: 'server',
    description: 'Affiche les infos du serveur.',
    execute(message) {
         /*Guild represents a server on Discord */
         message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
};