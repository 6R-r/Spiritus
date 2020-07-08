module.exports.run = async (client, message, args) =>{
    if(!client.config.ADMIN.includes(message.author.id)) return message.channel.send(`${client.config.emojis.FALSE}Tu n'est pas admin du BOT `)
    file = args.slice(1).join(" ")
    dir = args[0]
    chemin = `./../${dir}/${file}.js`
    try {
        delete require.cache[require.resolve(`${chemin}`)];
        client.files.delete(file)
        const pull = require(`${chemin}`)
        client.files.set(file, pull)
        message.channel.send(`${client.config.emojis.TRUE}Reloaded file \`${file}\``);
    } catch (err) {
        return message.channel.send(`${client.config.emojis.FALSE}An error occured: \n\`\`\`js\n${err}\n\`\`\``);
    }
    
}
module.exports.help = {
        
    name : 'reload',
    aliases : ['reload'],
    category : 'admin',
    description : 'Recharge une commande.',
    cooldown : 5,
    usage : '[dir] [file]',
    exemple :[],
    permissions : true,
    isUserAdmin: false,
    args : true,
    sousCommdandes : [""]

}    
    