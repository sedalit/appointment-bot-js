const { InlineKeyboard } = require('../buttons');
const answers = require('../answers.json');

module.exports.CallbackHandler = (bot) => {
    bot.action('enterTestScene', async (ctx) => {
        await ctx.scene.enter('test');
    });

    bot.action('enterAppointmentScene', async (ctx) => {
        await ctx.scene.enter('appointment');
    });
};