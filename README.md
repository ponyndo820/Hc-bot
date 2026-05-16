/*
	* Create By Heart candy 
	* Follow: https://www.instagram.com/ponyndo1_original?igsh=NDZ0dmYwNDltZHFu
	* Whatsapp: https://whatsapp.com/channel/0029Vb6en2iAu3aXA7AcFI0Y
*/

#### Support Me
- [Saweria](https://saweria.co/Ponyndo)

## Information
/*
    *my yt : 'https://youtube.com/@ponyndo?si=eKccnt-_Hix5wXKX',
    *my Ig : 'https://www.instagram.com/ponyndo1_original?igsh=NDZ0dmYwNDltZHFu',
    *my ch : 'https://whatsapp.com/channel/0029Vb6en2iAu3aXA7AcFI0Y',
    *my gc : 'https://chat.whatsapp.com/E50d9VEtLnc3acHPFeRdqY',
/*

##INFORMASI SCRIPT : 
* SETTING OWNER 
setting owner di setting.js & lib/database

*STARTUP
## 📱 Termux (Android)
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
git clone ponyndo820/Hc-bot
cd hitori
npm install
```
[ RECOMMENDED INSTALL ON TERMUX ]
```bash
pkg install yarn
yarn
```
Use **yarn**:

```bash
yarn install
yarn start
```

> Make sure `nodejs` and `yarn` are installed. The `install.sh` script already handles this.

---
## 💻 Laptop / Ubuntu / VPS / SSH
* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

Use **npm**:

```bash
npm install
npm start
```
---
## ▶️ Running the Bot

```bash
npm start
# or
yarn start
```

Scan the QR Code or use Pairing Code, and the bot is ready to use.
---

## 🌐 API Integration

This bot is fully integrated with the **Naze API Service**:

🔗 https://naze.biz.id

Many features (such as downloader, AI tools, utilities, and media processing) rely on this external API.

### API Key Requirement

To use all features properly, you **must provide your own API key**.

The API key is configured in:

📁 **[settings.js](https://github.com/ponyndo820/Hc-bot/blob/master/settings.js)**  

Example configuration:

```js
global.APIKeys = {
  'https://api.naze.biz.id': 'YOUR_API_KEY_HERE'
}
```

⚠️ If the API key is invalid or not set:
- Some commands will not work
- API-based features may return errors

Make sure you register and obtain a valid API key from the official website before using the bot.
---
## ⚙️ Bot Configuration

All main configurations are located in:

📁 **[settings.js](https://github.com/nazedev/hitori/blob/master/settings.js)**

### Editable Settings

#### Owner Number
```js
global.owner = ['628xxxxxxxxxx']
```

#### Bot Identity
```js
global.botname = 'Hc-bot'
global.author = 'Heart candy'
```

#### Command Prefix
```js
global.listprefix = ['!', '.', '+']
```

#### User Limits & Balance
```js
global.limit.free = 20
global.money.free = 10000
```

#### Pairing Code / Bot Number
```js
global.pairing_code = true
global.number_bot = '628xxxxxxxxxx'
```

> Any change in [settings.js](https://github.com/nazedev/hitori/blob/master/settings.js) will be **auto-reloaded** without restarting the bot.

---

## 🧩 Editing & Adding Features

All bot features are implemented in:

📁 **[naze.js](https://github.com/nazedev/hitori/blob/master/naze.js)**

Look for the **[switch (command)](https://github.com/nazedev/hitori/blob/61052a01ea8e8975a99f0db7f5d40bad5ee39a5b/naze.js#L742)** section.

### Where to Add New Features

Add or edit commands inside the [switch (command)](https://github.com/nazedev/hitori/blob/61052a01ea8e8975a99f0db7f5d40bad5ee39a5b/naze.js#L742) block.

### Example: Adding a New Command

```js
case 'ping': {
  reply('pong 🏓')
}
break
```

Guidelines:
- Always add new commands using `case`
- Do not remove the main switch structure
- Place feature logic inside each `case`

---

## 🔌 Connector & Core Handler

To understand the WhatsApp connection flow and event handling, see:

📁 **[index.js](https://github.com/ponyndo820/Hc-bot/blob/master/index.js)**
This file is responsible for:
- Initializing Baileys connection
- Handling WhatsApp events
- Loading [settings.js](https://github.com/ponyndo820/Hc-bot/blob/master/settings.js)
- Dispatching messages to [naze.js](https://github.com/ponyndo820/Hc-bot/hitori/blob/master/Hc.js)

⚠️ **Editing [index.js](https://github.com/ponyndo820/Hc-bot/master/index.js) is not recommended unless you fully understand the bot flow.**

---
## 🗂 Structure Project
```
├── Dockerfile
├── LICENSE
├── Procfile
├── README.md
├── app.json
├── database
|  ├── jadibot
│   │   └── Heart candy 
│   └── temp
│       └── A
├── docker-compose.yml
├── heroku.yml
├── index.js
├── install.sh
├── lib
│   ├── converter.js
│   ├── exif.js
│   ├── function.js
│   ├── game.js
│   ├── math.js
│   ├── template_menu.js
│   ├── tictactoe.js
│   └── uploader.js
├── Hc.js
├── nodemon.json
├── package.json
├── railway.json
├── replit.nix
├── settings.js
├── speed.py
├── src
│   ├── antispam.js
│   ├── database.js
│   ├── jadibot.js
│   ├── media
│   │   ├── Heart candy.pdf
│   │   └── Hc.png
│   ├── message.js
│   └── server.js
└── start.js
```
---
#### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nazedev/hitori)

#### Heroku Buildpack
| Build Pack | LINK |
|--------|--------|
| **NODEJS** | heroku/nodejs |
| **FFMPEG** | [here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

---
### Features
| Menu     | Bot | Group | Search | Download | Tools | Ai | Game | Fun | Owner |
| -------- | --- | ----- | ------ | -------- | ----- | -- | ---- | --- | ----- |
| Work     |  ✅  |   ✅   |    ✅    |     ✅     |   ✅   | ✅ |   ✅   |  ✅  |    ✅    |


License: [MIT](https://choosealicense.com/licenses/mit/)

*Bot Naze yang telah dimodifikasi
