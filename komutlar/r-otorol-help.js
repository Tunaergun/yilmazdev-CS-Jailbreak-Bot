const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
var sn = ayarlar.isim;
exports.run = async (bot, msg, args) => {
  const otorol = new Discord.MessageEmbed()
    .setAuthor(` | OtoRol Sistem`)
    .setTitle(`${sn}`)
    .setColor("#00ff00")
    .setDescription(
      `⚠️  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__OtoRol__**`,
      `⚠️ \`${prefix}otorol\` \n OtoRolü Nasıl Ayarlayacagınız Hakkında Bilgi Tablosu.`,
        true
    )
  .addField(
      `**__OtoRol Msg__**`,
      `⚠️ \`${prefix}otorol-msg\` \n Sunucunuza Özel Otorol Msg Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Ayarla__**`,
      `⚠️ \`${prefix}oto-rol-ayarla\` \n OtoRol Mesaji Gidecegi Kanalı Ve Rölü Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Kapat__**`,
      `⚠️ \`${prefix}otorol-kapat\` \n Tüm OtoRol Ayalarını Sıfırlarsınız.`,
        true
    )
  msg.channel.send(otorol);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: `Sahip`
};
exports.help = {
  name:"otorol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "otorol"
};
