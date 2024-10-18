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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2347071701141";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_29_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGwvdWFEMVhsMXM5SVlXRWUzZ1ozTGtzcWJ5TGE3blVQS29CaDFNSWNKaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDcxNzAxMTQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOEU3NDlFMDI2OTc0NzFCQkFGNTFDNEE3Rjk0MkNBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkyNjE3NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWFo3V0pfQWdTbE9vbm9Pd0xoc21Od1wiLFxuICBcInBob25lSWRcIjogXCJmZmViNDY2MS01N2JlLTQ4ZGUtYjEzZi01ZTdjMWUyMWUyZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjAxLFxuICAgICAgMjQzLFxuICAgICAgNTgsXG4gICAgICAyNDQsXG4gICAgICA4NixcbiAgICAgIDE1OSxcbiAgICAgIDE0NSxcbiAgICAgIDEyMSxcbiAgICAgIDEzOCxcbiAgICAgIDEzNixcbiAgICAgIDE1NyxcbiAgICAgIDI2LFxuICAgICAgODksXG4gICAgICAxMzcsXG4gICAgICA3OCxcbiAgICAgIDI0MCxcbiAgICAgIDExOSxcbiAgICAgIDgyLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjQxLFxuICAgICAgMjQxLFxuICAgICAgNDcsXG4gICAgICA2MSxcbiAgICAgIDI1MyxcbiAgICAgIDIxMCxcbiAgICAgIDIwOSxcbiAgICAgIDYxLFxuICAgICAgMTA3LFxuICAgICAgNDcsXG4gICAgICAxMzgsXG4gICAgICAzNixcbiAgICAgIDczLFxuICAgICAgMTc4LFxuICAgICAgOTcsXG4gICAgICAxNjUsXG4gICAgICA2OCxcbiAgICAgIDMzLFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRSWjYxV0xWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcxNzAxMTQxOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIxMzk1MjM3NzA3Njo1MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLkupdLSU5H5LmbVMOS4bi+xKhZw4NTxahcXG7wn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRYa3FJSEVNZmh5YmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6MFBRVWxPbXEvQXZxeTBmUVROREhOV0JXemc2K1I3YmJNSmZYKzl3MUZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlI0TEo1c09zWGY0MXJrc21WWFdUL2c3YmVET1UvUXhyMnhqbEdpcHNneGJGSjBJQ0VRRXFxbmRiS1VmdFNTaUpPVFZ6WE14MHhnc3dEc01YelVVNEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldHY25kMy9yaDgrNjZWSXFhbW02cE9lRGhVbUt1M09Tb2EwcSthSkhtbUZQRk9yNVIvcjlNRisralBsck9wbjVPY3dGSUxxTnloTjhyZ0Y1aU5aUWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzE3MDExNDE6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MjYxNzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjk4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOOTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyTW9KMllBNE9wMkl3YWQ5cm1QQURub3FKenF5YUUwdXNnbXpMWkRydmxrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTA2NTc0MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTE4NDk1NjkxM1wifSIKfQ=="  // PUT your SESSION_ID 


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
