const mongoose = require('mongoose')
const tableTopSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    img: String,
    description: {type: String},
    price: {type: String} || {type: Number},
    qty: {type: String }
  })
  const TableTop = mongoose.model('TableTop', tableTopSchema)

  module.exports = TableTop

// const tableTop =
// [
//   {
//     name: 'Dead of Winter',
//     img: 'https://steamusercontent-a.akamaihd.net/ugc/534001204833566959/EB80BEC028542303069295FC0096098BAE34B593/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '3-5',
//     description: `In Dead of Winter, players are a colony of survivors trying to survive a hazardous winter in the aftermath of the zombie apocalypse. The colony has an objective they are trying to complete, but each player also controls a group of survivors that has a secret objective. Often this secret objective requires that a player help complete the colony objective. Only players who have completed their secret objective when the game ends will win. The game can end in a variety of ways: If the morale track reaches 0, if the round track reaches 0, or if the main objective is completed.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Isle of Skye',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/367408984857559714/43906691813A878E0A37C2DF658550D386F56C3E/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2-5',
//     description: `Isle of Skye is one of the most beautiful places in the world, with soft sand beaches, gently sloping hills, and impressive mountains. The landscape of Isle of Skye is breathtaking and fascinates everyone. In the tile-laying game Isle of Skye: From Chieftain to King, 2-5 players are chieftains of famous clans and want to build their kingdoms to score as many points as possible — but in each game only four of the sixteen scoring tiles will be scored. Thanks to the scoring tiles, each game is different and leads to different tactics and strategies, but having enough money is useful no matter what else is going on. Managing that money can be tricky, though. Each turn, each player places two area tiles in front of them and sets the selling price for the tiles. Setting a high price is great, but only so long as someone actually pays the price because if no one opts to buy, then the seller must buy the tiles at the price they previously requested. In the end, the player with the best kingdom — and not the richest player — becomes the sovereign of the island.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Clank!',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/802047973665206070/419367DB74B9FA4925A752A074D752102B0DFF90/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2-4',
//     description: `Burgle your way to adventure in the deck-building board game Clank! Sneak into an angry dragon's mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow.
//     Be quick and be quiet. One false step and CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can enjoy your plunder only if you make it out of the depths alive!`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'King of Tokyo',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/877501985718749430/DDAFA20795455A28A35DF2AA4624CF98562F6E0F/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2-4',
//     description: `Be the King of the board in this fast paced action filled game. Push your limits to how long you can be king of the hill, but be careful, everybody will be trying to push you off that hill!`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Burgle bros',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/827944538478415093/761FA407667D9160A2FBE67462C2C4D45C54E3DA/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2-4',
//     description: `Burgle Bros is a great cooperative "heist" game for 1-4 players. Use your team to explore the office building, avoid the patrolling guards, find the loot, and escape before you get caught!`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Scythe',
//     img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/446980/header.jpg?t=1490988428',
//     players: '2-5',
//     description: `It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory,” which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries. In Scythe, each player represents a fallen leader attempting to restore their honor and lead their faction to power in Eastern Europa. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs. Every part of Scythe has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.`,
//     price: 7.99,
//     qty: 5
//   },
//   {
//     name: 'Dawn of the Zeds',
//     img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/610705/header.jpg?t=1590703358',
//     players: '2-4',
//     description: `The postcards in every local drug store read, "Welcome to Fabulous Farmingdale!", an ad campaign that was the brainchild of Mayor Hernandez (who coincidentally employed his wife's public relations firm to market their community). But right now, things are far from fabulous in Farmingdale and, for once, everyone isn't blaming the Mayor. Some kind of virus or poison is turning ordinary people into vicious, zombie-like killers. It is not clear how the disease spreads (though it seems that physical contact is certainly one way), but it is obvious what the illness does to its victims. These undead, nicknamed "Zeds" from the local newscasts as the acronym for "Zombie Epidemic Disease," are now converging on your corner of the world around Farmingdale. As best you can tell, you have been left to your own devices to stop them while the National Guard organizes a relief column, but that could take days, perhaps weeks, for them to fight their way to you and until then, what can you do? With little choice between survival and a gruesome (un)death, you realize that you must coordinate the defense of the town of Farmingdale and its surrounding villages. You must lead the good citizens and emerging heroes of these communities to halt the Zeds' advances by (re)killing them, attempt to coordinate the discovery of a cure to this vile scourge, and preserve as much of the area and as many of its inhabitants as possible. There's no time to lose...`,
//     price: 7.99,
//     qty: 5
//   },
//   {
//     name: 'Gloomhaven',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/789758997100864822/129E5CDB95B616BCD430CB26ACF39594D3227145/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2',
//     description: `If you are looking for an upgraded version of D&D, look no further. Gloomhaven will have you and your friends playing for hours, strategically planning out your next move. Remember that this is a game of whyts and working as a team. Set aside a couple hours out your day and enjoy this awesome game!`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Azul',
//     img: 'https://steamuserimages-a.akamaihd.net/ugc/1493459917359054804/4E90300B1C3CF7EE34D591B6C1AD85ECE83AA426/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
//     players: '2-4',
//     description: `Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora. In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins.`,
//     price: 'Free',
//     qty: 5
//   }
// ]
//
// module.exports = tableTop
