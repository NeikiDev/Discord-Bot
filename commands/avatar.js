//version = ?title

const discord = require('discord.js');
const client = new discord.Client

  module.exports = {
    name: "avatar",
    aliases: ["av"],
    description: "Shows your Avatar",
    execute(message) {
  
  
  let color = message.member.displayHexColor;
  if (color == '#000000') color = 'RANDOM'


const embed = new discord.MessageEmbed()
.setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
.setTitle(`Avatar by ${message.author.tag}`)
.setColor(color)

message.channel.send(embed)

if (!this.avatar) return null;
return  message.reply(`There was an error executing that command.`).catch(console.error);


}

}


