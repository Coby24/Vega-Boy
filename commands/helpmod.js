module.exports = {
    name: 'helpmod',
    description: 'help',
    execute(message, args) {
        
        if(!message.member.roles.cache.has('703293323007229993' || '741476805579505702' || '707651369347055647')){
            message.channel.send('You have no permissions to do that');
            return;
        };
        if(message.member.roles.cache.has('703293323007229993' || '741476805579505702' || '707651369347055647')){

        message.channel.send('A message has been send to your private messages if you do not have them enabled please enable them and type the command again.');
        message.channel.send('My creator is @Coby#0233 if there are any problems feel free to message him!')
        message.author.send('My creator is @Coby#0233 if there are any problems feel free to message him!')
        message.author.send('1. --kick');
        message.author.send('2. --ban');
        message.author.send('3. --mute (SOON)');




    }
}
}