const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['p', 'ping'],
        });
    }

    exec(message) {
        return message.reply('Pong!');
    }
}

module.exports = PingCommand;
