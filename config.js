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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348155481816,2347041039367";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_22_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5RHh2VnpyemM1Q2k2ZlhCN2dNS2dsT1B0dHo4eEZpT1daRlYycENLWTNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRVTVwZHhVU1JXaUNTd2RVQW05QjVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI5ODA2ZmY0LWYyMzUtNGQ5Zi1hYTZmLWZkZmVmZjFjZjNkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyMjcsXG4gICAgICAxMTcsXG4gICAgICAxOTIsXG4gICAgICAyMDQsXG4gICAgICAxNSxcbiAgICAgIDExNCxcbiAgICAgIDIwOSxcbiAgICAgIDIwOSxcbiAgICAgIDE4MyxcbiAgICAgIDQzLFxuICAgICAgMzksXG4gICAgICAxMTEsXG4gICAgICAxMTAsXG4gICAgICA4MSxcbiAgICAgIDYyLFxuICAgICAgMTUwLFxuICAgICAgMTExLFxuICAgICAgMjcsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDIwMixcbiAgICAgIDgyLFxuICAgICAgODEsXG4gICAgICAyOSxcbiAgICAgIDc2LFxuICAgICAgMjYsXG4gICAgICAyMDQsXG4gICAgICAyMTcsXG4gICAgICAyMzQsXG4gICAgICAyMTMsXG4gICAgICAxMTcsXG4gICAgICAxMzMsXG4gICAgICAzNSxcbiAgICAgIDU1LFxuICAgICAgMTI3LFxuICAgICAgMjcsXG4gICAgICAyNyxcbiAgICAgIDkxLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ5TlNRUDFYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY1NzUxNDEzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5NzY2MTg4NzIwMjg5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnlJbzFrUXRNVGJ1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5UDlwRExxZTRjcjExOE9HbjFBTks1dDlnOE9xNzN3TDZweHN6QUNWYlNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllQWFVHcEI2cmhXVm1FbVBjcjZRTEprbURPREx3V29ZSENsRUFEQ3d0YmZxQ2FtUUY5WlNRU09jd21mU2N1N2R5QnlxbURqSjhoVDhDWlZBekNlbEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9XTmU3eFRiMlo4QXZ0Q1FNRlZMWGpaNVNKL0FGMjljSG9RS3pCSkk5eERNellOR0xDWXR2Y0JYZ1lqdGpzSFl3clhWbk9PQmNsRVBGMTQ4TlUxTGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjU3NTE0MTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1NTI5NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKbGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpsYy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
