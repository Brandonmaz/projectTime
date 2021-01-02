const express = require('express')
const TableTop = require('../models/tableTop.js')
const tableTop = express.Router()

//====================EDIT========================
tableTop.get('/:id/editTableTop', (req, res) => {
  TableTop.findById(req.params.id, (error, tableTop) => {
    res.render('tableTop/editTableTop.ejs',
    {
      tableTop: tableTop,
      currentUser: req.session.currentUser
    })
  })
})

//========================PUT=========================
tableTop.put('/:id', (req, res) => {
  TableTop.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
    res.redirect('/tableTop')
  })
})

// ===========================DELETE=========================
tableTop.delete('/:id', (req, res) => {
  TableTop.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/tableTop')
  })
})

//======================INDEX===========================
tableTop.get('/', (req, res) => {
  TableTop.find({}, (error, tableTop) => {
    res.render('tableTop/indexTableTop.ejs',
    {
      tableTop: tableTop,
      currentUser: req.session.currentUser
    })
  })
})

//========================NEW=============================
tableTop.get('/newTableTop', (req, res) => {
  res.render('tableTop/newTableTop.ejs',
  {
    currentUser: req.session.currentUser
  })
})

//================================CREATE=============================
tableTop.post('/', (req, res) => {
  TableTop.create(req.body, (error, createdProduct) => {
    res.redirect('/tableTop')
  })
})
//=========================SHOW=============================
tableTop.get('/:id/showTableTop', (req, res) => {
  TableTop.findById(req.params.id, (error, foundTableTop) => {
    res.render('tableTop/showTableTop.ejs',
    {
      tableTop: foundTableTop,
      currentUser: req.session.currentUser
    })
  })
})

//==========================BUY===============================
tableTop.put('/buy/:id', (req, res) => {
  TableTop.findByIdAndUpdate(req.params.id, {$inc:{qty: -1}},{new: true}, (error, update) => {
  })
  res.redirect(`/tableTop/${req.params.id}/showTableTop`)
})

//======================SEED===============================
tableTop.get('/seed/newProducts', (req, res) => {
  TableTop.create(
    [
      {
        name: 'Dead of Winter',
        img: 'https://static1.squarespace.com/static/590b935dd482e9f9e5c8d394/590b9565be659408c67f7cd1/59718745d1758e4049352dc9/1500659145807/DoW.jpg?format=1500w',
        img1: 'https://i.ytimg.com/vi/HRW6P0UJFgM/maxresdefault.jpg',
        img2: 'https://steamuserimages-a.akamaihd.net/ugc/854972554291626194/1ACBD6DEA537D726C43EA38CB9FA7F86D891069A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucXizn38LDIX0RKWgtH-x4SvOWivX9Qbjvg&usqp=CAU',
        players: '3 to 5',
        description: `In Dead of Winter, players are a colony of survivors trying to survive a hazardous winter in the aftermath of the zombie apocalypse. The colony has an objective they are trying to complete, but each player also controls a group of survivors that has a secret objective. Often this secret objective requires that a player help complete the colony objective. Only players who have completed their secret objective when the game ends will win. The game can end in a variety of ways: If the morale track reaches 0, if the round track reaches 0, or if the main objective is completed.`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'Isle of Skye',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/367408984857559714/43906691813A878E0A37C2DF658550D386F56C3E/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        img1: 'https://www.cardboardrepublic.com/wp-content/uploads/2018/08/isle-of-skye-digital-game-in-progress.jpg',
        img2: 'https://geekandsundry.com/wp-content/uploads/2016/03/Isle1.jpg',
        img3: 'https://cdn.cloudflare.steamstatic.com/steam/apps/873980/ss_eb55315dcba2be34200fc04442719233740f84fd.1920x1080.jpg?t=1583161297',
        players: '2-5',
        description: `Isle of Skye is one of the most beautiful places in the world, with soft sand beaches, gently sloping hills, and impressive mountains. The landscape of Isle of Skye is breathtaking and fascinates everyone. In the tile-laying game Isle of Skye: From Chieftain to King, 2-5 players are chieftains of famous clans and want to build their kingdoms to score as many points as possible — but in each game only four of the sixteen scoring tiles will be scored. Thanks to the scoring tiles, each game is different and leads to different tactics and strategies, but having enough money is useful no matter what else is going on. Managing that money can be tricky, though. Each turn, each player places two area tiles in front of them and sets the selling price for the tiles. Setting a high price is great, but only so long as someone actually pays the price because if no one opts to buy, then the seller must buy the tiles at the price they previously requested. In the end, the player with the best kingdom — and not the richest player — becomes the sovereign of the island.`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'Clank!',
        img: 'https://www.boardgamequest.com/wp-content/uploads/2016/11/Clank.jpg',
        img1: 'https://steamuserimages-a.akamaihd.net/ugc/1021700154285586415/54669475BE47EA37AF1A11C8C7A513F60832A036/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        img2: 'https://images.squarespace-cdn.com/content/v1/54148cdae4b05a3412bfa19b/1566241558849-N5U2N6B04SD9AX12OS4R/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/Clank+Legacy+Group+Slide.png',
        img3: 'https://steamuserimages-a.akamaihd.net/ugc/1021700154285586415/54669475BE47EA37AF1A11C8C7A513F60832A036/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        players: '2-4',
        description: `Burgle your way to adventure in the deck-building board game Clank! Sneak into an angry dragon's mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow.
        Be quick and be quiet. One false step and CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can enjoy your plunder only if you make it out of the depths alive!`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'King of Tokyo',
        img: 'https://i5.walmartimages.com/asr/8b3292f6-4c97-4c5c-a54a-cd53dae8deb8_1.fc95c893bb572e82fe308d81ec948bc6.jpeg',
        img1: 'https://steamuserimages-a.akamaihd.net/ugc/924792862056739137/937A588FE193217879C179D2C4FA107D80ADE164/',
        img2: 'https://assets.dicebreaker.com/tabletop-simulator-mod-king-of-tokyo.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/tabletop-simulator-mod-king-of-tokyo.jpg',
        img3: 'https://staticdelivery.nexusmods.com/mods/461/images/192-1-1399704801.jpg',
        players: '2-4',
        description: `Be the King of the board in this fast paced action filled game. Push your limits to how long you can be king of the hill, but be careful, everybody will be trying to push you off that hill!`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'Burgle bros',
        img: 'https://www.ultraboardgames.com/img/slideshow/burgle-bros.jpg',
        img1: 'https://steamuserimages-a.akamaihd.net/ugc/827944538478421941/0D4F230245A4B291EACD2B6EF0546434AE8DF9A3/',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAk0RZt92cdNtw4lE-EXsyBijBOePwR3tKA&usqp=CAU',
        img3: 'https://steamuserimages-a.akamaihd.net/ugc/827944538478430381/B0FE6ADA659DA652FED912A150DED9C38EC5B531/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        players: '2-4',
        description: `Burgle Bros is a great cooperative "heist" game for 1-4 players. Use your team to explore the office building, avoid the patrolling guards, find the loot, and escape before you get caught!`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'Scythe',
        img: 'https://www.mindgames.ca/content/images/thumbs/0005711_scythe-board-game_550.jpeg',
        img1: 'https://cdn.cloudflare.steamstatic.com/steam/apps/446980/ss_20f77de839b427e6fc9c87bb1b3ca80e52d4fa18.1920x1080.jpg?t=1490988428',
        img2: 'https://www.tabletopsimulator.com/user/pages/03.Games/19.scythe/screen.jpg',
        img3: 'https://www.destructoid.com//ul/522996-review-scythe/20180917150446_1-noscale.jpg',
        players: '2-5',
        description: `It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory,” which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries. In Scythe, each player represents a fallen leader attempting to restore their honor and lead their faction to power in Eastern Europa. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs. Every part of Scythe has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.`,
        price: 7.99,
        qty: 5
      },
      {
        name: 'Dawn of the Zeds',
        img: 'https://cf.geekdo-images.com/dy0bxs8k0gEIn1JwelJXAQ__opengraph/img/q-DHum2TkOgH-VYwisip1yp5eLw=/fit-in/1200x630/filters:strip_icc()/pic2453079.jpg',
        img1: 'https://cdn.anyfinder.eu/assets/bq5nw0PqOaLmAbavALThwzsvj2zGgPoc8uumJx9MEzHh93cGPsrqd8J3340RWDRF?height=800',
        img2: 'https://steamuserimages-a.akamaihd.net/ugc/845964103323208667/1E2C54F7818EDBBD22AE176157A5A04036A20579/',
        img3: 'https://steamuserimages-a.akamaihd.net/ugc/845964103323208344/4E93F7A621C26DC52C6C58F24080418E7D4C8BC1/',
        players: '2-4',
        description: `The postcards in every local drug store read, "Welcome to Fabulous Farmingdale!", an ad campaign that was the brainchild of Mayor Hernandez (who coincidentally employed his wife's public relations firm to market their community). But right now, things are far from fabulous in Farmingdale and, for once, everyone isn't blaming the Mayor. Some kind of virus or poison is turning ordinary people into vicious, zombie-like killers. It is not clear how the disease spreads (though it seems that physical contact is certainly one way), but it is obvious what the illness does to its victims. These undead, nicknamed "Zeds" from the local newscasts as the acronym for "Zombie Epidemic Disease," are now converging on your corner of the world around Farmingdale. As best you can tell, you have been left to your own devices to stop them while the National Guard organizes a relief column, but that could take days, perhaps weeks, for them to fight their way to you and until then, what can you do? With little choice between survival and a gruesome (un)death, you realize that you must coordinate the defense of the town of Farmingdale and its surrounding villages. You must lead the good citizens and emerging heroes of these communities to halt the Zeds' advances by (re)killing them, attempt to coordinate the discovery of a cure to this vile scourge, and preserve as much of the area and as many of its inhabitants as possible. There's no time to lose...`,
        price: 7.99,
        qty: 5
      },
      {
        name: 'Gloomhaven',
        img: 'https://thesolomeeple.files.wordpress.com/2018/06/imgp6559.jpg',
        img1: 'https://steamuserimages-a.akamaihd.net/ugc/932683126656278979/9BF58C4AC415A519704BDD13B81A7FF312F26590/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        img2: 'https://steamuserimages-a.akamaihd.net/ugc/932683624841019232/6DEFC15DF32DA66C0A6A4B1F4DB3AE7508E39A33/',
        img3: 'https://steamuserimages-a.akamaihd.net/ugc/83723428103944291/347F1214EE8EF3ABC2281D534A3F21D265B01023/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        players: '2',
        description: `If you are looking for an upgraded version of D&D, look no further. Gloomhaven will have you and your friends playing for hours, strategically planning out your next move. Remember that this is a game of whyts and working as a team. Set aside a couple hours out your day and enjoy this awesome game!`,
        price: 'Free',
        qty: 5
      },
      {
        name: 'Azul',
        img: 'https://www.boardgamequest.com/wp-content/uploads/2017/10/Azul.jpg',
        img1: 'https://steamuserimages-a.akamaihd.net/ugc/1336956814604692894/6D7F7FF0B9E4F95141B3B9573437D8F591A91692/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        img2: 'https://steamuserimages-a.akamaihd.net/ugc/1298674972288664639/E8B7907A52878AFD69274B535FB170EAD3CFBF28/',
        img3: 'https://external-preview.redd.it/bO7p72qtpNU8LYfHot6Fjh230egQZTUXH0OENQ1G6tk.jpg?auto=webp&s=0d2f639374e9e6a5b08c5c3ffaeb2bcda9f8f2ac',
        players: '2-4',
        description: `Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora. In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins.`,
        price: 'Free',
        qty: 5
      }
    ],
    (error, data) => {
      res.redirect('/')
    }
  )
})

module.exports = tableTop
