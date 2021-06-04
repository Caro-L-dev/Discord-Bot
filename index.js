require('dotenv').config()

const Discord = require('discord.js');

const client = new Discord.Client();


/* Method that fetch an event*/
client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN);