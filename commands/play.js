module.exports = {
    name: 'play',
    description: 'Lecture audio.',
    async execute(message, arguments) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(arguments[0]), {
                volume: 0.5,
            });
            dispatcher.on('start', () => {
              message.client.user.setActivity('de la musique', { type: 'LISTENING' })  
            })

            dispatcher.on('error', () => {
                message.reply(`Je n'ai pas réussi à lire cette vidéo !`);
                dispatcher.destroy();
                message.member.voice.channel.leave();
              })

            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
              })
        } 
        else {
            message.reply(`Tu dois d'abord rejoindre un salon audio !`);
        }
    }
};