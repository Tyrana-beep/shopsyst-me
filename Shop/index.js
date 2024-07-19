const express = require("express")//لا يسمح ب التعديل
const app = express()// لا يسمح بالتعديل

const { AutoKill } = 
require('autokill');//لا يسمح ب التعديل

const { Probot } = require('discord-probot-transfer')//لا يسمح ب التعديل

const axios = require("axios")//لا يسمح ب التعديل

const db = require('pro.db')//لا يسمح ب التعديل

const { Client, Events, GatewayIntentBits, ButtonBuilder, ButtonStyle,SlashCommandBuilder, ActionRowBuilder,EmbedBuilder, SelectMenuBuilder,ChannelType,ActivityType, messageLink} = require('discord.js')//يسمح بالاضافة و التعديل


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});//يسمح بالاضافة و التعديل


const { prefix } = require('./config.json')//يسمح بالتعديل و الاضافة على حسب الاحتياج

client.once(Events.ClientReady,c => {
  console.log(`login in ${c.user.tag}`)
client.user.setPresence({ activities: [{ name: `Server Store`, type: 3 }], status: 'online' })//يسمح بالتعديل
app.get('/', (req, res) => {
  res.send("Tyrana")//يسمح بالتعديل هنا فقط
})
app.listen(3000, () => {
  console.log('Uptimed By T');//يسمح بالتعديل هنا فقط
});
});

          //
         //==============
        //
       //ativities :
      //ActivityType.Competing =	5
     //ActivityType.Custom	 = 4
    //ActivityType.Listening =	2
   //ActivityType.Playing	= 0
  //ActivityType.Streaming =	1
 //ActivityType.Watching =	3
//
  //
    // status :
      // idle
        // invisible
          // online
             // dnd
                // ==============


process.on("uncaughtException" , error => {
return;
})//لا يسمح ب التعديل

process.on("unhandledRejection" , error => {
return;
})//لا يسمح ب التعديل

process.on("rejectionHandled", error => {
return;
});//لا يسمح ب التعديل

AutoKill({ Client: client, Time: 10000 }); //لا يسمح ب التعديل

// نزل الاكواد سطر 79 
//اصدار 14 اهم شي اي اصدار اخر ما رح يشتغل


///say
client.on('messageCreate', async message => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "say") {
    try {
      const text = args.join(' ');
      if (!text) {
        return message.reply('ي عم اكتب رسالة طيب متجبليش شلل.');
      }

      await message.channel.send(text);
      await message.delete();
    } catch (error) {
      console.error(error);
    }
  }

  // يمكنك إضافة أكواد أخرى هنا بنفس الحدث بدون `client.on`
});

///تغيير اسم البوت
let owner = "1012504181271171142"; ///اشخاص المسموح لهم باستخدام الامر
client.on("messageCreate", General => {
    if(General.content.startsWith(prefix+"set-name")){
        if(General.author.id !== owner) 
     return General.reply(`لا تمتلك الرتبة`);
        let name = General.content.split(" ").slice(1).join(" ");
        if(!name) return General.reply("❌ اكتب الاسم الجديد من فضلك")
        client.user.setUsername(name);
     General.reply(`**تم تغيير اسم البوت الى ✅ ${name}**`);
    } 
}) 

///ضريبة 
client.on('messageCreate', message => {
const channelid = ["", "1259642262384676864"] ///ايدي روم الضريبة
if(channelid.includes(message.channel.id) && !message.author.bot){
  const args = message.content.split(" ").join( )
  const args2 = args.replace("k", "000").replace("K", "000").replace("m", "000000").replace("M", "000000").replace("b", "000000000000").replace("B", "000000000000")
  const tax  = Math.floor(args2 * (20) / (19) + (1))
  const tax2  = Math.floor(args2 * (20) / (19) +(1) - (args2))
  const tax3  = Math.floor(tax2 * (20) / (20))
  if(!args.endsWith("k") && !args.endsWith("K") && !args.endsWith("m") && !args.endsWith("M") && !args.endsWith("b") && !args.endsWith("B") && isNaN(args)) return message.delete()
message.reply(` **
> Number without tax : ${args2}
⚠️ Bot Will Take : ${tax3}
> Your Final Tax : ${tax}

**`)
}
})

/// خط امر 
client.on("messageCreate", Aaa  => {
  if(Aaa.content ==  "خط") {
let role_id = "1255288340698370088" // الرول المسموح لها باستخدام الامر
let owner = ["101250418127117114"] // الاشخاص المسموح لهم باستخدام الامر
const link ="https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&"  // لينك الخط
if(!Aaa.member.roles.cache.has(role_id))
if(!owner.includes(Aaa.author.id)) return Aaa.channel.send({ embeds: [new EmbedBuilder().setDescription(`عفواً ليس لديك صلاحيات `)] }).then(m =>{
  setTimeout(() => m.delete().catch(e =>{return console.log(`message delte`)}), 3000) 
  setTimeout(() => Aaa.delete().catch(e =>{return console.log(`message delte`)}), 3000)
 })
 Aaa.channel.send(link),Aaa.delete()
  }})

// كود خط تلقائي
      let autoline_channel = ['1262050768794550334','1259519123856167013','1259533411727446026','1259533496398123131','1259642262384676864','','',] // ايدي الروم (تقدر تضيف اكثر من روم)
      let line = `https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&`//رابط الخط

      client.on(`messageCreate`, async message => {
              if(message.channel.type === "DM"|| message.author.bot) return
              if(autoline_channel.includes(message.channel.id)) {
                      message.channel.send({files : [line]})
              }
      })


///ping
client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    const ping = Date.now() - message.createdTimestamp;

    let color;

    if (ping < 100) {
      color = "#00FF00";
    } else if (ping < 200) {
      color = "#FFFF00";
    } else {
      color = "#FF0000";
    }

    let emoji;

    if (ping < 100) {
      emoji = "🟢";
    } else if (ping < 200) {
      emoji = "🟡";
    } else {
      emoji = "🔴";
    }

    const embed = new EmbedBuilder()
      .setColor(color)
      .setTitle("Bot Uptime & Ping:")
      .addFields("Uptime", `**${uptimeString}**`, true)
      .addField("Ping", `**${emoji} ${ping}ms**`, false)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  }
});


///help

const Discord = require('discord.js')
client.on('messageCreate', async (msg) => {
  if (msg.content === prefix + 'help') {
    const embed = new Discord.EmbedBuilder()
      .setTitle('Help')
      .setDescription("Welcome! Here's a list of available commands:\n\n- **Public**: View public commands.\n- **Support**: View Support commands.\n- **Seller**: View Seller commands.\n- **Owner**: View Owner commands.\n- **Support Server**: Join our support server.")
      .setImage("https://cdn.discordapp.com/attachments/1262050768794550334/1263636676597645352/1251321291118608388.png?ex=669af4dc&is=6699a35c&hm=4f923a168bbded86302bcc1ea8d6ade6e574a1e8713fcdd1c243ef42e2197709&")
      .setThumbnail("https://cdn.discordapp.com/attachments/1259519136745132167/1263637405181808721/rolexavatar.PNG?ex=669af58a&is=6699a40a&hm=ccc2db0769a52cba5f2939af08ad8f442af515184d1cc8360541cfa58eb51b9c&")
    .setFooter({text: `Copy Right To Tyrana`})

    const row = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setLabel('Public')
          .setStyle(Discord.ButtonStyle.Primary)
          .setCustomId('public'),

        new Discord.ButtonBuilder()
          .setLabel('Support')
          .setStyle(Discord.ButtonStyle.Success)
          .setCustomId('admin'),

        new Discord.ButtonBuilder()
          .setLabel('Seller')
          .setStyle(Discord.ButtonStyle.Secondary)
          .setCustomId('seller'),

        new Discord.ButtonBuilder()
        .setLabel('Owner')
        .setStyle(Discord.ButtonStyle.Danger)
        .setCustomId('owner'),

        new Discord.ButtonBuilder()
        .setLabel('Programmer')
        .setEmoji('<:te:1211041834865008690>')
        .setStyle(ButtonStyle.Link)
        .setURL(`https://discord.com/users/1012504181271171142`)
      );

    msg.reply({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === 'seller') {
      const embed = new Discord.EmbedBuilder()
        .setTitle('Seller Commands')
        .setDescription(`**

> +dms \`\ To Send Msg DM To Member \`\
      
> +come \`\ To Come DM To Member \`\

> channel-info \`\ To Get Info Of Any Channel  \`\

> +font \`\ To Change Word For 𝐖𝐨𝐫𝐝 \`\

> **For Tickets** :

> \`\  Ws \`\

> \` \ +Come \`\

> \`\ +come \`\

>  \`\ - \`\

> \`\ T \`\
        **`)

        .setFooter({text: `Copy Right To Tyrana`})

      interaction.reply({ embeds: [embed], ephemeral: true });
    } else if (interaction.customId === 'admin') {
      const embed = new Discord.EmbedBuilder()
        .setTitle('Support Commands')
        .setDescription(`**

> +slowmode \`\ To Make slowmode In The Channel \`\

> +say \`\ To Make Say Message \`\

> +clear \`\ To Delete Amount Of Messange \`\

> +tra \`\ To Traduire a Word \`\

> +font \`\ To Change Font Of Word \`\

> +line 

> +channel-info \` \To Show Info Channel \`\

> Accepted \`\ To Accept Someone For Team \`\
 
> Rejected \`\ To Reject Someone For Team \`\
      **`)
      .setFooter({text: `Copy Right To AfriCa Studio`})


      interaction.reply({ embeds: [embed], ephemeral: true });
    } else if (interaction.customId === 'public') {
      const embed = new Discord.EmbedBuilder()
        .setTitle('Public Commands')
        .setDescription(`**
 
> +uptime \`\ To Show Uptime Bot \`\

> +link \`\ To Show Link Server \`\

> +user \`\ To Show Info Of Member \`\

> +avatar \`\ To Show Avatar Member \`\

> +tra \`\ To Traduire Anything \`\

> +banner \`\ To Show The Banner Of Member \`\

> +calcul \`\ To Open Calculatrice \`\
> Tax 
> +roll
> +server \`\ To Show Info Of Our Server \`\
      **`)
      .setFooter({text: `Copy Right To Tyrana`})


      interaction.reply({ embeds: [embed], ephemeral: true });
    }else if (interaction.customId === 'owner') {
      const embed = new Discord.EmbedBuilder()
        .setTitle('Owner Commands')
        .setDescription(`**
> +set-avatar \`\ To Change The Avatar Of The Bot \`\

> +set-name \`\ To Change The Name Of The Bot \`\
        **`)
      .setFooter({text: `Copy Right To Tyrana`})

      interaction.reply({ embeds: [embed], ephemeral: true });
    }
  }
});


///
// كود رياكشن تلقائي
let autoreact_channel = [''] // ايدي الروم (تقدر تضيف اكثر من روم)
client.on('messageCreate', async message => {
        if(message.channel.type === 'DM' || message.author.bot) return //.
        if(autoreact_channel.includes(message.channel.id)) { //.
   message.react('✅') // تقدر تعدل على الايموجي
   message.react('❌') // تقدر تضيف اكثر من ايموجي عن طريق اضافة هذا السطر
        }
})


// كود يحول اي رسالة في الروم الى ايمبد
const embed_channels = [""];  //تقدر تضيف اكثر من روم
let e_line = ``; //رابط الخط
client.on("messageCreate", async (message) => {
  if (message.author.bot || message.channel.type === "DM") return; 
  if (embed_channels.includes(message.channel.id)) {
    let embed = new EmbedBuilder() 
      .setAuthor({
        name: `${message.author.username}`,
        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`,
      }) 
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription(`${message.content}`) 
      .setColor('Random')
      .setTimestamp();
    message.delete().then(async () => {
      await message.channel.send({ embeds: [embed] })
      await message.channel.send({files : [e_line]})
    });
  }
});


///

client.on("messageCreate", async (message) => {
    if (message.content.startsWith(prefix + "set-avatar")) {
        if (message.author.id !== "1012504181271171142") return; /// ايدي الي يقدر يغير الصورة

        const args = message.content.split(" ");
        if (!args[1]) return message.reply("Avatar Link required");

        try {
            await client.user.setAvatar(args[1]);
            message.reply({ embeds: [
                new MessageEmbed()
                    .setTitle('تم تغيير صورة البوت')
                    .setImage(args[1])
                    .setColor('GREEN')
            ]});
        } catch (err) {
            message.reply("تم تغيير صوره بنجاح.");
            console.error(err);
        }
    }
});

///سيلكة منيو
client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix +`selle`)) {
    const row = new ActionRowBuilder()
      .addComponents(
        new SelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder('اضغط على القائمة للاختيار')
          .addOptions([
            {
              label: 'Platform',  
              value: 'option1',

            },
            {
              label: 'Rules The Server',
              value: 'option2',

            },
            {
              label: 'Maps',
              value: 'option3',

            },
            {
              label: 'Information Server',
              value: 'option5',

            },
            {
              label: 'Reset',
              value: 'option4',

            }
          ]),
      );

    const embed = new EmbedBuilder()
      .setTitle('Our Server')
      .setDescription(`\`#\` **مرحبا بك في قائمة معلومات سيرفر Rolexومن هذه القائمة يمكنك التعرف على كل ما يخص السرفر وأيضا على بعض الأشياء الأخري**\n\n \`$\` **يمكنك عن طريق الضغط علي القائمة المنسدلة ادناه رؤية القوانين وتعريف السيرفر بشكل افضل .**`)
      .setImage("https://cdn.discordapp.com/attachments/1255288452904255498/1257782990554005544/Picsart_24-06-09_21-27-25-150.jpg?ex=6685a931&is=668457b1&hm=8e336889d4dc4738c16c61599cf442650a255face5a1c5e088f7b68f3c3b6b3c&")
      .setFooter({text: `Copy Right To AfriCa Studio`})

      .setColor('#ff0000')
    await message.channel.send({ embeds: [embed], components: [row] });
  }
});
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const selectedValue = interaction.values[0];

  switch (selectedValue) {
    case 'option1':
      const embed1 = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('Platform Of The Server')
      .setDescription(`**
> تعريف \n\n- هو من اضمن واقدم مـ ـ ـتـ ـاجر بالشرق الاوسط يوفر جميع الخدمات الالكترونيه بارخص الاسـ ـ ـعـار واعلي كفاءة.\n- طاقم عمل مكون من افضل واضمن بائعين بالشرق الأوسط لضمان جوده المنتجات المـ ـ ـباعه.\n- الدعم الفني بالسيرفر متواجد 24/7 لخدمتكم.
**`)
      .setImage("https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&")
      .setFooter({text: `Copy Right To Tyrana`})

      await interaction.reply({ ephemeral: true, embeds: [embed1] });
      break;
    case 'option2':
    const embed2 = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('Rules Of The Server')
      .setDescription(`**
¹ - أحترام الجميع ويمنع السب الصوتي والكتابي\n² - ممنوع طلب الرتب ، الرتب تمنح ولا تطلب\n³ - يمنع نشر روابط بدون الاستئذان من الإدارة\n⁴ - ممنوع التكرار او السبام ويجب الالتزام بقوانين الإدارة 
**`)
      .setImage("https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&")
      .setFooter({text: `Copy Right To Tyrana`})

      await interaction.reply({ ephemeral: true, embeds: [embed2] });
      break;
    case 'option3':
     const embed3 = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('Maps')
      .setDescription(`**#- 𝐌𝐚𝐩 

 🌟 | 𝐎𝐫𝐝𝐞𝐫 - <طلب => <#1261778759170785310> . 

 🌟 | 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 - الدعم =>  <#1255288517937070081> .

 🌟 | 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐬 - <التحويلات =>  <#1259533496398123131> .


#- 𝐄𝐧𝐣𝐨𝐲 𝐖𝐢𝐭𝐡 𝐔𝐬 
 ⚠️ | 𝐋𝐢𝐧𝐤: https://discord.gg/xSH9HckxjU **`)
      .setImage("https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&")
      .setFooter({text: `Copy Right To Tyrana`})

      await interaction.reply({ ephemeral: true, embeds: [embed3] });
      break;
    case 'option4':
     const embed4 = new EmbedBuilder()
      .setColor('#ff0000')
      .setDescription(`[!] Please wait.`)
      await interaction.reply({ ephemeral: true, embeds: [embed4] });
      break;
    case 'option5':
     const embed5 = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('Information About The Server')
      .setDescription(`**  - Name Of Guild: Rolex\n  - The Owner : <@1012504181271171142> \n- Id Of The Guild: 1259258408838758532 **`)
      .setImage("https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&")
      .setFooter({text: `Copy Right To Tyrana`})


      await interaction.reply({ ephemeral: true, embeds: [embed5] });
      break;
    case 'option6':
     const embed6 = new EmbedBuilder()
      .setColor('#11806a')
      .setTitle('الاضافات')
      .setDescription(`=rgg`)
      await interaction.reply({ ephemeral: true, embeds: [embed6]
});
  }


});
 // امر بنر
 client.on("messageCreate" , async message => {
   if (message.content.startsWith(prefix + 'banner') || message.content.startsWith(prefix + 'بنر')) {
     args = message.content.split(' ')
       const member = message.mentions.users.first() || client.users.cache.get(args[1]) || message.guild.members.cache.get(args[1]) || message.author;
       uid = member.id
       const user = await client.users.fetch(uid, { force: true });

       if (user.bannerURL() !== null) {
       const image = user.bannerURL({dynamic : true , size : 2048})
      let button = new ActionRowBuilder()
       .addComponents(
       new ButtonBuilder()
       .setStyle(ButtonStyle.Link)
       .setLabel('تحميل')
       .setURL(image)
       )
       let embed = new EmbedBuilder()
       .setAuthor({name : `${user.username}` , iconURL : `${user.displayAvatarURL({dynamic : true})}`},)
       .setImage(image)
       .setFooter({text : `Requested by ${message.author.tag}` , iconURL : `${message.author.displayAvatarURL({ dynamic: true })}`})
       .setTitle(`رابط البنر`)
       .setURL(image)
       .setColor('Blue')
       .setTimestamp()
       message.reply({embeds : [embed], components: [button]})
       } else {
       if (user.bannerURL() == null && user.hexAccentColor !== null) {
       let cc = new EmbedBuilder()
       .setAuthor({name : `${member.username}` , iconURL : `${member.displayAvatarURL({dynamic : true})}`})
       .setFooter({text : `Requested by ${message.author.tag}` , iconURL : `${message.author.displayAvatarURL({ dynamic: true })}`})
       .setTimestamp()
       .setDescription(`**The color Of Banner : __${user.hexAccentColor}__**`)
       .setImage(`https://serux.pro/rendercolour?hex=${user.hexAccentColor.replace(/#/g, '')}&height=200&width=512`)
       .setColor(user.hexAccentColor)
       message.reply({embeds : [cc]})
       }} 
       if (user.bannerURL() == null && user.hexAccentColor == null ){
       message.reply(`**${user.username}** لون البنر هو الافتراضي، وأنا غير قادر على جلبه.`)
       }

       }})

client.login(process.env.token).catch((error) => {
})

client.on('guildCreate', async (guild) => {
  const roomID = '1255288535632707664';

  const serverOwner = `- The Owner : <@${guild.ownerId}>`; // مالك الخادم
  const memberCount = `- Count Of Member : ${guild.memberCount}`; // عدد أعضاء الخادم
  const verificationLevel = `- Level Of Protection : ${guild.verificationLevel}`; // مستوى الحماية
  const serverName = `- Name Of Guild: ${guild.name}`; // اسم الخادم
  const serverID = `- Id Of The Guild: ${guild.id}`; // معرّف الخادم


  const serverInfo = `
${serverOwner}
${memberCount}
${verificationLevel}
${serverName}
${serverID}`;

  const channel = client.channels.cache.get(roomID);
  if (channel) {
    await channel.send(`Done The Bot Joined a New Server\n${serverInfo}\n\n @everyone`);
  }
});
client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "user")) {
    let embed = new EmbedBuilder()
      .setColor("Random")
      .setAuthor({
        name: message.author.tag,
        iconURL: message.author.avatarURL({ dynamic: true }),
      })
      .setThumbnail(message.author.avatarURL())
      .setFooter({
        text: message.author.tag,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      })
      .setTitle("Info User")

      .setDescription(`** 
      - 🌟Name : ${message.author.tag}


      - Mention : ${message.author}


      - Id : ${message.author.id}


      - ⚠️Created At : ${message.author.createdAt.toLocaleString()}**`)



      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
});

//================================================
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "server")) {
    if (message.author.bot) return;
    const verificationLevels = { NONE: '0', LOW: '1', MEDIUM: '2', HIGH: '3', VERY_HIGH: '4' };
    let on = message.guild.presences.cache.filter(e => e.status == 'online')
    let idle = message.guild.presences.cache.filter(e => e.status == 'idle')
    let dnd = message.guild.presences.cache.filter(e => e.status == 'dnd')
    var embed = new EmbedBuilder()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addFields([
        {
          name: ` Server ID: `,
          value: `**${message.guild.id}**`
        },
        {
          name: ` Created On: `,
          value: `**<t:${parseInt(message.guild.createdAt / 1000)}:R>**`
        },
        {
          name: ` Owned by: `,
          value: `**${await message.guild.fetchOwner()}**`
        },
        {
          name: `  Members: (**${message.guild.memberCount}**)`,
          value: `**${Math.floor(on + idle + dnd)}** **Online \n${message.guild.premiumSubscriptionCount} Boosts **`
        },
        {
          name: ` Channels: (${message.guild.channels.cache.size})`,
          value: `**${message.guild.channels.cache.filter(m => m.type === 'GUILD_TEXT').size}** **Text | ${message.guild.channels.cache.filter(m => m.type === 'GUILD_VOICE').size} Voice**`
        },
        {
          name: ` Others: `,
          value: `**Verification Level: ${verificationLevels[message.guild.verificationLevel]}**`
        },
        {
          name: ` Roles:(${message.guild.roles.cache.size})`,
          value: `**You Can See Our Roles**`
        },
      ])
      .setColor("Random")
      .setAuthor({name :`${message.guild.name}`,  iconURL : `${message.guild.iconURL({ dynamic: true })}`})
    message.reply({ embeds: [embed] })
  }
})

//============================================================

//======================================
client.on('messageCreate', async Message => {
  if (Message.content.startsWith(prefix + 'clear')) {
    if (!Message.member.permissions.has('ManageMessages')) 
    return Message.channel.send('You do not have permission to use this command!')
  const args = Message.content.slice(prefix.length).trim().split(/ +/g)
  const amount = args[1]
  if (!amount || isNaN(amount)) return Message.channel.send('Please enter a valid number')
  if (amount > 100) return Message.channel.send('You cannot delete more than 100 messages')
  if (amount < 1) return Message.channel.send('You cannot delete less than 1 message')
  let message = await Message.reply({
      content:`Deleting messages..`,
      fetchReply:true
    }).catch(err => 0)
    Message.channel.messages.fetch({
     limit: 100,
    }).then(async(messages) => {
      messages = messages.map(c => c).slice(0,amount)
          await Message.channel.bulkDelete(messages,true).then(async msgs => {
     return Message.channel.send({content:`
      \`\`\`js\n${msgs.size} message ${msgs.size == 1 || msgs.size == 0  ? "has":"have"} been deleted.\`\`\``
      }).then(messages => setTimeout(() =>messages.delete().catch(err=> 0), 3000)).catch(err=> 0)

   }).catch(async(err) => {
     return Message.channel.send({content:`
    \`\`\`js\n0 message has been deleted.\`\`\``
    }).then(messages => setTimeout(() => messages.delete().catch(err=> 0), 3000)).catch(err=> 0)
    })
     })
      return;
  }
})


//=======================================================

const _0x513dab=_0x2907;function _0x2907(_0x4b867a,_0x5712b0){const _0x314254=_0x3142();return _0x2907=function(_0x2907d8,_0x36290d){_0x2907d8=_0x2907d8-0xd1;let _0xa9fffb=_0x314254[_0x2907d8];return _0xa9fffb;},_0x2907(_0x4b867a,_0x5712b0);}function _0x3142(){const _0x7bcd4e=['roles','split','1058184vBlYwu','\x20From\x20','get','members','slice','guild','518808cHAeJZ','startsWith','role\x20<user>\x20@role\x20**','17394DNesHI','cache','**✅\x20Done\x20remove\x20','5999544LlxhKz','44144ZdebfA','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command!','channel','send','\x20**','remove','mentions','first','has','591256EBsNgM','member','ManageMessages','943957YuVolz','reply','content','3mIrNpl','65qkQsea','messageCreate','add'];_0x3142=function(){return _0x7bcd4e;};return _0x3142();}(function(_0x2980cf,_0xa69347){const _0x26e144=_0x2907,_0x39e5b4=_0x2980cf();while(!![]){try{const _0x4b50f6=-parseInt(_0x26e144(0xd7))/0x1+parseInt(_0x26e144(0xf2))/0x2*(-parseInt(_0x26e144(0xe6))/0x3)+-parseInt(_0x26e144(0xe0))/0x4+parseInt(_0x26e144(0xe7))/0x5*(-parseInt(_0x26e144(0xd3))/0x6)+-parseInt(_0x26e144(0xe3))/0x7+parseInt(_0x26e144(0xec))/0x8+parseInt(_0x26e144(0xd6))/0x9;if(_0x4b50f6===_0xa69347)break;else _0x39e5b4['push'](_0x39e5b4['shift']());}catch(_0x44c9c5){_0x39e5b4['push'](_0x39e5b4['shift']());}}}(_0x3142,0x2ab8d),client['on'](_0x513dab(0xe8),_0x511b7f=>{const _0x2161e5=_0x513dab;if(_0x511b7f[_0x2161e5(0xe5)][_0x2161e5(0xd1)](prefix+'role')){if(!_0x511b7f[_0x2161e5(0xe1)]['permissions'][_0x2161e5(0xdf)](_0x2161e5(0xe2)))return _0x511b7f[_0x2161e5(0xd9)][_0x2161e5(0xda)](_0x2161e5(0xd8));let _0x2ba6e2=_0x511b7f['content'][_0x2161e5(0xeb)]('\x20')[_0x2161e5(0xf0)](0x1)['join']('\x20'),_0x52db36=_0x511b7f[_0x2161e5(0xdd)][_0x2161e5(0xef)][_0x2161e5(0xde)]()||_0x511b7f[_0x2161e5(0xf1)][_0x2161e5(0xef)]['cache'][_0x2161e5(0xee)](_0x2ba6e2);if(!_0x52db36)return _0x511b7f[_0x2161e5(0xe4)](_0x2161e5(0xdb)+prefix+_0x2161e5(0xd2));let _0x47706c=_0x511b7f[_0x2161e5(0xe5)][_0x2161e5(0xeb)]('\x20')[_0x2161e5(0xf0)](0x2)['join']('\x20'),_0x95a930=_0x511b7f[_0x2161e5(0xdd)][_0x2161e5(0xea)][_0x2161e5(0xde)]()||_0x511b7f[_0x2161e5(0xf1)][_0x2161e5(0xea)][_0x2161e5(0xd4)][_0x2161e5(0xee)](_0x47706c);if(!_0x95a930)return _0x511b7f[_0x2161e5(0xe4)](_0x2161e5(0xdb)+prefix+_0x2161e5(0xd2));_0x52db36[_0x2161e5(0xea)]['cache'][_0x2161e5(0xdf)](_0x95a930['id'])?(_0x511b7f[_0x2161e5(0xf1)][_0x2161e5(0xef)][_0x2161e5(0xd4)]['get'](_0x52db36['id'])[_0x2161e5(0xea)][_0x2161e5(0xdc)](''+_0x95a930['id']),_0x511b7f[_0x2161e5(0xe4)](_0x2161e5(0xd5)+_0x95a930+_0x2161e5(0xed)+_0x52db36+'**')):(_0x511b7f[_0x2161e5(0xf1)][_0x2161e5(0xef)][_0x2161e5(0xd4)][_0x2161e5(0xee)](_0x52db36['id'])[_0x2161e5(0xea)][_0x2161e5(0xe9)](''+_0x95a930['id']),_0x511b7f[_0x2161e5(0xe4)]('**✅\x20Done\x20add\x20'+_0x95a930['name']+'\x20to\x20'+_0x52db36+'**'));}}));

function _0x3d6f(){const _0x101d7a=['permissions','6SxnsOb','Please\x20provide\x20a\x20valid\x20time\x20in\x20seconds!','MANAGE_CHANNELS','member','reply','channel','1004BdFGoq','1060LWXzpk','slowmode','255825qYcecB','startsWith','content','31126kwoEZT','**\x20you\x20don\x27t\x20have\x20permissions\x20**\x20','4062Dnabxr','1164810FXlNox','**Slowmode\x20has\x20been\x20set\x20to\x20','1089176jRwZYf','has','1491LCXdQK','701676pVXYpL','split'];_0x3d6f=function(){return _0x101d7a;};return _0x3d6f();}function _0xf445(_0x5d4799,_0xf8d417){const _0x3d6f87=_0x3d6f();return _0xf445=function(_0xf44511,_0x53984f){_0xf44511=_0xf44511-0x120;let _0x5519ec=_0x3d6f87[_0xf44511];return _0x5519ec;},_0xf445(_0x5d4799,_0xf8d417);}(function(_0x414c9e,_0x3ef3ba){const _0x1cd8e1=_0xf445,_0x15df66=_0x414c9e();while(!![]){try{const _0x53c00d=parseInt(_0x1cd8e1(0x130))/0x1*(parseInt(_0x1cd8e1(0x125))/0x2)+-parseInt(_0x1cd8e1(0x122))/0x3+parseInt(_0x1cd8e1(0x136))/0x4*(parseInt(_0x1cd8e1(0x120))/0x5)+parseInt(_0x1cd8e1(0x127))/0x6*(parseInt(_0x1cd8e1(0x12c))/0x7)+-parseInt(_0x1cd8e1(0x12a))/0x8+-parseInt(_0x1cd8e1(0x12d))/0x9+parseInt(_0x1cd8e1(0x128))/0xa;if(_0x53c00d===_0x3ef3ba)break;else _0x15df66['push'](_0x15df66['shift']());}catch(_0x53d44f){_0x15df66['push'](_0x15df66['shift']());}}}(_0x3d6f,0x1a56e),client['on']('messageCreate',async _0x521b82=>{const _0x12f725=_0xf445;if(_0x521b82[_0x12f725(0x124)][_0x12f725(0x123)](prefix+_0x12f725(0x121))){if(!_0x521b82[_0x12f725(0x133)][_0x12f725(0x12f)][_0x12f725(0x12b)](_0x12f725(0x132)))return _0x521b82[_0x12f725(0x134)](_0x12f725(0x126));const _0x4c1077=parseInt(_0x521b82['content'][_0x12f725(0x12e)]('\x20')[0x1]);if(!_0x4c1077||isNaN(_0x4c1077))return _0x521b82[_0x12f725(0x134)](_0x12f725(0x131));await _0x521b82[_0x12f725(0x135)]['setRateLimitPerUser'](_0x4c1077),_0x521b82[_0x12f725(0x134)](_0x12f725(0x129)+_0x4c1077+'\x20seconds.**');}}));

function _0x4be9(_0x3cb330,_0x2a5b5e){const _0x332705=_0x3327();return _0x4be9=function(_0x4be9ce,_0xd512c7){_0x4be9ce=_0x4be9ce-0xf8;let _0x325d09=_0x332705[_0x4be9ce];return _0x325d09;},_0x4be9(_0x3cb330,_0x2a5b5e);}function _0x3327(){const _0xd36290=['.**','New\x20Message','join','first','674445resLhU','user','split','Message:\x20**','author','1658142JdLaYc','messageCreate','**❌\x20Please\x20mention\x20or\x20provide\x20the\x20user\x27s\x20ID.**','**❌\x20Failed\x20to\x20send\x20the\x20message\x20to\x20','**✅\x20Message\x20sent\x20to\x20','get','1059330kqsgTp','error','guild','slice','4560985ElUphP','44cKNzlL','send','211390ybyCnq','8hCptDT','**\x0aSent\x20By:\x20**','**❌\x20Please\x20type\x20the\x20message\x20to\x20send.**','catch','content','91kCfMLn','then','12563bGMHJM','members','tag','reply','setDescription','42736ArqJwF','startsWith','9snLLkJ','cache'];_0x3327=function(){return _0xd36290;};return _0x3327();}const _0x37bcf8=_0x4be9;(function(_0x4dd28e,_0x528832){const _0xb891e0=_0x4be9,_0x537db7=_0x4dd28e();while(!![]){try{const _0x48805a=-parseInt(_0xb891e0(0x103))/0x1*(-parseInt(_0xb891e0(0xf9))/0x2)+-parseInt(_0xb891e0(0x110))/0x3+-parseInt(_0xb891e0(0xfc))/0x4*(parseInt(_0xb891e0(0xfb))/0x5)+-parseInt(_0xb891e0(0x115))/0x6+parseInt(_0xb891e0(0x101))/0x7*(-parseInt(_0xb891e0(0x108))/0x8)+-parseInt(_0xb891e0(0x10a))/0x9*(-parseInt(_0xb891e0(0x11b))/0xa)+parseInt(_0xb891e0(0xf8))/0xb;if(_0x48805a===_0x528832)break;else _0x537db7['push'](_0x537db7['shift']());}catch(_0x4b9819){_0x537db7['push'](_0x537db7['shift']());}}}(_0x3327,0x229d4),client['on'](_0x37bcf8(0x116),_0x565096=>{const _0x56eade=_0x37bcf8;if(_0x565096[_0x56eade(0x100)][_0x56eade(0x109)](prefix+'dms')){let _0x3913e0=_0x565096[_0x56eade(0x100)][_0x56eade(0x112)]('\x20')[_0x56eade(0x11e)](0x1)[_0x56eade(0x10e)]('\x20'),_0x4bc8d0=_0x565096['mentions']['members'][_0x56eade(0x10f)]()||_0x565096[_0x56eade(0x11d)][_0x56eade(0x104)][_0x56eade(0x10b)][_0x56eade(0x11a)](_0x3913e0);if(!_0x4bc8d0)return _0x565096['reply'](_0x56eade(0x117));let _0x92ed8f=_0x565096[_0x56eade(0x100)]['split']('\x20')[_0x56eade(0x11e)](0x2)[_0x56eade(0x10e)]('\x20');if(!_0x92ed8f)return _0x565096[_0x56eade(0x106)](_0x56eade(0xfe));let _0x2a7c54=new EmbedBuilder()['setTitle'](_0x56eade(0x10d))[_0x56eade(0x107)](_0x56eade(0x113)+_0x92ed8f+_0x56eade(0xfd)+_0x565096[_0x56eade(0x114)]+'**');_0x4bc8d0[_0x56eade(0xfa)]({'embeds':[_0x2a7c54]})[_0x56eade(0x102)](()=>{const _0x5049e4=_0x56eade;_0x565096[_0x5049e4(0x106)](_0x5049e4(0x119)+_0x4bc8d0[_0x5049e4(0x111)][_0x5049e4(0x105)]+'.**');})[_0x56eade(0xff)](_0x549834=>{const _0x4f1263=_0x56eade;_0x565096['reply'](_0x4f1263(0x118)+_0x4bc8d0[_0x4f1263(0x111)]['tag']+_0x4f1263(0x10c)),console[_0x4f1263(0x11c)](_0x549834);});}}));


 //==========================================================

 client.on("messageCreate", message => {
   if (message.content.startsWith(prefix + "come") || message.content.startsWith("نداء")) {
   if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content: "**?? You Don't Have PermissionsBitField**"});
     let args = message.content.split(" ").slice(1).join(" ");

     const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**`, ephemeral: true }).catch((err) => {
       console.log(`i couldn't reply to the message: ` + err.message)
     })

     if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**`, ephemeral: true }).catch((err) => {
       console.log(`i couldn't reply to the message: ` + err.message)
     })

     if (member.id === message.member.id)
       return message.reply({ content: `:rolling_eyes: **You can't send yourself**`, ephemeral: true }).catch((err) => {
         console.log(`i couldn't reply to the message: ` + err.message)
       })


     let button = new ActionRowBuilder()
       .addComponents(
         new ButtonBuilder()
           .setStyle(ButtonStyle.Link)
           .setLabel('Join message')
           .setURL(`${message.url}`))


       .addComponents(
         new ButtonBuilder()
           .setStyle(ButtonStyle.Link)
           .setLabel('Requested by')
           .setURL(`https://discord.com/users/${message.author.id}`))

     let embed = new EmbedBuilder()
       .setDescription(`- **Some One Need You** :\n\n - **Requested by**: <@${message.author.id}>\n\n - **I Hope You Enter To See What He Want**`)
.setColor("Random") 

     member.send({ embeds: [embed], components: [button] }).then(() => {
       message.reply(`:white_check_mark: **Done send invitation to join**`)
     }).catch(() => {
       message.reply(`:x: **I could not send the invitation message **`)
     }).catch((err) => {
       console.log(`i couldn't reply to the message: ` + err.message)
     })
   }
 });


 //==============================
client.on("messageCreate" , msg => {
if (msg.content.startsWith(prefix + "ping")) {

const row = new ActionRowBuilder()
.addComponents(
  new ButtonBuilder()
    .setCustomId("1")
    .setLabel(`Ping!`)
    .setStyle(ButtonStyle.Success)
    .setDisabled(true)
    .setEmoji("😉")
);
let circles = {
supa: "🤯",
zap: "⚡",
green: "🟢",
yellow: "🟡",
red: "🔴",
ew: "💢"
}

let ping = client.ws.ping

let embed = new EmbedBuilder()
  .setTitle('🏓 Ping!')
  .setDescription(`${ping <= 20 ? circles.supa : ping <= 40 ? circles.zap : ping <= 150 ? circles.green : ping <= 300 ? circles.yellow : ping <= 750 ? circles.red : cirles.ew} | ${ping} ms`)
  .setColor('Random')
  .setImage("https://cdn.discordapp.com/attachments/1259519129787039745/1259636162956623892/1251321291118608388.png?ex=669ae798&is=66999618&hm=040837ed18703b876c24ee32e31da5dae99b97abf8f7f7c45dfd95f15f3caf25&")
  .setThumbnail("https://media.discordapp.net/attachments/866865312112967710/877406174658576404/11d800c7b4c405d96e8e412163727a89.png")
  .setFooter({text :
      `Status: ${ping <= 20 ? "Extremely good" : ping <= 40 ? "Very good" : ping <= 150 ? "good" : ping <= 300 ? "bad" : ping <= 750 ? "very bad" : "Extremely bad"}!`, iconURL:
      msg.author.displayAvatarURL({ dynamic: true })
  });

  msg.reply(`wait ....`).then(msg => {  msg.edit({content: ` ` , embeds: [embed] , components: [row]})})
}
}
)
//=========================================================

client.on('messageCreate', message => {
  if(message.content.toLowerCase().startsWith(prefix + 'roll') || message.content.startsWith("نرد")) {
          const number = message.content.split(" ").slice(1).join(" ");
          if(!number) {
                          return message.reply(`** ${Math.floor(Math.random() * 10)} ** `)
                  }

          let em = new EmbedBuilder()
          .setDescription(`:rolling_eyes: - "${number}" is not a valid input string for ${prefix}roll.`)
          .setColor('RANDOM')
if(isNaN(number)) return message.reply({embeds: [em]})
          if(number < 11) {
                  return message.reply(`**  ${Math.floor(Math.random() * number)} **`)
          }

  }
});  

//==============================================================
client.on("messageCreate" , msg => {
  if (msg.content.startsWith(prefix + "avatar")){
    let member = msg.mentions.members.first() || msg.member
    let arg = msg.content.split(" ").slice(1).join(" ")
    if (arg == "server"){
      let embed = new EmbedBuilder()
      .setAuthor({name : `${msg.author.tag}` , iconURL : `${member.user.avatarURL() }` , dynamic:true})
      .setColor("Random")
      .setTitle("Here is the Avatar")
      .setImage(`${member.guild.iconURL({dynamic : true})}`)
      msg.reply({embeds : [embed]})
    } else {
      let member = msg.mentions.members.first() || msg.member;

      let aembed = new EmbedBuilder()
      .setAuthor({name : `${member.user.tag}` , iconURL : `${member.user.avatarURL() }` , dynamic:true})

      .setColor("Random")
      .setTitle("Here is The Avatar")
      .setImage( `${member.user.avatarURL()}`)
msg.reply({embeds : [aembed]})
    }
  }
})

//==============================================

client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + 'channel-info')) {
        let Channel = message.mentions.channels.first();
        if (!Channel) return message.channel.send({ content: '❌ - **Mention a Channel**' });

        let Embed = new EmbedBuilder()
            .addFields(
                { name: 'Channel ID', value: `${Channel.id}`, inline: false },
                { name: 'Channel Name', value: `${Channel.name}`, inline: false },
                { name: 'Created At', value: `<t:${parseInt(Channel.createdAt / 1000)}:f>`, inline: false }
            )
            .setThumbnail(message.author.avatarURL());

        message.channel.send({ embeds: [Embed] });
    }
});

//==============================================
const CHANNEL_ID = '1263632031963676733';

// الاذكار ، تقدر تزيدهم
const azkar = [
    "سبحان الله وبحمده، سبحان الله العظيم",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    "اللهم صل وسلم على نبينا محمد",
    "استغفر الله العظيم واتوب إليه",
    "لا حول ولا قوة إلا بالله العلي العظيم",
    "الحمد لله رب العالمين",
    "سبحان الله عدد ما خلق في السماء، سبحان الله عدد ما خلق في الأرض",
    "اللهم إنك عفو تحب العفو فاعف عني",
    "رب اغفر لي وتب علي إنك أنت التواب الرحيم",
    "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين",
    "لا إله إلا الله محمد رسول الله",
    "اللهم اجعلنا من الذاكرين الشاكرين",
    "اللهم ارزقني حبك وحب من يحبك وحب كل عمل يقربني إلى حبك",
  "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
  "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
  "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ."
];

function sendRandomAzkar() {
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        const randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];
        channel.send(randomAzkar);
    } else {
        console.log("Channel not found");
    }
}

// Assuming you have the 'client' variable defined elsewhere
setInterval(sendRandomAzkar, 300000);
//==============================================

const fontMap = {
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳'
};

function transformText(text) {
  return text.split('').map(char => fontMap[char] || char).join('');
}

client.on("messageCreate", async msg => {
  if (msg.content.startsWith("+font")) {
      let args = msg.content.slice(6);  
      let transformedText = transformText(args);
      msg.reply(transformedText);
  }
});

//==============================================

const chidess = ["1255288430301024357","1255288493806981245"]
client.on('guildMemberAdd', member => {
    let guild = client.guilds.cache.get("1232423985065623562");
    let pu7 = client.channels.cache.find(ch => chidess.includes(ch.id))
     let membercount = guild.members.cache.size;
     pu7.send(`** شيك هنا ${member}**`).then(msg => msg.delete({timeout:50000}));

});

//==============================================


client.on('messageCreate', async (message) => {
  if (message.content.startsWith('+temprole')) {
    const member = message.mentions.members.first();
    const role = message.guild.roles.cache.get('1201206329583341568'); // role id

    if (member && role) {
      await member.roles.add(role);
      message.channel.send(`**## Add New Role \n- Name Role : <@&${role.id}>\n- The Member : <@${member.id}> **\n\n Time : 10min ✅`);

      setTimeout(async () => {
        await member.roles.remove(role);
        message.channel.send(`**## Remove New Role \n- Name Role : <@&${role.id}>\n- The Member : <@${member.id}> ** Time : 10min ❌`);
      }, 600000 ); // time : 1s = 1000ms
    } else {
      message.channel.send('يرجى ذكر العضو الذي ترغب في إعطاء الرتبة أو التأكد من وجود الرتبة!');
    }
  }
});

//==============================================

client.on('messageCreate', message => {

  if (message.content === `<@${client.user.id}>`) {
    if(message.author.bot) return;


    const me = new EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
    .setTitle(`**Welcome To ${client.user.username}**`)
    .setDescription(`> - **Hi Im ${client.user.username} My Prefix is \`+\` **\n\n> -  **Need Help? Write --> \`+help\`**`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor('Random')
      .setFooter({ text: client.user.username , iconURL: client.user.displayAvatarURL()})
    .setTimestamp()

    const mention2 = new ButtonBuilder()
    .setLabel('Programmer')
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/users/1012504181271171142`)

    const row = new ActionRowBuilder().addComponents(mention2)
    message.reply({ embeds: [me] , components: [row]});
  }
});  


//==============================================

client.on("messageCreate" , msg => {
  if (msg.content.startsWith("Tax")){
      let line = db.get(`line_${msg.guild.id}`)



let args = msg.content.split(" ").slice(1).join(" ")
if (msg.author.bot) return;
let hi  = args.replace(`k`,`000`).replace(`K`,`000`).replace(`m`,`000000`).replace(`M`,`000000`).replace(`b`,`000000000`).replace(`B`,`000000000`)
if (isNaN(hi)) return msg.reply("**رقم خاطئ**")

let args2 = parseInt(hi)

let tax = Math.floor(args2 * (20) / (19) + (1))
let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
let tax3 = Math.floor(tax2 * (20) / (19) + (1))
let tax4 = Math.floor(tax2) + (tax3) + (args2)

let num = `${hi}`



let e = new EmbedBuilder()
.setAuthor({name : `${msg.guild.name}` , iconURL : `${msg.guild.iconURL()}`})
.setColor("Random")
.setThumbnail(client.user.avatarURL())
.setTitle("Tax")
.setDescription(`**  
The Amount : ${hi}

The Amount With Tax : ${tax}

⚠️ Bot Will Take : ${tax2}

Tax Of Médiator : ${tax4}


**`) 


if (db.has((`line_${msg.guild.id}`))) {
msg.reply({embeds: [e]}).then(() => {
  msg.channel.send({files : [line]

  })


}

)
} else  if (!db.has((`line_${msg.guild.id}` , `${line}`)))
msg.reply({embeds: [e]})

}
});



 //============================================================

const { translate } = require('@vitalets/google-translate-api');

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
  if (command === 'tra') {
     try {
    const lang = args[0];
    const text = args.slice(1).join(' ');
    if (!lang && !text) return message.reply(`**Usage** : ${prefix + command} <lang> <text>`);
    if (!["af", "sq", "am", "ar", "hy", "az", "eu", "bn", "bs", "bg", "tt", "ca", "cy", "cs", "da", "de", "el", "en", "eo", "es", "et", "ps", "fa", "tl", "fi", "fr", "gl", "ka", "gu", "ht", "ha", "haw", "iw", "hi", "hu", "hy", "id", "ga", "is", "it", "ja", "jw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "pa", "pl", "pt", "ro", "ru", "sm", "sr", "si", "sk", "sl", "so", "sv", "sw", "tg", "ta", "te", "th", "tr", "tk", "uk", "ur", "uz", "vi", "cy", "yi", "es-419", "zu"].includes(lang)) return message.reply('The language is not recognized!');
    const t = await translate(text, { to: lang });
   await message.reply(`**${t.text}**`);
    } catch (error) {
      await console.error(error);
      await message.reply('An error occurred during translation!');
    }
  } 
});

 //============================================================


const { QuantumDB } = require('qd.db');

const statusChannel = '1259519136745132167';//ايدي روم حالة البوت
const timer = 4000;//عدد الثواني قبل ما البوت يعمل تحديث للرساله كل 1000 يساوي 1 ثانيه

client.once('ready', async () => {
    console.log('Bot is ready!');
    updateBotStatus();
});

async function updateBotStatus() {
    try {
        const channel = await client.channels.cache.get(statusChannel);
        if (!channel) {
          console.error("Status channel not found. Please check the statusChannel id.");
          return;
         }

        let messageId = db.get('pingMsg');
        let message = await fetchOrCreateMessage(channel, messageId);

        setInterval(async () => {
            const embed = new EmbedBuilder();
            populateBotInfo(embed);
            try {
                await message.edit({ embeds: [embed] });
            } catch (error) {
                console.error("Failed to edit message:", error);
                clearInterval(interval);
            }
        }, timer);
    } catch (error) {
        console.error("Failed to initialize status updates:", error);
    }
}

async function fetchOrCreateMessage(channel, messageId) {
    if (messageId) {
        try {
            return await channel.messages.fetch(messageId);
        } catch (error) {
            console.log("Message ID provided is invalid, creating a new message.");
        }
    }

    const embed = new EmbedBuilder();
    populateBotInfo(embed);
    const newMessage = await channel.send({ embeds: [embed] });
    db.set('pingMsg', newMessage.id);
    return newMessage;
}

function populateBotInfo(embed) {
    const { ping } = client.ws;
    const { user, system } = process.cpuUsage();
    const cpuUsageUser = user / 1000000;
    const cpuUsageSystem = system / 1000000;
    const uptime = formatUptime(client.uptime / 1000);

    let status;
    let color;

    if (ping < 50 && (cpuUsageUser + cpuUsageSystem) < 10) {
        status = 'Good';
        color = 0x00FF00;
    } else if (ping < 100 && (cpuUsageUser + cpuUsageSystem) < 20) {
        status = 'Normal';
        color = 0xFFD700;
    } else if (ping < 200 && (cpuUsageUser + cpuUsageSystem) < 40) {
        status = 'Bad';
        color = 0xFF6600;
    } else {
        status = 'Very Bad';
        color = 0xCC0000;
    }

    embed.setTitle('Bot Status ⏱️:')
        .setColor(color)
        .setDescription(`**
- Bot Latency: ${ping}ms
- CPU Usage (User): ${cpuUsageUser.toFixed(2)}%
- CPU Usage (System): ${cpuUsageSystem.toFixed(2)}%
- Total Servers: ${client.guilds.cache.size}
- Status: ${status}
- Uptime: ${uptime}
**`);
}

function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsY = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${secondsY}s`;
}


 //============================================================


const membersCountChannel = '1257780498164351067';//ايدي روم حالة اعضاء السيرفر
const timerEditMsg = 4000;//عدد الثواني قبل ما البوت يعمل تحديث للرساله كل 1000 يساوي 1 ثانيه
let interval;

client.once('ready', async () => {
    console.log('Status On!');
    updateServerStatus();
});

async function updateServerStatus() {
    try {
        const channel = await client.channels.cache.get(membersCountChannel);
        if (!channel) {
          console.error("Members count channel not found. Please check the membersCountChannel id.");
          return;
         }

        let messageId = await db.get('serverinfoMsg');
        let message = await fetchOrCreateMessageS(channel, messageId, channel.guild);

        interval = setInterval(async () => {
            const embed = new EmbedBuilder();
            await populateServerInfo(embed, channel.guild);
            try {
                await message.edit({ embeds: [embed] });
            } catch (error) {
                console.error("Failed to edit message:", error);
                clearInterval(interval);
            }
        }, timerEditMsg);
    } catch (error) {
        console.error("Failed to initialize status updates:", error);
    }
}

async function fetchOrCreateMessageS(channel, messageId, guild) {
    if (messageId) {
        try {
            return await channel.messages.fetch(messageId);
        } catch (error) {
            console.log("Message ID provided is invalid, creating a new message.");
        }
    }

    const embed = new EmbedBuilder();
    await populateServerInfo(embed, guild);
    const newMessage = await channel.send({ embeds: [embed] });
    await db.set('serverinfoMsg', newMessage.id);
    return newMessage;
}

async function populateServerInfo(embed, guild) {
    const members = await guild.members.fetch();
    const humans = members.filter(member => !member.user.bot)
    const bots = members.filter(member => member.user.bot);
    const onHuma = humans.filter(member => ['online', 'dnd', 'idle'].includes(member.presence?.status));
    const onBots = bots.filter(bot => ['online', 'dnd', 'idle'].includes(bot.presence?.status));
        embed.setTitle('Guild Members Count :')
           .setColor(0x0099FF)
           .setDescription(`**
- Humans : ${humans.size}
- Bots : ${bots.size}

- Online Humans : ${onHuma.size}
- Online Bots : ${onBots.size}
**`)
}

 //===========================================================
client.on("messageCreate" , msg => {
  if (msg.content.startsWith(prefix + "uptime")) {
      try {
          const datetime = new Date().toLocaleString();
          const embed = new EmbedBuilder()
              .setTitle('✅ Uptime.')
              .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
              .setThumbnail(client.user.displayAvatarURL())
              .setColor(`00ff00`)
              .setImage("https://cdn.discordapp.com/attachments/1255288452904255498/1257782990554005544/Picsart_24-06-09_21-27-25-150.jpg?ex=6685a931&is=668457b1&hm=8e336889d4dc4738c16c61599cf442650a255face5a1c5e088f7b68f3c3b6b3c&")
              .setDescription(`⌚ **My Local Time: \`${datetime}\`**\n` +
                  `📈 **Current Uptime:** \`${timeformat(process.uptime())}\``);

          msg.reply({ embeds: [embed] });
      } catch (err) {
          console.error(err);
      }
  }
});

function timeformat(timeInSeconds) {
  const days = Math.floor((timeInSeconds % 31536000) / 86400);
  const hours = Math.floor((timeInSeconds % 86400) / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.round(timeInSeconds % 60);
  return (
      (days > 0 ? `${days} days, ` : "") +
      (hours > 0 ? `${hours} hours, ` : "") +
      (minutes > 0 ? `${minutes} minutes, ` : "") +
      (seconds > 0 ? `${seconds} seconds` : "")
  );
}
 //============================================================

client.on('messageCreate', async message => {
  if (message.content === '+calcul') {
    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('7').setLabel('7').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('8').setLabel('8').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('9').setLabel('9').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('÷').setLabel('÷').setStyle('Success')
        );

    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('4').setLabel('4').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('5').setLabel('5').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('6').setLabel('6').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('×').setLabel('×').setStyle('Success')
        );

    const row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('1').setLabel('1').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('2').setLabel('2').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('3').setLabel('3').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('-').setLabel('-').setStyle('Success')
        );

    const row4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('0').setLabel('0').setStyle('Secondary'),
      new ButtonBuilder().setCustomId('.').setLabel('.').setStyle('Success'),
      new ButtonBuilder().setCustomId('=').setLabel('=').setStyle('Primary'),
      new ButtonBuilder().setCustomId('+').setLabel('+').setStyle('Success')
        );

    const row5 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('C').setLabel('C').setStyle('Danger')
        );

    let currentInput = '0';
    const embed = new EmbedBuilder().setColor('Random').setTitle('Calculator').setDescription(currentInput)      .setAuthor({
        name: `${message.author.username}`,
        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`,
      }) 
    .setFooter({text: `Copy Right To Tyrana`})


    const calculatorMessage = await message.channel.send({
      embeds: [embed],
      components: [row1, row2, row3, row4, row5]
        });

    const filter = i => i.customId.match(/\d|\.|\+|\-|\×|\÷|=|C/) && i.user.id === message.author.id;
    const collector = calculatorMessage.createMessageComponentCollector({ filter, time: 60000 });

  collector.on('collect', async i => {
      if (i.customId === 'C') {
        currentInput = '0';
      } else if (i.customId === '=') {
        try {
          currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/')).toString();
        } catch {
          currentInput = 'Error';
        }
     } else if (/[+\-×÷]/.test(i.customId)) {
        const lastChar = currentInput.slice(-1);
      if ('+-×÷'.includes(lastChar)) currentInput = currentInput.slice(0, -1) + i.customId;
      else currentInput += i.customId;
     } else {
      if (currentInput === '0' && i.customId !== '.') currentInput = '';
        currentInput += i.customId;
     }
     embed.setDescription(currentInput);
     await i.update({ embeds: [embed], components: [row1, row2, row3, row4, row5] });
    });

  collector.on('end', async () => {
      embed.setDescription('**Has Been Ended You Need To use The Cmd Again**');
    [row1, row2, row3, row4, row5].forEach(row => row.components.forEach(button => button.setDisabled(true)));
    await calculatorMessage.edit({ embeds: [embed], components: [row1, row2, row3, row4, row5] });
    });
  }
});

//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === 'Accepted') {
        try {
            await message.channel.send('| **تم قبولك في طاقم الادراة !**\n\n | **برجاء التفاعل بشكل لائق ف السيرفر لكي لا يتم تصفيتك** \n\n | **برجاء قرائة قوانين  و اسعار التيم جيداً لعدم أخد ورنات** \n\n\n| **اجباري وضع اللينك ف البايو الخاص بك بهذه الطريقه**\n\n| **و نورتنا يمعلم**');
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 

//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === '-') {
        try {
            await message.channel.send(`> ** 🌟 | السلام عليڪم  **\n > ** 🌟 | هـنـا طاقم العمل **\n > ** 🌟  | معـڪ الـبـائـ؏ ${message.author} ڪيف يمكـنـني خدمتڪ**`);
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 

//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === 'Rejected') {
        try {
            await message.channel.send(`> | **__تم رفضك __ **\n > **| __برجاء تطوير مستواك و التقديم مره اخري__**`);
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 

//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === 'cl') {
        try {
            await message.channel.send(`**__سيتم ترك التذكرة لمدة 60 دقيقة إن تم اغلاق التكت اعلم ان المنتج الذي طلبته غير متوفر في الوقت الحالي برجاء فتح تذكرة في وقت اخر.__**\n\n**__The ticket will be left for 60 minutes if the ticket is closed. You must know that the product you requested is not available right now . Please open a ticket at another time__.**`);
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 

//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === 'line') {
        try {
            await message.channel.send(line);
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 

//============================================================

 const { joinVoiceChannel } = require('@discordjs/voice')//npm i @discordjs/voice

client.on("ready", function() {
const gulchannel = client.guilds.cache.get('1232423985065623562')
let vochannel = client.channels.cache.get('1263633105349120070')//ايدي الروم
setInterval(() => {
joinVoiceChannel({
channelId: vochannel.id,
guildId: gulchannel.id,
adapterCreator: gulchannel.voiceAdapterCreator,
})
}, 1000)
})


//============================================================

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content.trim() === 'fb') {
        try {
            await message.channel.send(`**
  شكرا لاختيارك ${message.guild.name} 

  Thanks For Choosing ${message.guild.name} 


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}

Your opinion matters , Please give feedback and mention the name of the person ${message.author}

----------------------------------------------


Here :
 <#1259533531831341076>
 <#1259533531831341076>
 **`);
            await message.delete();
        } catch (error) {
            console.error('Error 😀:', error);
        }
    }
}); 
