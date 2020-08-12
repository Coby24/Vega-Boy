module.exports = {
    name: 'minecraft',
    description: 'Adds The Minecraft Roll',
    execute(message, args) {
        
        if(message.member.roles.cache.has('711024404456275968')){
            message.channel.send('You already have this role and permissions to the channels.')
        } else {
            message.channel.send('Minecraft Role Added!');
            message.member.roles.add('711024404456275968');
        }






    }
}