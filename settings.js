import fs from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/*
	* Create By Heart candy
	* Follow https://www.instagram.com/ponyndo1_original?igsh=NDZ0dmYwNDltZHFu
	* Whatsapp : https://whatsapp.com/channel/0029Vb6en2iAu3aXA7AcFI0Y
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["6285823709413"] // ['628','628'] 2 owner atau lebih
global.author = 'Heart candy'
global.botname = 'Hc-bot'
global.packname = 'Bot Heart candy'
global.timezone = 'Asia/Jakarta' // Ganti pakai command .settimezone
global.locale = 'en' // Ganti pakai command .setlocale
global.listprefix = ['+', '!', '.']

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','(⁠✿⁠^⁠‿⁠^⁠)','(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤',':-)']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://files.catbox.moe/kbqo64.jpg',
	thumbnail: fs.readFileSync('./src/media/Heart candy.png'),
	docs: fs.readFileSync('./src/media/Heart candy.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/@ponyndo?si=k9PQEkINzEREkE6p',
	gh: 'https://github.com/ponyndo820/Hc-bot',
	gc: 'https://chat.whatsapp.com/E50d9VEtLnc3acHPFeRdqY?mode=gi_t',
	ch: '120363421709200388@newsletter',
}

global.limit = {
	free: 20,
	premium: 9999,
	vip: 9000
}

global.money = {
	free: 10000,
	premium: 100000000000,
	vip: 10000000
}

global.mess = {
	key: "Apikey limit! Silahkan Upgrade: https://naze.biz.id",
	owner: "Khusus Owner❗",
	admin: "Bot harus menjadi admin terlebih dahulu❗",
	botAdmin: "Bot harus Admin❗",
	onWa: "Nomor tersebut tidak terdaftar di WhatsApp❗",
	group: "Khusus Grup❗",
	private: "Khusus Private Chat 🔏",
	quoted: "Reply pesannya❗",
	limit: "Limit habis❗",
	prem: "Khusus Premium❗",
	text: "Masukkan teksnya 🔤",
	media: "Kirim medianya 📁",
	wait: "Proses...",
	fail: "Gagal ❌",
	error: "Error 🙁",
	done: "Selesai ✅"
}

global.APIs = {
	naze: 'https://api.naze.biz.id',
	neosantara: 'https://api.neosantara.xyz/v1',
}
global.APIKeys = {
	'https://api.naze.biz.id': 'nz-d7f75016a2',
	'https://api.neosantara.xyz/v1': 'nsk_e24111f0fbe94c9689b9049bd7f13771',
}

// Lainnya
global.jadwalSholat = {
	Subuh: '04:30',
	Dzuhur: '12:06',
	Ashar: '15:21',
	Maghrib: '18:08',
	Isya: '19:00'
}

global.badWords = ['dongo', 'konsol'] // input kata-kata toxic yg lain. ex: ['dongo','dongonya']
global.chatLength = 1000

fs.watchFile(__filename, async () => {
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`))
});

// Ini adalah bot naze yang di modifikasi