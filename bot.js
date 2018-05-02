const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+help') {
    	message.reply('iGalactic `BOT` Was Made / Developed By `xXCaulDevsYT#7314` There Are Currently **__1__** Commands: `+help (shows a list of commands`');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
