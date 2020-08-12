module.exports = {
    name: 'ban',
    description: 'This Shows When And If Events Are Planned',
    execute(message, args) {
      
        if(!message.member.roles.cache.has('741476805579505702')) {
            message.channel.send('You have no permissions to ban users');
            return;
        };
        if(message.member.roles.cache.has('741476805579505702')){

        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }

        let banMember = message.guild.member(message.mentions.users.first());

        if (!banMember) { return message.channel.send('User not found!'); }
        
                banMember.ban().then((member) => {
                    message.channel.send(member.displayName + " has been successfully banned by " + message.author);
                })
            }
            if(!message.member.roles.cache.has('703293323007229993')) {
                message.channel.send('You have no permissions to ban users');
                return;
            };
            if(message.member.roles.cache.has('703293323007229993')){

                if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
        
                let banMember = message.guild.member(message.mentions.users.first());
        
                if (!banMember) { return message.channel.send('User not found!'); }
                
                        banMember.ban().then((member) => {
                            message.channel.send(member.displayName + " has been successfully banned by " + message.author);
                        })
                    }
                    if(!message.member.roles.cache.has('703293577643557004')) {
                        message.channel.send('You have no permissions to ban users');
                        return;
                    };
                    if(message.member.roles.cache.has('703293577643557004')){

                        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
                
                        let banMember = message.guild.member(message.mentions.users.first());
                
                        if (!banMember) { return message.channel.send('User not found!'); }
                        
                                banMember.ban().then((member) => {
                                    message.channel.send(member.displayName + " has been successfully banned by " + message.author);
                                })
                            }
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        }
    }