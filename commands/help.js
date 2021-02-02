const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });

module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Alle Commands and Description",
    execute(message) {
      let commands = message.client.commands.array();
  
      let helpEmbed = new MessageEmbed()
        .setTitle(`>> ${client.user.username} Help <<`)
        .setDescription("Lists all Commands")
        .setColor("#F8AA2A");
  
      commands.forEach((cmd) => {
        helpEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      });
  
      helpEmbed.setTimestamp();
  
      return message.channel.send(helpEmbed).catch(console.error);
    }
  };
  