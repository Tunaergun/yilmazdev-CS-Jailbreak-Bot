const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(" | OtoRol", client.user.avatarURL())
    .setColor("#00ff00")
    .addField(
      "__OTOROL Ayarlamak__",
      `__**Oto-Rol-Ayarla**__ 💡 **Otorolü Ayarlar.**\n Örnek: ${prefix}oto-rol-ayarla @rol #logkanalı \n \n __**${prefix}otorol-msg**__ <:sag:822547800481988628>  **Otorol Mesajını Ayarlar.** \n Örnek: ${prefix}otorol-msg -server-, Sunucumuza Hoşgeldin, -uye- -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`
    )

    .addField(
      "__**Kullanabileceğiniz Değişkenler**__",
      `
**-uye-** 💡 \`Üyeyi Etiketler.\`
**-rol-** 💡 \`Rolün İsmini Ekler.\`
**-server-** 💡 \`Server İsmini Yazar.\`
**-uyesayisi-** 💡> \`Üye Sayısını Atar.\`
**-botsayisi-** 💡 \`Bot Sayısını Atar.\`
**-kanalsayisi-** 💡 \`Kanal Sayısını Atar.\`
**-bolge-** 💡 \`Sunucu Bölgesinin İsmini Atar.\`
`
    )
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: "otorol",
  description: "sayaç",
  usage: "sayaç"
};
