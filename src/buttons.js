const { Telegraf, Markup } = require('telegraf');

module.exports.InlineKeyboard = {
    startButtons: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Начать тест Бека', 'enterTestScene')],
            [Markup.button.callback('Записаться на приём', 'makeAppointment')]
        ]);
    },
    startTestButtons: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Я внимательно прочитал инструкцию', 'startTest')]
        ]).reply_markup;
    },
    questionAnswerButtons: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('1', 'answerOne')],
            [Markup.button.callback('2', 'answerTwo')],
            [Markup.button.callback('3', 'answerThree')],
            [Markup.button.callback('4', 'answerFour')]
        ]).reply_markup;
    },
    toMainMenu: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('В главное меню', 'toMainMenu')]
        ]).reply_markup;
    }
};