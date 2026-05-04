const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config({ path: './token.env' });

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// READY
client.once('ready', async () => {
    console.log(`Bot aktif sebagai ${client.user.tag}`);

    const channel = await client.channels.fetch('1500068691793023036').catch(() => null);

    if (!channel) {
        console.log('❌ Channel role tidak ditemukan / tidak bisa diakses');
        return;
    }

    console.log('✅ Channel ditemukan, kirim tombol...');

    const row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('role_prince')
                .setLabel('Prince 👑')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('role_princess')
                .setLabel('Princess 👑')
                .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
                .setCustomId('role_roblox')
                .setLabel('Roblox')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('role_minecraft')
                .setLabel('Minecraft')
                .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
                .setCustomId('role_ml')
                .setLabel('Mobile Legends')
                .setStyle(ButtonStyle.Danger)
        );

    const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('role_ff')
                .setLabel('Free Fire')
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId('role_plenger')
                .setLabel('Plenger')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('role_sps')
                .setLabel('Super Sus')
                .setStyle(ButtonStyle.Primary)
        );

    await channel.send({
        content: 'Klik tombol untuk ambil role kamu:',
        components: [row1, row2]
    });

    console.log('✅ Tombol berhasil dikirim');
});

// WELCOME
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get('1500032834012975186');
    if (!channel) return;

    channel.send(`haii haiii👋🏻 abang dan kaka ${member} disinii jangan sungkan, asikin ajaaa ya`);
});

// LEAVE
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.get('1500032834012975186');
    if (!channel) return;

    channel.send(`Goodbye datang lagi yaa ${member.user.tag}`);
});

// ROLE BUTTON 
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const member = interaction.member;

    const prince = interaction.guild.roles.cache.find(r => r.name === 'prince');
    const princess = interaction.guild.roles.cache.find(r => r.name === 'princess');
    const roblox = interaction.guild.roles.cache.find(r => r.name === 'Roblox');
    const minecraft = interaction.guild.roles.cache.find(r => r.name === 'Minecraft');
    const ml = interaction.guild.roles.cache.find(r => r.name === 'Mobile Legends');
    const ff = interaction.guild.roles.cache.find(r => r.name === 'Free fire');
    const plenger = interaction.guild.roles.cache.find(r => r.name === 'Plenger');
    const sps = interaction.guild.roles.cache.find(r => r.name === 'Super Sus');

    if (interaction.customId === 'role_prince') {
        if (!prince) return interaction.reply({ content: 'Role Prince tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(prince.id)) {
            await member.roles.remove(prince);
            return interaction.reply({ content: 'Role Prince dihapus ❌', ephemeral: true });
        } else {
            if (princess) await member.roles.remove(princess);
            await member.roles.add(prince);
            return interaction.reply({ content: 'Kamu sekarang Prince', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_princess') {
        if (!princess) return interaction.reply({ content: 'Role Princess tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(princess.id)) {
            await member.roles.remove(princess);
            return interaction.reply({ content: 'Role Princess dihapus ❌', ephemeral: true });
        } else {
            if (prince) await member.roles.remove(prince);
            await member.roles.add(princess);
            return interaction.reply({ content: 'Kamu sekarang Princess', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_roblox') {
        if (!roblox) return interaction.reply({ content: 'Role Roblox tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(roblox.id)) {
            await member.roles.remove(roblox);
            return interaction.reply({ content: 'Roblox dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(roblox);
            return interaction.reply({ content: 'Kamu sekarang mendapat role Roblox', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_minecraft') {
        if (!minecraft) return interaction.reply({ content: 'Role Minecraft tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(minecraft.id)) {
            await member.roles.remove(minecraft);
            return interaction.reply({ content: 'Minecraft dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(minecraft);
            return interaction.reply({ content: 'Kamu sekarang mendapat role Minecraft', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_ml') {
        if (!ml) return interaction.reply({ content: 'Role ML tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(ml.id)) {
            await member.roles.remove(ml);
            return interaction.reply({ content: 'ML dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(ml);
            return interaction.reply({ content: 'Kamu sekarang mendapat role Mobile Legend', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_ff') {
        if (!ff) return interaction.reply({ content: 'Role Free Fire tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(ff.id)) {
            await member.roles.remove(ff);
            return interaction.reply({ content: 'Free Fire dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(ff);
            return interaction.reply({ content: 'Kamu sekarang mendapat role Free Fire', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_sps') {
        if (!sps) return interaction.reply({ content: 'Role Super Sus tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(sps.id)) {
            await member.roles.remove(sps);
            return interaction.reply({ content: 'Super Sus dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(sps);
            return interaction.reply({ content: 'Kamu sekarang Super Sus', ephemeral: true });
        }
    }

    if (interaction.customId === 'role_plenger') {
        if (!plenger) return interaction.reply({ content: 'Role Plenger tidak ditemukan!', ephemeral: true });

        if (member.roles.cache.has(plenger.id)) {
            await member.roles.remove(plenger);
            return interaction.reply({ content: 'Plenger dihapus ❌', ephemeral: true });
        } else {
            await member.roles.add(plenger);
            return interaction.reply({ content: 'Kamu sekarang Plenger', ephemeral: true });
        }
    }
});

// ROLE KHUSUS
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    const command = args[0];

    const isAdmin = message.member.roles.cache.some(r =>
        r.name === 'Admin' || r.name === 'Owner'
    );

    if (!isAdmin) return;

    const youtubers = message.guild.roles.cache.find(r => r.name === 'YouTubers ▶');
    const tiktokers = message.guild.roles.cache.find(r => r.name === 'TikTokers ꚠ');

    const target = message.mentions.members.first();

    if (command === '!yt') {
        if (!target) return message.reply('Tag user dulu!');
        if (!youtubers) return message.reply('Role YouTubers tidak ditemukan');

        await target.roles.add(youtubers);
        return message.reply(`${target.user.tag} sekarang YouTubers`);
    }

    if (command === '!tt') {
        if (!target) return message.reply('Tag user dulu!');
        if (!tiktokers) return message.reply('Role TikTokers tidak ditemukan');

        await target.roles.add(tiktokers);
        return message.reply(`${target.user.tag} sekarang TikTokers`);
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        const sent = await message.reply('Pinging...');
        return sent.edit(`🏓 Pong! Latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
    }
});

// LOGIN
console.log("TOKEN TERBACA:", process.env.TOKEN);
client.login(process.env.TOKEN);