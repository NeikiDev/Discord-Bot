
//version: Title


const { Client } = require("discord.js");
const client = new Client

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "The Latency of the Bot",
   async execute(message) {

        const Discord = require('discord.js');
        const msg = await message.channel.send("Pinging Bot & API....");
        const Embed = new Discord.MessageEmbed()
          .setTitle("Bot Latency.")
          .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
          .setDescription(
            `⌛ Latency is ${Math.floor(
              msg.createdTimestamp - message.createdTimestamp
            )}ms\n🌐 API Ping is ${Math.round(message.client.ws.ping)}ms`
          )
          .setColor('GREEN')
          .setFooter(`https://github.com/NeikiDev/Discord-Bot`)
        msg.edit(Embed);
        msg.edit("\u200b");
          
  

    }

  };