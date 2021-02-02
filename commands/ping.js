
const { Client } = require("discord.js");


const client = new Client({ disableMentions: "everyone" });

module.exports = {
    name: "ping",
    description: "The Latency of the Bot (PING)",
   async execute(message) {

        const Discord = require('discord.js');
        //const client = new Discord.Client();
        const msg = await message.channel.send("Pinging...");
        const Embed = new Discord.MessageEmbed()
          .setTitle("Pong!")
          .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
          .setDescription(
            `⌛ Latency is ${Math.floor(
              msg.createdTimestamp - message.createdTimestamp
            )}ms\n⏲️ API Ping is ${Math.round(message.client.ws.ping)}ms`
          )
          .setColor('#fb644c');
        msg.edit(Embed);
        msg.edit("\u200b");
          
  

    }

  };