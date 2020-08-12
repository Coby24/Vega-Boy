module.exports = {
    name: 'apply',
    description: 'Messages you application link',
    execute(message, args) {
        
        
        
        message.channel.send('A message has been sent to your private messages if you do not have messages enabled please enable them and type this command again.');
        message.author.send('https://forms.gle/bRtyCKVm3BLWVv517');




    }
}