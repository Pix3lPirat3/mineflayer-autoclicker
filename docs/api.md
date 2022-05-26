# API <!-- omit in toc -->

Welcome to the *mineflayer-autoclicker* API documentation page.

## Table of Contents <!-- omit in toc -->

- [1. Usage](#1-usage)

## 1. Usage

### Start Clicking

bot.autoclicker.start()

### Stop Clicking

bot.autoclicker.stop()

## 2. Options
```js
bot.autoclicker.options = {
	max_distance: 3.5, // Max distance to hit entities (Default: 3.5)
	swing_through: ['experience_orb'], // Hit through entities (Default: ['experience_orb'])
	blacklist: ['player'], // Do not hit certain entities (Default: ['player'])
	stop_on_window: true, // Stop if a window is opened (Default: true)
	always_swing: true, // Always swing, even if there is no entity (Default: true)
	delay: 1500
}
```

### max_distance
The max distance for the player's reach.

### swing_through
A list of entities to hit through, as some entities you may want to hit through, such as experience orbs.

### blacklist
A list of entities to not attack

### stop_on_window
Do not swing if there is a window open

### always_swing
Always show a swinging arm, even if we ignore the entity. Such as a blacklisted entity, or if there is no entity.

### delay
A delay in ms between attacks.