const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
   const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/* Method that fetch an event*/
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const arguments = message.content.slice(prefix.length).split(/ +/);
    const command = arguments.shift().toLocaleLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, arguments);
    } catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite pendant l'éxecution de la commande !");
    }
})

client.login(token);