const { InlineKeyboard } = require('../buttons');
const answers = require('../answers.json');

module.exports.CommandHandler = (bot) => {
    bot.start( async (ctx) => {
        await ctx.replyWithHTML(answers.start);
    });
};