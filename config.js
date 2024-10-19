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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349117561795";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_55_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlYveGNQRGZzdFkzY0RLN2MxaTVMYVFLaTNqU2xmQjVZWmtPQXNjMTBFMEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExNzU2MTc5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EyOEM2MDFCQkM5MTcxMTFFREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5Mzc0OTI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNicXN6TWlIUm9pTEZKaVBiVHkzWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY2OTNiNWYtNTViNS00ZmNjLWJiMGYtZmRmZWI1OGQ5OThhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDgzLFxuICAgICAgODAsXG4gICAgICAxMTUsXG4gICAgICA4MixcbiAgICAgIDIwNSxcbiAgICAgIDk4LFxuICAgICAgMTQ2LFxuICAgICAgMTAzLFxuICAgICAgMjMsXG4gICAgICAxNTAsXG4gICAgICAxNixcbiAgICAgIDE1MixcbiAgICAgIDE3NyxcbiAgICAgIDI1MCxcbiAgICAgIDE3NixcbiAgICAgIDg5LFxuICAgICAgMjIyLFxuICAgICAgMjgsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAxNixcbiAgICAgIDg5LFxuICAgICAgMjQ4LFxuICAgICAgMzYsXG4gICAgICAxNzMsXG4gICAgICAxMCxcbiAgICAgIDIxMyxcbiAgICAgIDE2LFxuICAgICAgMjIsXG4gICAgICA2NixcbiAgICAgIDMsXG4gICAgICAyMDUsXG4gICAgICA3NSxcbiAgICAgIDYsXG4gICAgICAxNzQsXG4gICAgICAxMDAsXG4gICAgICAyMjUsXG4gICAgICAxMzEsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOOTZWREg0UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNzU2MTc5NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX3ZpcnVzX1wiLFxuICAgIFwibGlkXCI6IFwiMTk2NjE1MzQ4NDc0MDI2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdpNmRjQ0VNWFYwTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwN3VyQVptbklZUlRuTUkvZkJyTmRlbUlBbUQ4YVV4OTl0UFR5M3BnYmdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo5ZHozVlpVdXdhc1hBNE9vaVA0QTBUZXYyWWpodmFKTjZvYUkyOGlQbVFJOFNhTUxyS2xoRm9YdWI2b2p2TG52N1BnUURCWkNJaHpWbW52SEEzaWhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNyN201dzZzNzVZejhqUjdmdlB2ZU85SXlhcTd3c0NYaENDZjBKK3doQmlHODZrWE9MQjZFN2JXWnlKUmJidzZoWjZ0VkFNNU5takxGR1ArMUtPUER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTc1NjE3OTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTM3NDkyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1MVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUxULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUjNxV1QrZzNkODBHYTJ6K1prZW1UNWpYRGdXQVFZbWhZbC9SeXdZQ3E5OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjEwNDc4NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTM3NDkyODE1MlwifSIKfQ=="  // PUT your SESSION_ID 


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
