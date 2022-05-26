<h1 align="center">mineflayer-autoclicker</h1>
<p align="center"><i> A simple autoclicker plugin for Mineflayer.</i></p>

---

### Getting Started

This plugin is built using Node and can be installed using:
```bash
# Unfinished (npm install --save mineflayer-autoclicker)
```

This plugin has no dependencies.

### Simple Bot

The brief description goes here.

```js
// Create your bot
const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({ username: "Player" });

// Start clicking.. (and load plugin)
bot.on('spawn', function() {
  bot.loadPlugin(require('mineflayer-autoclicker'))
  bot.autoclicker.start();
});

// Stop clicking..
bot.on('death', function() {
  bot.autoclicker.stop()
})
```

### Documentation

[API](https://github.com/Pix3lPirat3/mineflayer-autoclicker/blob/master/docs/api.md)

[Examples](https://github.com/Pix3lPirat3/mineflayer-autoclicker/blob/master/examples)

### License

This project uses the [MIT](https://github.com/Pix3lPirat3/mineflayer-autoclicker/blob/master/LICENSE) license.

### Contributions

This project is accepting PRs and Issues. See something you think can be improved? Go for it! Any and all help is highly appreciated!

For larger changes, it is recommended to discuss these changes in the issues tab before writing any code. It's also preferred to make many smaller PRs than one large one, where applicable.
