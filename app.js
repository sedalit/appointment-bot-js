const { Telegraf, Scenes } = require('telegraf');
const { Stage } = Scenes;
const LocalSession = require('telegraf-session-local')

const { CommandHandler } = require('./src/handlers/commandHandler');
const { CallbackHandler } = require('./src/handlers/callbackHandler');
const { TextHandler } = require('./src/handlers/textHandler');

const { TestController } = require('./src/controllers/testController');

const stage = new Stage([TestController()]);

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(new LocalSession({database: './src/session/db.json'}).middleware());
bot.use(stage.middleware());

CommandHandler(bot);
CallbackHandler(bot);
TextHandler(bot);

bot.launch();