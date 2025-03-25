const { InlineKeyboard } = require('../buttons');
const answers = require('../answers.json');

module.exports.CommandHandler = (bot) => {
    bot.start( async (ctx) => {
        const {message, session } = ctx;

        delete session.questionNumber;
        delete session.answers;

        ctx.scene.leave();

        await ctx.replyWithChatAction('typing');
        setTimeout(async () => {
            await ctx.replyWithHTML(answers.start, InlineKeyboard.startButtons());
        }, 500);

        console.log(`- В бот вошёл: ${message.chat.id} - ${message.chat.username}`);
    });
};