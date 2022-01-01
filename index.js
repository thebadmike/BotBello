const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTI2ODUyNTA2MTM3NTU0OTY0.YdBsqQ.yzIVVwgvUeuInZPGj1qero6xyPY")

client.on("ready", () => {
    console.log("Bot Online")
})

client.on("messageCreate", (message) =>{
    if(message.content == "|database") {
       message.channel.send("ciao STAFF, ecco a te tutti i comandi disponibile del bot di thebadmike: |database |options | embed")
    }

    if(message.content == "|options") {
        message.channel.send("ciao staff, invia a messaggio a thebadmike#2800 lui ha creato il bot!")
    }

    if(message.content == "|embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("TORNEI")
            .setDescription("tornei interni")

        message.channel.send({ embeds: [embed] })    
    }
})



