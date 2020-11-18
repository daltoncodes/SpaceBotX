const {
    AkairoClient,
    CommandHandler,
    ListenerHandler,
} = require('discord-akairo');
const {join} = require('path');

class Bot extends AkairoClient {
    constructor() {
        super(
            {
                ownerID: '',
            },
            {
                disableMentions: 'everyone',
            }
        );

        this.commandHandler = new CommandHandler(this, {
            prefix: '.',
            directory: join(__dirname, 'commands'),
        });
        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, 'listeners'),
        });

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}

module.exports = Bot;