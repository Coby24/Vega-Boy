module.exports = {
    name: 'rocket',
    description: 'This Shows When And If Events Are Planned',
    execute(message, args) {
        
        if(message.member.roles.cache.has('741824435501400125')){
            message.channel.send('You already have this role and permissions to the channels.')
        } else {
            message.channel.send('You do not have this role allow me one moment to add it!');
            message.member.roles.add('741824435501400125');
        }






    }
}