const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+bothelp') {
    	message.reply(' Commands: `+help (shows a list of commands` , `+donate (donate to the bot)` , `+botinfo (show info about the bot)`, `+botyoutube (shows yt)`!');
  	}
});

client.on('message', message => {
    if (message.content === '+botinfo') {
    	message.reply('**__iGalactic Bot__** » **Developed By** `@xXCaulDevsYT#7314` «');
  	}
});

client.on('message', message => {
    if (message.content === '+donate') {
    	message.reply('**__Donate Here__** » https://paypal.me/caulden | Donations Help Keep The Bot Up! «');
  	}
});

client.on('message', message => {
    if (message.content === '+botyoutube') {
    	message.reply('**YOUTUBE:** » https://youtube.com/emeraldassasinplayz «');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
