const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348033405655 ";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_24_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpNUW1Gc2F6a1JqNm56WHNENmVsM0lwQS9Rc0MxWXEyZ0lOeFRjelpLdEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZxeXBsUzktUlN5QWNRR1RlQVQzTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTBkZmJhYWMtOWUxZi00OGE4LTg2MjgtOTg3ZTdkYWJlNGMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDYxLFxuICAgICAgNCxcbiAgICAgIDE5NixcbiAgICAgIDEwMCxcbiAgICAgIDYxLFxuICAgICAgMjIxLFxuICAgICAgMTA2LFxuICAgICAgMjQ0LFxuICAgICAgMTQ3LFxuICAgICAgMjQyLFxuICAgICAgNjEsXG4gICAgICAxMTEsXG4gICAgICA4MSxcbiAgICAgIDUsXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxODcsXG4gICAgICA4OSxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjQ3LFxuICAgICAgMTEsXG4gICAgICAzNixcbiAgICAgIDEyOSxcbiAgICAgIDEwOSxcbiAgICAgIDI1MixcbiAgICAgIDEwNixcbiAgICAgIDIwMSxcbiAgICAgIDE5OCxcbiAgICAgIDYwLFxuICAgICAgMTE0LFxuICAgICAgMTE0LFxuICAgICAgNjcsXG4gICAgICA4MyxcbiAgICAgIDIwMCxcbiAgICAgIDY1LFxuICAgICAgMTQ2LFxuICAgICAgNTcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQM1dRWk5RNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMzQwNTY1NToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1JTkFUWkVFIEVOVEVSUFJJU0VcIixcbiAgICBcImxpZFwiOiBcIjM0Mzk0MTQ4NDQyMTIxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luYm9OY0hFUGlmK01BR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWUxvWVpKNTZXQzIwSEEveFZNY3dLMU41dlJEdHkvUzJRbnB0TWkvaVdHTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJld1VWT2tnTE8rTFpaUFRiNUxSbm96bTdxMmV1UkMrU01yclFrSVVPVHlFQ3BGZTRQYkhXRWdkdXoxNldDWDM5WkozUUp1NUZOSnVpaE1wcEZKcEtDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJUEFkRjZ3dGxtL2IwMTRKZUZpYUxyMlJqU3FUb2VkQmU0bTd2RzdRN0kxSWlrTjVQTTVrUjJmVUhENDNJRXRtUzFrN2ZaaWZ4NGNZTXJFVEY0cWRDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDMzNDA1NjU1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY4MDA2MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Fci5qc29uIjogIntcImtleURhdGFcIjpcIkRHWUwydGFLaHREdmtqUXI0eStEL1BuT3ZKelA1cnFFTWc5aGdmUExkTTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2MjAzNjM2MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzNjQ1NTg5NTM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
