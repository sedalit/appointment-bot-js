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
    }
};