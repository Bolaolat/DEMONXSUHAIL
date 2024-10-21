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
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_06_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlLY0hXUnIvSmJOY2JaSHBsSUZlSlhYQm5ycmllK3BZZGcrc3FqbEk1WDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlAwY0RPeGpSVHVpSUNrZmZLdldMdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjQ3MWYxZjctZGNjMi00YjRjLTkyNjUtMTBlMzQ0MjA4MjJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTI0LFxuICAgICAgMzcsXG4gICAgICAxNzAsXG4gICAgICAxMDMsXG4gICAgICAxNSxcbiAgICAgIDE1MyxcbiAgICAgIDE3OCxcbiAgICAgIDE0NCxcbiAgICAgIDc2LFxuICAgICAgMTc1LFxuICAgICAgMTI4LFxuICAgICAgMzQsXG4gICAgICA4NyxcbiAgICAgIDEwNSxcbiAgICAgIDEyMixcbiAgICAgIDUwLFxuICAgICAgMTQ2LFxuICAgICAgMTAyLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDEyOCxcbiAgICAgIDcxLFxuICAgICAgMTk4LFxuICAgICAgMCxcbiAgICAgIDE2MyxcbiAgICAgIDEsXG4gICAgICAzMyxcbiAgICAgIDM4LFxuICAgICAgNjQsXG4gICAgICAxNixcbiAgICAgIDEwMCxcbiAgICAgIDE3NixcbiAgICAgIDg3LFxuICAgICAgMjQ5LFxuICAgICAgMjA5LFxuICAgICAgMzIsXG4gICAgICA3MyxcbiAgICAgIDMsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWWDNYVzRBVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTAzOTM2Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MTU1NzMxNDM3MTI6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbnovL3NIRUlqNDJiZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlqNWVmTy8xYm9tQkxLNnhYUVVRSGZpRys5ZmcvTW9ER1QwOTU2VzI2alU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlhybGxIeklIK1I4Zys3aFk0UzUvcGtYWk1mV3BTVklSSnd4TVdVNmViK01GM2ptcUZkL3hiMTNFZXI2UWhqMWFKcDRoOExlTzlvQXh1azJEdDdUQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieC9Ha1ArTEFJWlM4WG5HcXI0QXEreWJCMWx3ZGxmd1RxQWt6c2YyV2haRkl6ajdnVzZtaTl3aG9xMVNrdUQrOW9mS3o4WkFZWk1Wc2lobXpreGs4aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MTAzOTM2Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTUyNjc5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpBNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkE0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTHVwTXRzWjk5eU5lRWxicXUwd20wTVM5ZTdVQkRGMjZ4VXBnQnhvaU9aMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM5MDkzNDQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1MTU2MTc4NDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💙" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLUE DEMON",
  packname: process.env.PACK_NAME || "BLUE DEMON",
  botname : process.env.BOT_NAME  || "BLUE DEMON",
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
