const { Listener } = require('discord-akairo');

class JoinGuildListener extends Listener {
    constructor() {
        super('guildCreate', {
            emitter: 'client',
            event: 'guildCreate',
        });
    }

    exec(guild) {
        console.log('Master Shifu is now ready');
    }
}

module.exports = JoinGuildListener;
