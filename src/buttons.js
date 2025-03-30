const { Telegraf, Markup } = require('telegraf');
const { button } = require('telegraf/markup');

module.exports.InlineKeyboard = {
    startButtons: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Начать тест Бека', 'enterTestScene')],
            [Markup.button.callback('Записаться на приём', 'enterAppointmentScene')]
        ]);
    },
    startTestButtons: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('Я внимательно прочитал инструкцию', 'startTest')]
        ]).reply_markup;
    },
    testButtonsWithoutBack: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('1', 'answerOne')],
            [Markup.button.callback('2', 'answerTwo')],
            [Markup.button.callback('3', 'answerThree')],
            [Markup.button.callback('4', 'answerFour')]
        ]);
    },
    testButtonsWithBack: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('1', 'answerOne')],
            [Markup.button.callback('2', 'answerTwo')],
            [Markup.button.callback('3', 'answerThree')],
            [Markup.button.callback('4', 'answerFour')],
            [Markup.button.callback('Назад', 'back')]
        ]);
    },
    toMainMenu: () => {
        return Markup.inlineKeyboard([
            [Markup.button.callback('В главное меню', 'toMainMenu')]
        ]).reply_markup;
    },
    customMarkup: (buttonsArray = []) => {
        let result = [];

        buttonsArray.forEach((button) => {
            result.push([Markup.button.callback(button[0], button[1])]);
        });
        
        return Markup.inlineKeyboard(result);
    }
};