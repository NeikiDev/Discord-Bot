const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js");
const client = new Client

module.exports = {
    name: "help",
    aliases: ["h","commands"],
    description: "All Commands and Description",
    execute(message) {
      let commands = message.client.commands.array();
  
      let helpEmbed = new MessageEmbed()
        .setTitle(`>> ${client.user.username} Help <<`)
        .setDescription("Commands and Descriptions")
        .setColor("RANDOM");
  
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
  