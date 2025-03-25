const { Scenes } = require('telegraf');
const { BaseScene } = Scenes;
const { InlineKeyboard } = require('../buttons');
const answers = require('../answers.json');

module.exports.TestController = () => {
    const testController = new BaseScene('test');

    testController.enter(async (ctx) => {
        await ctx.editMessageText(answers.onTestControllerEnter, {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.startTestButtons()
        });
    });

    testController.action('startTest', async (ctx) => {
        let { callbackQuery, session } = ctx;
        let from = callbackQuery.from;

        session.questionNumber = 1;
        session.answers = [];

        console.log(`- Тест начал: ${from.id} - ${from.username}`);
    });

    return testController;
}