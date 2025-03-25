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

        await ctx.editMessageText(answers.testQuestions[0], {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.questionAnswerButtons()
        });
    });
    
    testController.action('toMainMenu', async (ctx) => {
        await ctx.scene.leave();
        await ctx.editMessageText(answers.onTestSceneLeave, {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.startButtons().reply_markup
        });
    });

    testController.action('answerOne', async (ctx) => {
        await this.appendAnswer(ctx, 0);
    });

    testController.action('answerTwo', async (ctx) => {
        await this.appendAnswer(ctx, 1);
    });

    testController.action('answerThree', async (ctx) => {
        await this.appendAnswer(ctx, 2);
    });

    testController.action('answerFour', async (ctx) => {
        await this.appendAnswer(ctx, 3);
    });

    this.appendAnswer = async (ctx, answer) => {
        let { callbackQuery, session } = ctx;

        session.answers.push(answer);

        if (answers.testQuestions[session.questionNumber] === undefined) {
            this.calculateAndAnswerResult(ctx);
            return;
        }

        await ctx.editMessageText(answers.testQuestions[session.questionNumber], {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.questionAnswerButtons()
        });

        session.questionNumber++;

        console.log(`- ${callbackQuery.from.id} ответил на вопрос №${session.questionNumber - 1}: ${answer}`);
    }

    this.calculateAndAnswerResult = async (ctx) => {
        let numbers = ctx.session.answers;
        let result = numbers.reduce((a, b) => a + b, 0);

        var answer = "";

        if (result < 10) {
            answer = answers.testResults['1'];
        } else if (result > 9 && result < 16) {
            answer = answers.testResults['2'];
        } else if (result > 15 && result < 20) {
            answer = answers.testResults['3'];  
        } else if (result > 19 && result < 30) {
            answer = answers.testResults['4'];
        } else if (result > 29) {
            answer = answers.testResults['5'];
        }

        delete ctx.session.questionNumber;
        delete ctx.session.answers;

        await ctx.editMessageText(answer, {
            parse_mode: 'HTML',
            reply_markup: InlineKeyboard.toMainMenu()
        });
    };

    return testController;
}