const { Scenes } = require('telegraf');
const { BaseScene } = Scenes;
const { InlineKeyboard } = require('../buttons');
const Calendar = require('telegram-inline-calendar');
const answers = require('../answers.json');



module.exports.AppointmentController = (bot) => {
    let appointmentController = new BaseScene('appointment');

    let calendar = new Calendar(bot, {
        'date_format': 'MMM D, YYYY h:mm A',
        'language': 'ru',
        'bot_api': 'telegraf',
        'start_week_day': 1,
        'time_selector_mod': true,
        'time_range': '09:00-15:59',
        'time_step': '1h',
        'lock_date': true,
        'start_date': new Date().toISOString().split('T')[0]
    });

    appointmentController.enter(async (ctx) => {
        ctx.deleteMessage();
        calendar.startNavCalendar(ctx);
    });

    appointmentController.on("callback_query", async (ctx) => {
        if (ctx.callbackQuery.message.message_id == calendar.chats.get(ctx.callbackQuery.message.chat.id)) {
            res = calendar.clickButtonCalendar(ctx.callbackQuery);
            if (res !== -1) {
                let message = `Спасибо!\nВаш приём назначен на <b>${res}</b>\nСкоро с вами свяжется специалист для подтверждения.`;
                await ctx.scene.leave();
                await ctx.replyWithHTML(message, InlineKeyboard.startButtons());
            }
        }
    });

    return appointmentController;
}
