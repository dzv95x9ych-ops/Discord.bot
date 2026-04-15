const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// أمر !ping
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Pong! 🏓");
  }
});

// تشغيل البوت
client.login(process.env.TOKEN);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

app.listen(3000, () => {
  console.log('Keep-alive server running');
});