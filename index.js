/*require('dotenv').config();*/
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();


/* Method that fetch an event*/
client.once('ready', () => {
    console.log('Ready!');
});


/*Guild represents a server on Discord */
client.on('message', (message) => {
    if(message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount} `);
    }
});

client.login(token);