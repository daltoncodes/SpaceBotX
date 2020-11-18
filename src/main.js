const { config } = require('dotenv');
config();
const mongoConnectionString = process.env.MONGO_URI || "NO_URI";
const mongoose = require('mongoose');
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Successfully Connected To MongoDB'))
    .catch(console.error);

const token = process.env.TOKEN || 'NO_TOKEN';
const Bot = require('./bot');

const bot = new Bot();
bot.login(token)
    .then(() => console.log('Logged into discord'))
    .catch(console.error);
