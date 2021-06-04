module.exports = {
    name: 'ping',
    description: 'Bot réponds aux messages.',
    execute(message) {
        message.channel.send('Hello !');
    }
};