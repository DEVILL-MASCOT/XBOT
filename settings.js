const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./TEAM_XMEDIA/theme/NEXUS.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['918130784851'] //ur owner number
global.ownername = "꧁⃟ 🄽🄴🅇🅄🅂⃟ ꧂" //ur owner name
global.ytname = "YT: ❧⃟ 🄽🄴🅇🅄🅂 ⃟☙" //ur yt chanel name
global.socialm = "GitHub: NEXUSAT12" //ur github or insta name
global.location = "India, UP, GHAZIABAD" //ur location

//bot bomdy 
global.owner = ['918130784851, 919987052500']
global.ownertag = '918130784851' //ur tag number
global.botname = '❧⃟ 🅇🄱🄾🅃 ⃟☙' //ur bot name
global.linkz = "https://wa.me/+91813078451" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/NEXUSAT12" //ur website to be displayed
global.botscript = 'https://chat.whatsapp.com/DDWBpH9ciy38RCGYO7RkfM' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "ᎲᏰᎾᎿ Stickers\n\n\n\n\n\n\n\n\n\n\n✨✨✨ " //ur sticker watermark packname
global.author = "✨ᏦᎨᏁᎶᏁᎬᎲᏬᏕ" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./TEAM_XMEDIA/theme/NEXUS.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./TEAM_XMEDIA/theme/NEXUS.jpg") //ur logo pic
global.err4r = fs.readFileSync("./TEAM_XMEDIA/theme/NEXUS.jpg") //ur error pic
global.thumb = fs.readFileSync("./TEAM_XMEDIA/theme/NEXUS.jpg") //ur thumb pic

//damtabase
global.premium = ['918130784851'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['#']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./TEAM_XMEDIA/theme/NEXUS.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
