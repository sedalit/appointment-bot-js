const { InlineKeyboard } = require('../buttons');
const { CallbackHandler } = require('./callbackHandler');
const answers = require('../answers.json');

module.exports.TextHandler = (bot) => {
    bot.on('text', async (ctx) => {
        let message = ctx.message.text;
    });
};