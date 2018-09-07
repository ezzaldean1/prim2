const Discord = require('discord.js');

const A7MD = new Discord.Client();

console.log("BOT ONLINE");

 

A7MD.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`
   **                   

سلام عليكم 

ممكن تشرفنا بالسيرفر ي بعدي

                               [https://discord.gg/YdrFUeg] 
                               
                              

الدعووة خاصة لك ................... [ ${member}  ]

**`) 

}).catch(console.error)

})



A7MD.login(process.env.BOT_TOKEN);
