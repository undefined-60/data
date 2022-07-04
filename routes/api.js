const tradutor = require("@vitalets/google-translate-api")
const __path = process.cwd()
const express = require('express')
const fs = require('fs')
//const knights = require("knights-canvas")
const creator = "#carlos</>"
//const canvac = require('canvacord')
const ytdl = require('ytdl-core')
//const ytpl = require('ytpl')
const secure = require('ssl-express-www')
const cors = require('cors')
//const scrapeYt = require("scrape-yt")
const  cheerio = require('cheerio')
//const dcanvas = require('discord-canvas')
//const request = require('request')
//const TikTokScraper = require('tiktok-scraper')
const router  = express.Router()
const { http, agent, aleatory } = require(__path + '/lib/fetcher.js')
const options = require(__path + '/lib/options.js')
const cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";
const ultimate = 'https://media.discordapp.net/attachments/562434823222722560/732101987566485514/image0.jpg'
const Welcome = require(__path + '/lib/fetcher.js')
const Goodbye = require(__path + '/lib/fetcher.js')

async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

const key = {
creator: '#carlos</>',
code: 404,
apikey: 'not found'
}

const error = {
creator: '#carlos</>',
code: 500,
message: 'internal server error'
}

//SFW
router.get('/sfw/waifu', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://waifu.pics/api/sfw/neko', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json', 'https://api.waifu.im/random/?selected_tags=marin-kitagawa', 'https://api.waifu.im/random/?selected_tags=waifu', 'https://nekos.life/api/v2/img/neko', 'https://waifu.pics/api/sfw/waifu', 'http://api.nekos.fun:8080/api/neko', 'https://waifu.pics/api/sfw/megumin', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : data.image ? data.image : data.message ? data.message : data.images ? data.images[0].url : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/marin', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=marin-kitagawa', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/kitsune', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://akaneko-api.herokuapp.com/api/sfwfoxes', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/fox_girl']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : data.message ? data.message : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/maid', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=maid', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/oppai', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=oppai', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/uniform', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=uniform', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/selfie', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=selfies', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/megumin', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://waifu.pics/api/sfw/megumin', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/mori', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://api.waifu.im/random/?selected_tags=mori-calliope', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/sfw/neko', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://waifu.pics/api/sfw/neko', 'http://api.nekos.fun:8080/api/neko', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/neko', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : data.image ? data.image : data.message ? data.message : data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})
//SFW

//NSFW
router.get('/nsfw/ero', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://api.waifu.im/random/?selected_tags=ass', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json', 'https://api.waifu.im/random/?selected_tags=ecchi', 'https://api.waifu.im/random/?selected_tags=ero']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.images ? data.images[0].url : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/boobs', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://nekobot.xyz/api/image?type=hboobs', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/cum', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://nekobot.xyz/api/image?type=hanal', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/tentacles', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://nekobot.xyz/api/image?type=tentacle', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message: ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/hentai', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://nekobot.xyz/api/image?type=hentai', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json', 'https://api.waifu.im/random/?selected_tags=milf', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json', 'https://api.waifu.im/random/?selected_tags=oral', 'http://api.nekos.fun:8080/api/feet', 'https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=hentai', 'http://api.nekos.fun:8080/api/hentai', 'https://nekobot.xyz/api/image?type=tentacle', 'https://waifu.pics/api/nsfw/waifu', 'https://nekobot.xyz/api/image?type=hboobs', 'https://nekobot.xyz/api/image?type=hkitsune', 'https://waifu.pics/api/nsfw/neko', 'https://nekobot.xyz/api/image?type=hanal', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json', 'https://nekobot.xyz/api/image?type=hthigh', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : data.image ? data.image : data.message ? data.message : data.images ? data.images[0].url : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/kitsune', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://nekobot.xyz/api/image?type=hkitsune', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/waifu', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http('https://waifu.pics/api/nsfw/waifu', { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/neko', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://waifu.pics/api/nsfw/neko', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=paizuri', 'https://nekobot.xyz/api/image?type=paizuri', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.url ? data.url : data.image ? data.image : data.message ? data.message : data.mages ? data.images[0].url : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/paizuri', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/feet', 'https://nekobot.xyz/api/image?type=paizuri']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message : data.image ? data.image : data.images ? data.images[0].url : ultimate), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' })
.then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/nsfw/thigh', async (req, res, next) => {
var input = req.query.apikey
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
http(aleatory(['https://nekobot.xyz/api/image?type=hthigh', 'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json']), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
http((data.message ? data.message : data[Math.floor(Math.random() * data.length)]), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }).then(({ data }) => {
res.type('png'); res.send(data)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})
//NSFW

//Card
/*
router.get('/others/welcome1', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var welcome1 = await new knights.Welcome2()
.setAvatar(req.query.avatar)
.setUsername(req.query.name)
.setBg(req.query.bg)
.setGroupname(req.query.group)
.setMember(req.query.members).toAttachment()
res.type('png')
await res.send(welcome1.toBuffer())
})

router.get('/others/welcome2', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.gp) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "gp" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var welcome2 = await new knights.Welcome()
.setUsername(req.query.name)
.setGuildName(req.query.group)
.setGuildIcon(req.query.gp)
.setMemberCount(req.query.members)
.setAvatar(req.query.avatar)
.setBackground(req.query.bg).toAttachment()
res.type('png')
await res.send(welcome2.toBuffer())
})

router.get('/others/welcome3', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var welcome3 = await new Welcome(req.query.title)
.setUsername(req.query.name)
.setDiscriminator(req.query.members)
.setMemberCount(req.query.members)
.setGuildName(req.query.group)
.setAvatar(req.query.avatar)
.setOpacity("discriminator-box", "0.1")
.setOpacity("username-box", "0.1")
.setOpacity("border", "0.1")
.setColor("border", "black")
.setColor("username-box", "black")
.setColor("username", (req.query.colorUserName? req.query.colorUserName: "#ffffff"))
.setColor("discriminator-box", "black")
.setColor("discriminator", (req.query.colorNumber ? req.query.colorNumber : "#ffffff"))
.setColor("member-count", (req.query.colorCount ? req.query.colorCount : "#ffffff"))
.setColor("message-box", "black")
.setColor("hashtag", (req.query.colorHashTag ? req.query.colorHashTag : "#ffffff"))
.setColor("title", (req.query.colorTitle ? req.query.colorTitle : "cyan"))
.setColor("message", (req.query.colorText ? req.query.colorText : "#RRGGBBAA"))
.setBackground(req.query.bg).toAttachment()
res.type('png')
await res.send(welcome3.toBuffer())
})

router.get('/others/goodbye1', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.gp) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "gp" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var goodbye1 = await new knights.Goodbye()
.setUsername(req.query.name)
.setGuildName(req.query.group)
.setGuildIcon(req.query.gp)
.setMemberCount(req.query.members)
.setAvatar(req.query.avatar)
.setBackground(req.query.bg).toAttachment()
res.type('png')
await res.send(goodbye1.toBuffer())
})

router.get('/others/goodbye2', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var goodbye2 = await new Goodbye(req.query.title)
.setUsername(req.query.name)
.setDiscriminator(req.query.members)
.setMemberCount(req.query.members)
.setGuildName(req.query.group)
.setAvatar(req.query.avatar)
.setOpacity("discriminator-box", "0.1")
.setOpacity("username-box", "0.1")
.setOpacity("border", "0.1")
.setColor("border", "black")
.setColor("username-box", "black")
.setColor("username", (req.query.colorUserName? req.query.colorUserName: "#ffffff"))
.setColor("discriminator-box", "black")
.setColor("discriminator", (req.query.colorNumber ? req.query.colorNumber : "#ffffff"))
.setColor("member-count", (req.query.colorCount ? req.query.colorCount : "#ffffff"))
.setColor("message-box", "black")
.setColor("hashtag", (req.query.colorHashTag ? req.query.colorHashTag : "#ffffff"))
.setColor("title", (req.query.colorTitle ? req.query.colorTitle : "cyan"))
.setColor("message", (req.query.colorText ? req.query.colorText : "#RRGGBBAA"))
.setBackground(req.query.bg).toAttachment()
res.type('png')
await res.send(goodbye2.toBuffer())
})

router.get('/others/levelup', async (req, res, next) => {
if (!req.query.members) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "member" in request' })
if (!req.query.gp) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "gp" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.group) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "group" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var levelup = await new knights.Up()
.setAvatar(req.query.avatar)
.toAttachment()
res.type('png')
await res.send(levelup.toBuffer())
})

router.get('/others/rank', async (req, res, next) => {
if (!req.query.required) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "required" in request' })
if (!req.query.avatar) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "avatar" in request' })
if (!req.query.bg) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "bg" in request' })
if (!req.query.rank) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "rank" in request' })
if (!req.query.level) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "level" in request' })
if (!req.query.now) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "now" in request' })
if (!req.query.name) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
var rank = await new knights.Rank()
.setUsername(req.query.name)
.setLevel(req.query.level)
.setNeedxp(req.query.required)
.setCurrxp(req.query.now)
.setRank(req.query.rank)
.setAvatar(req.query.avatar)
.setBg(req.query.bg).toAttachment()
res.type('png')
await res.send(rank.toBuffer())
})
//Card

//Canvas
router.get('/canvas/wasted', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.wasted(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/wanted', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.wanted(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/rip', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.rip(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/sepia', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.sepia(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/greyscale', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.greyscale(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/blur', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.blur(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/invert', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.invert(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/circle', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.circle(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/trigger', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.trigger(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/darkness', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.darkness(req.query.url, 10).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/pixelate', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.pixelate(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/sharpen', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.sharpen(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/rainbow', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.rainbow(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/trash', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.trash(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/colorfy', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.colorfy(req.query.url, 'green').then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/jail', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.jail(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/delete', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.delete(req.query.url).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/phub', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.phub({ username: 'carlos', message: 'sez free', image: req.query.url }).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})

router.get('/canvas/youtube', async (req, res) => {
if (!req.query.url) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
if (!req.query.apikey) return res.json(key)
if (req.query.apikey !== 'undefined')  return res.json(key)
canvac.Canvas.youtube({ username: 'carlos', content: 'sez free', avatar: req.query.url, dark: false }).then(async (canva) => {
res.type('png')
await res.send(canva)
}).catch((err) => {
res.type('png'); res.send(fs.readFileSync(__path + '/img.jpg'))
})
})
//Canvas

router.get('/tiktod', async (req, res, next) => {
var apikeyInput = req.query.apikey,
url = req.query.url

if(!apikeyInput) return res.json(loghandler.notparam)
if(apikeyInput != 'RestApiCAF') return res.json(loghandler.invalidKey)
 if (!url) return res.json(loghandler.noturl)

 TikTokScraper.getVideoMeta(url, options)
 .then(vid => {
 console.log(vid)
 res.json({
 status: true,
 creator: `${creator}`,
 videoNoWm: vid
 })
 })
 .catch(e => {
 res.json(loghandler.invalidlink)
 })
})

router.get('/tiktod/stalk', async (req, res, next) => {
var apikeyInput = req.query.apikey,
username = req.query.username

if(!apikeyInput) return res.json(loghandler.notparam)
if(apikeyInput != 'RestApiCAF') return res.json(loghandler.invalidKey)
if (!username) return res.json(loghandler.notusername)


TikTokScraper.getUserProfileInfo(username)
.then(user => {
res.json({
status : true,
creator : `${creator}`,
result : user
})
})
.catch(e => {
 res.json({
 status : false,
 creator : `${creator}`,
 message : "error, mungkin username anda tidak valid"
 })
 })
})
*/
router.get('/search/anime', async (req, res, next) => {
var input = req.query.apikey
var inpul = req.query.name
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
if (!inpul) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "name" in request' })
http('https://api.jikan.moe/v4/anime?q=' + req.query.name, { method: "get", headers: { "user-agent": agent() } }).then(async({ data }) => {
a = []
for (let i of data.data) {
a.push({ title: i.title, url: i.url, type: (i.type || 'desconhecido'), source: (i.source || 'desconhecido'), episodes: (i.episodes || 'desconhecido'), status: i.status, upload: i.aired.string, duration: i.duration, nota: (i.score || 'desconhecido'), sinopse: (i.synopsis || 'desconhecido'), season: (i.season || 'desconhecido'), image: i.images.jpg.image_url, category: (i.genres || 'desconhecido') })
}
res.json({
status: 200,
creator: creator,
result: a
})
}).catch((err) => {
res.json(error)
})
})

router.get('/others/tradutor', async (req, res, next) => {
var input = req.query.apikey
var inpul = req.query.text
var inpui = req.query.language
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
if (!inpul) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "text" in request' })
if (!inpui) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "language" in request' })
tradutor(req.query.text, { to: req.query.language })
.then(({ text }) => {
res.json({
status: 200,
creator: creator,
result: text
})
}).catch((err) => {
res.json(error)
})
})

router.get('/others/tiny', async (req, res, next) => {
var input = req.query.apikey
var inpul = req.query.url
if (!input) return res.json(key)
if (input !== 'undefined')  return res.json(key)
if (!inpul) return res.json({ creator: '#carlos</>', code: 200, message: 'canot acess "url" in request' })
http(encodeURI('https://tinyurl.com/api-create.php?url=' + req.query.url), { method: "get", headers: { "user-agent": agent() } }).then(({ data }) => {
res.json({
status: 200,
creator: creator,
url: data,
})
}).catch((err) => {
res.json(error)
})
})

router.get('/others/encurtar', async (req, res, next) => {
http("https://www.encurtador.com.br/url-encurtada.php", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": agent() }, data: new URLSearchParams(Object.entries({ "u": req.query.url, "submit": "Encurtar URL" })) }).then(({ data }) => {
var $ = cheerio.load(data)
res.json({
status: 200,
creator: creator,
url: "https://" + $('html').eq(0).html().split(`href="total-de-cliques-da-url.php?u=`)[1].split(`"`)[0],
})
}).catch((err) => {
res.json(error)
})
})

module.exports = router