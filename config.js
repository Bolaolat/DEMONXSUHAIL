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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2348022524995";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_29_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5ZnhGRHQ1dHprbW1DTENGckp1ODN0NFhmVW5rdkZrR3hZQUowZUVxRHN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjM1gxck9qNlJwNkU3c1JwUHpMcEF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5Y2NmMmEwLTgzZWYtNDQwZC1hMTIwLTQ3YzU2MzJlMGMwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICA0MixcbiAgICAgIDE1NCxcbiAgICAgIDczLFxuICAgICAgMTE0LFxuICAgICAgMTM1LFxuICAgICAgMTk3LFxuICAgICAgOSxcbiAgICAgIDEwNyxcbiAgICAgIDMzLFxuICAgICAgNDcsXG4gICAgICAyMyxcbiAgICAgIDIwMixcbiAgICAgIDEyMyxcbiAgICAgIDE4NixcbiAgICAgIDE4MyxcbiAgICAgIDIxNSxcbiAgICAgIDE3MSxcbiAgICAgIDEsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE3OCxcbiAgICAgIDIxMCxcbiAgICAgIDIyMCxcbiAgICAgIDE3OSxcbiAgICAgIDI1NSxcbiAgICAgIDU5LFxuICAgICAgMTcwLFxuICAgICAgOTcsXG4gICAgICAxNzQsXG4gICAgICA0NyxcbiAgICAgIDI0NSxcbiAgICAgIDEzNSxcbiAgICAgIDE2NSxcbiAgICAgIDQ4LFxuICAgICAgMTE1LFxuICAgICAgMzEsXG4gICAgICA1LFxuICAgICAgMTM3LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUgyV0xUWDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjI1MjQ5OTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg0Mzg1Nzk4NzU5MjI6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVG43WTBFRUtxS3k3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdueFVMY280WW9XMkpSSWE3VFpuRmJsSTAwR0NhS2ZtTTArcWg1YVhPbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXN4eHVPczQ1MUpwU2NpLzJjWStFR2h2Vmh5Qi8yRDE1dndkR1FxT2JqbW9XWTdrNjBoZHNwZmR0a3RHS1J4aDdGRDNXR0ovaTBTWVdSdXZEOE9PQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1ZGSThEdEVtclJicEpiWEdsSlZqL3RYTE5VeUtwYXVvU0szbEFuRnlGZmUxSlVRalRtTTkyZ3dBMTBCY0ErakxOUExHbG5qM250WHlSSjIvNmFLQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyMjUyNDk5NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MjgzMzc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUN1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFQ3UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmVnpON3JhQUtyblNoOTRxVWVpb2ZUbVkvZHJRc3BvVjVidTRlSFZ2VGl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDI4MDM5NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTI4MzM4MjE1OFwifSIKfQ=="  // PUT your SESSION_ID 


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
