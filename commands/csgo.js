module.exports = {
    name: 'csgo',
    description: 'Adds The Counter Strike Roll',
    execute(message, args) {
        
        if(message.member.roles.cache.has('711024505421692950')){
            message.channel.send('You already have this role and permissions to the channels.')
        } else {
            message.channel.send('CSGO Role Added!');
            message.member.roles.add('711024505421692950');
        }






    }
}