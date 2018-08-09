const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";

bot.login(process.env.BOT_TOKEN);


bot.on("ready", function() {
    console.log("Estou online!");
});

bot.on('ready', () => {
    bot.user.setGame(`<3`);
});

bot.on('guildMemberAdd', member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage("Olá, quer um servidor onde possa falar com amigos e tudo mais? TUDO LIBERADO!!!! entre agora e divirta-se a vontade :) https://discord.gg/rHWMxuD");

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = PREFIX;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  //  if (cmd === `${prefix}ping`){
   //     if(!message.member.hasPermission("MANAGE_MESSAGES"));
     //   const ms = await message.channel.send("Calculando...");
    //    const clientms = ms.createdTimestamp - message.createdTimestamp;
    //    ms.edit('Meu Ping: ' + Math.round(bot.ping) + 'ms');
   // }

});
