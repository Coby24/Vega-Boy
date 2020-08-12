const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        
        message.channel.send('A message has been send to your private messages if you do not have them enabled please enable them and type the command again.');
        message.channel.send('My creator is @Coby#0233 if there are any problems feel free to message him!')
        message.author.send('My creator is @Coby#0233 if there are any problems feel free to message him!')
        message.author.send('1. --Apply');
        message.author.send('2. --Rocket or RocketLeague (This give you the rocketleague role)');
        message.author.send('3. --Event Or Events (Tells you when and if events are happening!)');
        message.author.send('4. --Rules (Sends you a copy of our updated list of rules');




    }
}