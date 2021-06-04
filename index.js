/*require('dotenv').config();*/
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();


/* Method that fetch an event*/
client.once('ready', () => {
    console.log('Ready!');
});



client.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}server`) {
        /*Guild represents a server on Discord */
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
    else if (message.content === `${prefix}avatar`) {
       if (!message.mentions.users.size) {
           return message.channel.send(`Ton avatar est : ${message.author.displayAvatarURL({format: 'jpg', 'png' })}`);
       }

       const avatarList = message.mentions.users.map(user => {
           return `L'avatar de ${user.username} est ${user.displayAvatarURL({format: 'jpg', 'png' })}`;
       });

       message.channel.send(avatarList);
    }
});

client.login(token);