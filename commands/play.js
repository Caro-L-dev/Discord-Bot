module.exports = {
    name: 'play',
    description: 'Lecture des sons demandés.',
    async execute(message) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./audio.mp3', {
                volume: 0.5,
            });
            dispatcher.on('start', () => {
              message.client.user.setActivity('YouTube', { type: 'LISTENING' })  
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