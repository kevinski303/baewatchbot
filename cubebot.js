/* 
  Prerequisites
npm install discord.js // The core discord.js framework. https://discord.js.org/#/
npm install ffmpeg-binaries // Gives your ability the bot to hear (required to join vc)
npm install node-opus or npm install opusscript // Required to stream audio, node-opus recommended
  Installation
npm install discord.js-music-v11 https://github.com/nexu-dev/discord.js-music
*/

const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();

const token = "" //bot api token

//Musicbot
Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    Bot.user.setGame('!help')
});

music(Bot, {
	prefix: '!',        // Prefix of '!'.
	global: false,      // Server-specific queues.
	maxQueueSize: 5,   // Maximum queue size of .
	clearInvoker: false, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
  channel: ''    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});

//Textlisteners
Bot.on('message', message => {
  if (message.content === '!help') {
    message.channel.send('Music Commands:``` !play, !skip, !queue, !pause, !resume, !volume, !leave, !clearque ```');
    message.channel.send('Other Commands:``` !invite, !gotu ```');
  }
  if (message.content === '!invite') {
  message.channel.send('The invite link to this discord server:');
  message.channel.send('https://discord.gg/msBscjq');
  }
  if (message.content === '!gotu') {
  message.channel.send('I got you :wink:');
  message.channel.send('https://streamable.com/f6lkd');
  }
});
Bot.login(token);
