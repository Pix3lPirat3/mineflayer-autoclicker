var mineflayer = require('mineflayer');

var bot = mineflayer.createBot({ username: 'Pix3lPirat3' })

bot.on('spawn', function() {
  bot.loadPlugin(require('mineflayer-autoclicker'))
  bot.autoclicker.start();
})

bot.on('chat', function(username, message) {
  if(message === 'start') {
    bot.autoclicker.start();
  }
  if(message === 'stop') {
    bot.autoclicker.stop();
  }
})
