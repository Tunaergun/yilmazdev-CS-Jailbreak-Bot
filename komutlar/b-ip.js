const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args, member) => {
const ıp = new Discord.MessageEmbed()
  .setAuthor(`${ayarlar.isim}`, client.user.avatarURL())
  .setColor("BLUE")
  .addField(`**Sunucu İp:${ayarlar.ip}**` , `**Hızlı Giriş İçin:steam://connect/${ayarlar.ip}**`)
  message.reply(ıp)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
}

exports.help = {
    name: "ip",
    description: "",
    usage: ""
}