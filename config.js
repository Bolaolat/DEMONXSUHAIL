const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴬˡᵖʰᵃ𝕿𝖔𝖝𝖎𝖈 𝖂𝖎𝖙𝖈𝖍 !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349019011027,2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_54_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICA4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklWdkMwYkU5c3FvSWRRN1k1VnZLN2hYZm5Ob2tqMDB0M2RoYXlrSFA2cEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImp2cUV2bzh3U1lxMl90WEt4Vy1wb2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTNjMmE3YTItYmY3Yy00MTU5LWJjOTQtMWZjODNkOTFkZDViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDI1MCxcbiAgICAgIDIxNSxcbiAgICAgIDU5LFxuICAgICAgMjMwLFxuICAgICAgMTcxLFxuICAgICAgMzMsXG4gICAgICAyMDgsXG4gICAgICAxMDYsXG4gICAgICA0NSxcbiAgICAgIDE5NCxcbiAgICAgIDI0OCxcbiAgICAgIDI1MCxcbiAgICAgIDI0MCxcbiAgICAgIDE5MSxcbiAgICAgIDEyLFxuICAgICAgMjQwLFxuICAgICAgMTUwLFxuICAgICAgNjIsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNzYsXG4gICAgICAxNDYsXG4gICAgICAzNyxcbiAgICAgIDEzOCxcbiAgICAgIDM4LFxuICAgICAgMTE4LFxuICAgICAgMTYxLFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgMTAsXG4gICAgICA2NyxcbiAgICAgIDc5LFxuICAgICAgMjM4LFxuICAgICAgNzksXG4gICAgICAzMSxcbiAgICAgIDEyOCxcbiAgICAgIDE2MSxcbiAgICAgIDE0MSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MjhWOUNUV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTAzOTM2Nzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lybm9sb1E2OXlQdVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWlduUEIxR00wMnM5ZUxXL2V2NkpUS01XUko1anBacTN5VzhtUFVBa0NEWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrMW1ZUjA0K1pHczVpdHJpYmI1ZjcvRTlzWCtUOXNFbW53cHc1d0k3eGtpVDZpWExFbUp5bUZvNmZDdi90TG1aQ0hzR253cEcxbXJyT3V6TnYxaThBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVN1NQVnpxYm00Rnhvb2dYVS9SVEF4Qkx5eWVCVHBheTZhWVZ2Q3c1RVVLRytFVEFlTHoxYVN0aHpyZ0VlcFMrK29yWGJIWDV4QmhOZWh2bFAzU1dEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDA4MDQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG5EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJveW5LK1FkZ004Z1RNbGxvT1dsYWFrQm51dTJTRy9zand1clhqTEpvVkhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTMxMzkyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzYwNTUyNTcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💙" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLUE DEMON",
  packname: process.env.PACK_NAME || "BLUE DEMON",
  botname : process.env.BOT_NAME  || "ᴬˡᵖʰᵃ𝕿𝖔𝖝𝖎𝖈 𝖂𝖎𝖙𝖈𝖍",
  ownername:process.env.OWNER_NAME|| "BLUE DEMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLUE DEMON"  ).toUpperCase(),



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
