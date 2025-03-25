const { Telegraf } = require('telegraf');
const { CommandHandler } = require('./src/handlers/commandHandler');
const { CallbackHandler } = require('./src/handlers/callbackHandler');
const { TextHandler } = require('./src/handlers/textHandler');

const bot = new Telegraf(process.env.BOT_TOKEN);

CommandHandler(bot);
CallbackHandler(bot);
TextHandler(bot);

bot.launch();