const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+bothelp') {
    	message.reply(' Commands: `+help (shows a list of commands`,`+attack`,`+imhungry` , `+donate (donate to the bot)` ,`+adpeprefix`, `+botinfo (show info about the bot)`, `+botyoutube (shows yt)`!');
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

client.on('message', message => {
    if (message.content === '+adpeprefix') {
    	message.reply('**Prefix:** » **+** «');
  	}
});

client.on('message', message => {
    if (message.content === '+imhungry') {
    	message.reply(' +100 Cookies «');
  	}
});

client.on('message', message => {
    if (message.content === '+attack') {
    	message.reply('**» You Have Been Attacked**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
