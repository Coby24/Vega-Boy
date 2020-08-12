const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '--';

const fs = require ('fs');
const { cpuUsage } = require('process');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Vega is online!');
});
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

     if (command === 'event'){
        client.commands.get('event').execute(message, args);

    } else if (command === 'events'){
        client.commands.get('event').execute(message, args);


    } else if (command === 'apply') {
        client.commands.get('apply').execute(message, args);
   
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'rocket'){
        client.commands.get('rocket').execute(message, args);

    } else if (command === 'rocketleague'){
        client.commands.get('rocket').execute(message,args);

    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);

    } else if (command === 'pasterules') {
        client.commands.get('pasterules').execute(message, args);

    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    } else if (command === 'helpmod') {
     client.commands.get('helpmod').execute(message, args);

    } else if (command === 'author') {
     client.commands.get('author').execute(message, args);

    } else if (command === 'application') {
    client.commands.get('application').execute(message, args);

    } else if (command === 'applications') {
    client.commands.get('applications').execute(message, args);

    } else if (command === 'minecraft') {
    client.commands.get('minecraft').execute(message ,args);
    
    } else if (command === 'csgo') {
    client.commands.get('csgo').execute(message, args);
    
    } else if (command === 'poll') {
    client.commands.get('poll').execute(message, args);
   
    } else if (command === 'creator') {
    client.commands.get('creator').execute(message, args);
    

} else if (command === 'eleaguerules') {
    client.commands.get('eleaguerules').execute(message, args);

} else if (command === 'unban') {
    client.commands.get('unban').execute(message, args)
    
} else if (command === 'online') {
    client.commands.get('online').execute(message, args);

} else if (command === 'schedule') {
    client.commands.get('schedule').execute(message, args);
}
     
});
  

client.login('NzQxNzc2MDEzNDY5NDE3NTQz.Xy8evw.jC7iRL7EVTKrF1ckRB46Ai-FxGY');