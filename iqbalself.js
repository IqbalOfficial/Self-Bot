const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const bal = require('./Iqbal/bal')
const { fetchIqbal, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exif } = require('./lib/exif')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, banner, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

//Json File
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json')) 

prefix = setting.prefix
botName = setting.botName
VhtearKey = setting.VhtearKey
ownerNumbers = setting.ownerNumbers
ownerName = setting.ownerName

//Vcard
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Iqbal\n'
            + 'ORG:Owner RizBal;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628311800241:+62 831-1800-241\n'
            + 'END:VCARD'
const ccard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Rizki\n'
            + 'ORG:Owner RizBal;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628311800241:+62 831-1800-241\n'
            + 'END:VCARD'
      
//Nomor
const ownerNumber = ["6281315995628@s.whatsapp.net","6281316438103@s.whatsapp.net"]
      
            function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Fxc7';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}

const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
		}
		
		async function starts() {
	const Rizki = new WAConnection()
	Rizki.logger.level = 'warn'
	console.log(banner.string)
	Rizki.on('qr', () => {
		lolcatjs.fromString('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./iqbalself.json') && Rizki.loadAuthInfo('./iqbalself.json')
	Rizki.on('connecting', () => {
		start('2', 'Connecting...')
	})
	Rizki.on('open', () => {
		success('2', 'Connected:)')
	})
	await Rizki.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./iqbalself.json', JSON.stringify(frhan.base64EncodedAuthInfo(), null, '\t'))

	Rizki.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Rizki.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Rizki.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* 
❍╭━━━━━━━━━━━━━
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAME:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *GENDER:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *ASKOT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA IG:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA DOI:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *FAVORIT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *HOBBY:*
❍╰━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				Rizki.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Rizki.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `kenapa keluar kamu @${num.split('@')[0]} kalo masuk lagi jangan lupa desah`
				let buff = await getBuffer(ppimg)
				Rizki.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		Rizki.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	}
)

	Rizki.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (!mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = Rizki.contacts[nameReq] != undefined ? Rizki.contacts[nameReq].vname || Rizki.contacts[nameReq].notify : undefined
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const Iqbal = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Riz = args.join(' ')
			const txt = mek.message.conversation
			const isCmd = body.startsWith(prefix)
			Rizki.chatRead(from)

mess = {
				wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				success: 'Berhasil! ',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: 'Maaf kak perintah ini hanya untuk user premium! ❌',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					ownerB: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					daftarB: `──「 BELUM VERIVIKASI 」──\nHalo kak kamu belum verify!\nverify dulu kak di bot iqbal... \n\nCommand : ${prefix}verify`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
				}
			}
			const botNumber = Rizki.user.jid
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Rizki.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? _welkom.includes(from) : false 
			const isBadWord = isGroup ? _badword.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner 
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Rizki.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Rizki.sendMessage(hehe, teks, text)
			}
	        const costum = (pesan, tipe, target, target2) => {
			Rizki.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Rizki.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Rizki.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			let authorname = frhan.contacts[from] != undefined ? frhan.contacts[from].vname || frhan.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) { 
				
				case 'help':
				case 'menu':
runtime = process.uptime()
const Menu = {
				text: ` 
┏━━━━「 *IQBAL-SELF* 」━━━━
┃
┃◪ 𝗜𝗡𝗙𝗢
┃❏ Nama: ${pushname2}
┃❏ Lib: Baileys
┃❏ Runtime: ${kyun(runtime)}
┃❏ Prefix: 「 ${prefix} 」
┃
┃</ *GROUP* >
┃
┃• zhidetag <text>
┃• zgrup close|open
┃• zgcname <text>
┃• zgcdesk <text>
┃• zadd 62xxx
┃• zkick @tag
• zownergc
• zleave
• zpromote @tag
• zdemote @tag

</ *MEDIA* >

• zytstalk <username>
• ztomp3 <reply video>
• zbrainly <optional>
• ztruth
• zdare
• zplay <optional>
• zpinterest <optional>
• ztahta <teks>
• zsticker <reply image>
• ztrigger <reply image>
• zssweb <url>
• zigstalk <username>
• zwasted <reply image>
• zplaystore <optional>
• zinfoalamat <optional>
• zpuisiimg
• ztiktok <url>

</ *STORAGE* >

• zaddsticker <optional>
• zgetsticker <optional>
• zdelsticker <optional>
• zstickerlist
• zaddvn <optional>
• zgetvn <optional>
• zdelvn <optional>
• zlistvn
• zaddvideo <optional>
• zgetvideo <optional>
• zdelvideo <optional>
• zlistvideo
• zaddimage <optional>
• zgetimage <optional>
• zdelimage <optional>
• zlistimage
• zsticker <reply image>
• ztoimg <reply sticker>

</ *ADVANCED* >

• zafk enable|disable
• zafktag enable|disable
• zupswteks <teks>
• zupswimage <reply image>
• zupswvideo <reply video>
• zsetpp <reply image>
• zclearall
• zreadallchat
• zfakedeface url|tittle|desc
• zsetthumb <reply image>
• zantidelete ctaktif
• zantidelete ctmati
• zantidelete aktif
• zantidelete mati
• zantidelete banct 628xxx
• zreturnmek <reply chat>
• zcr1 @tag textdia|textlu
• zcr2 <versi private>
• zruntime
• zsettarget 62xxxx
• zterm <exec>
• zping
• zsetreply <optional>
• zsetnumber 62xxx
• zcekchat

</ *VOICE CHANGER* >

• zslowmo <reply vn>
• zbass <reply vn>
• ztupai <reply vn>
• ztoptt <reply vn>

</ *PENTEST* >

• zfindhost <url>
• zdork <optional>
• znmap <optional>

「 *IQBAL-SELF* 」`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  Rizki.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/bot.jpeg')} } }})

default:
    if (budy.includes(`Sayang`)) {
                  reply(`Apa sayangku *${pushname2}*? 🥰`)
                  }
                  if (budy == 'Cekprefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'Totalchat') {
                  costum(`*${totalchat.length}*`, text, tescuk, cr)
                  }
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[SELF-BOT IQBAL]','blue'), 'Pengirim', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
