const Discord = require('discord.js')
const db = require('croxydb')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message ,args) => {

    if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

if(!args[0]) return message.reply(`**Hatalı Kullanım❌\nAyarlamak İçin:  ${ayarlar.prefix}hg-bb log-ayarla #kanal\nSıfırlamak İçin:  ${ayarlar.prefix}hg-bb log-sıfırla**`)
  let kanal = message.mentions.channels.first()

  if(args[0] == 'log-ayarla') {
  db.set(`cshgbb.${message.guild.id}`, kanal.id)
if(!kanal) return message.reply("**Bir Kanal Belirtmedin!**")
  message.channel.send(`**hg-bb Kanalı Başarıyla \`${kanal.name}\` Olarak Ayarlandı!**`)
    
  }

  if(args[0] == 'log-sıfırla') {
  db.delete(`cshgbb.${message.guild.id}`)
  message.channel.send(`**Sistem Sıfırlandı!**`)
 
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0,
};

exports.help = {
  name: "hg-bb",
};  