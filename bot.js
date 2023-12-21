import { Input, Telegraf } from "telegraf";

import { BOT_TOKEN } from "./config.js";

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply('Тебя приветствует бот Аминат Аксоровой!'));

bot.command('course', (ctx) => ctx.reply('Выбери свой скам курс и тд и тп'));

bot.command('photoTest', async (ctx) => await ctx.replyWithPhoto(Input.fromLocalFile('./images/img-1.jpg')));

bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.reply(`Я не договорила!!!..`)
  
    // Using context shortcut
    await ctx.leaveChat();
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));