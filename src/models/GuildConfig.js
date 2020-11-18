const mongoose = require('mongoose');

const GuildConfigSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        default: '.',
    },
    adminLogChannel: {
        type: String,
        required: false,
    },
    modLogChannel: {
        type: String,
        required: false,
    },
    currency: {
      type: String,
      default: 'Bamboo Points'
    },
    extraFeaturesEnabled: {
        type: Array,
        default: [],
    }
});

module.exports = mongoose.model('GuildConfig', GuildConfigSchema);