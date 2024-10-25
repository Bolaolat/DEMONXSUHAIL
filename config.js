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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWWGpZZkhHNkhLWlJnYVphcmNyMkNkNlpSMGxmOGxXWE1tZk01eGExQU1rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTkwMTEwMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQThCQ0MyRTE4OTEwRDA1NTQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTg4MDM5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTkwMTEwMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRDMyMzUyMTJGQUZGNUQ4QzQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTg4MDM5NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrRGlGUi1EUFRhaXhlLXFWZ19vbHdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjNDZiMjZhLWM2YjYtNDMyZi04MWYxLWY0N2M2NDcxNTZjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE5NSxcbiAgICAgIDIwNixcbiAgICAgIDU0LFxuICAgICAgMjAsXG4gICAgICA5OCxcbiAgICAgIDEzMCxcbiAgICAgIDcxLFxuICAgICAgMjQ0LFxuICAgICAgMTQwLFxuICAgICAgMixcbiAgICAgIDk3LFxuICAgICAgMTYzLFxuICAgICAgMjA5LFxuICAgICAgMjIxLFxuICAgICAgMTczLFxuICAgICAgMTYyLFxuICAgICAgMjUsXG4gICAgICAxLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE0MixcbiAgICAgIDExMyxcbiAgICAgIDExNSxcbiAgICAgIDk4LFxuICAgICAgNzQsXG4gICAgICA0MSxcbiAgICAgIDM1LFxuICAgICAgMTE0LFxuICAgICAgMTM2LFxuICAgICAgMTY3LFxuICAgICAgMTQ1LFxuICAgICAgMTAyLFxuICAgICAgMTAzLFxuICAgICAgMTg4LFxuICAgICAgMTc2LFxuICAgICAgMTcsXG4gICAgICA1MixcbiAgICAgIDE3LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXTEE4RFBROFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxOTAxMTAyNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY1NTkwNzI0NDAzNDQ6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimKDvuI7vuI7ihJ3wnZWW8J2VnfCdlZLwnZWpIPCdlZ7wnZWSIOKdo++4jlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ttNTRnSVF4Y0x2dUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3dzSG4rcU02MThGZk92Qm1mYUJOUy81eWYwdk1zVTNuQWJVNjQ3Z2N3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsNlI0WVd4dkxkbDduYTlTSHE5WUlUMEtuR0pNWkZodTFXTEZjbWplRXJ1K1RvRDVkK3lSZ0dxQkQ2L0NnK1NTK2FNOUZrdXBmUzM3UkY0eFhPV01pdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3SVBoWm9malB5QSt6SGFmelpuaWFvZXI3V05EWkR5QkRCSTNPcHJsQXRBb0t2Z3htRWpFSERpMytXS2pqTlVCUUMxQldVYkxRbEF3dXRUOUs0ajhEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5MDExMDI3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk4ODAzOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBd1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF3WS5qc29uIjogIntcImtleURhdGFcIjpcIndXZHBzZXkwQU41bHMxalNuL1VYK2psWEFCWXpvaThPVVcxOUJ0eG1FbkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTgwNzI3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5ODgwMzkyMTQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
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
