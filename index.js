require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();


/* Method that fetch an event*/
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if(message.content === '!ping') {
        message.channel.send('Pong.');
    }
});

client.login(process.env.DISCORD_TOKEN);