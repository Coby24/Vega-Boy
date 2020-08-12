module.exports = {
    name: 'kick',
    description: 'This Shows When And If Events Are Planned',
    execute(message, args) {

    if(!message.member.roles.cache.has('741476805579505702')){
            message.channel.send('You have no permissions to do that');
            return;
        };
        if(message.member.roles.cache.has('741476805579505702')){

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('please mention the user you need to kick');
            return;
        }
        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.kickable) {
            message.channel.send('I have no permissions to kick this user');
            return
        };

        //If all steps are completed successfully try kick this user
        mentionMember.kick()
            .then(() => console.log(`Kicked ${member.displayName} from the team vega discord`))
            .catch(console.error);
}
if(!message.member.roles.cache.has('703293323007229993')){
    message.channel.send('You have no permissions to do that');
    return;
};
if(message.member.roles.cache.has('703293323007229993')){

    //const a member, wich you need yo kick (its fist mention message member)
    let mentionMember = message.mentions.members.first();
    //If user dont mention a member, that show him this error msg
    if(!mentionMember) {
        message.channel.send('please mention the user you need to kick');
        return;
    }
    //Check if your bot can`t kick this user, so that show this error msg 
    if(!mentionMember.kickable) {
        message.channel.send('I have no permissions to kick this user');
        return
    };

    //If all steps are completed successfully try kick this user
    mentionMember.kick()
        .then(() => console.log(`Kicked ${member.displayName} from the team vega discord`))
        .catch(console.error);
}
if(!message.member.roles.cache.has('703293577643557004')){
    message.channel.send('You have no permissions to do that');
    return;
};
if(message.member.roles.cache.has('703293577643557004')){

    //const a member, wich you need yo kick (its fist mention message member)
    let mentionMember = message.mentions.members.first();
    //If user dont mention a member, that show him this error msg
    if(!mentionMember) {
        message.channel.send('please mention the user you need to kick');
        return;
    }
    //Check if your bot can`t kick this user, so that show this error msg 
    if(!mentionMember.kickable) {
        message.channel.send('I have no permissions to kick this user');
        return
    };

    //If all steps are completed successfully try kick this user
    mentionMember.kick()
        .then(() => console.log(`Kicked ${member.displayName} from the team vega discord`))
        .catch(console.error);
}


}
}