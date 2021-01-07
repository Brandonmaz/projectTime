const express = require('express')
const TableTopia = require('../models/tableTopia.js')
const tableTopiaProduct = require('../data/product.js')
const tableTopia = express.Router()
//=============Searchable API==================

tableTopia.get('/api', (req, res) => {
  var response = []
  if(req.query.qty){
    if(typeof req.query.qty.toString() != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.qty.toString() === req.query.qty.toString()){
          response.push(tableTopiaProduct)
        }
      })
    }
  }else if(req.query.price){
    if(typeof req.query.price.toString() != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.price.toString() === req.query.price.toString()){
          response.push(tableTopiaProduct)
        }
      })
    }
  }else if(req.query.id){
    if(typeof req.query.id.toString() != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.id.toString() === req.query.id.toString()){
          response.push(tableTopiaProduct)
        }
      })
    }
  }else{
    if(typeof req.query.name != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.name.toLowerCase() === req.query.name.toLowerCase()){
          response.push(tableTopiaProduct)
        }
      })
    }
    if(typeof req.query.players != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.players === req.query.players){
          response.push(tableTopiaProduct)
        }
      })
    }
    if(typeof req.query.company != 'undefined'){
      tableTopiaProduct.filter(function(tableTopiaProduct){
        if(tableTopiaProduct.company.toLowerCase() === req.query.company.toLowerCase()){
          response.push(tableTopiaProduct)
        }
      })
    }

  }


  response = _.uniqBy(response)

  if(Object.keys(req.query).length === 0){
    response = tableTopiaProduct
  }
  res.json(response)
})
//====================EDIT========================
tableTopia.get('/:id/editTableTopia', (req, res) => {
  TableTopia.findById(req.params.id, (error, tableTopia) => {
    res.render('tableTopia/editTableTopia.ejs',
    {
      tableTopia: tableTopia,
      currentUser: req.session.currentUser
    })
  })
})

//========================PUT=========================
tableTopia.put('/:id', (req, res) => {
  TableTopia.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
    res.redirect('/tableTopia')
  })
})
// ===========================DELETE=========================
tableTopia.delete('/:id', (req, res) => {
  TableTopia.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/tableTopia')
  })
})


//======================INDEX===========================
tableTopia.get('/', (req, res) => {
  TableTopia.find({}, (error, tableTopia) => {
    res.render('tableTopia/indexTableTopia.ejs',
    {
      tableTopia: tableTopia,
      currentUser: req.session.currentUser
    })
  })
})

//========================NEW=============================
tableTopia.get('/newTableTopia', (req, res) => {
  res.render('tableTopia/newTableTopia.ejs',
  {
    currentUser: req.session.currentUser
  })
})

//================================CREATE=============================
tableTopia.post('/', (req, res) => {
  TableTopia.create(req.body, (error, foundProduct) => {
    res.redirect('/tableTopia')
  })
})
//=========================SHOW=============================
tableTopia.get('/:id/showTableTopia', (req, res) => {
  TableTopia.findById(req.params.id, (error, tableTopia) => {
    res.render('tableTopia/showTableTopia.ejs',
    {
      tableTopia: tableTopia,
      currentUser: req.session.currentUser
    })
  })
})
//==========================BUY===============================
tableTopia.put('/buy/:id', (req, res) => {
  TableTopia.findByIdAndUpdate(req.params.id, {$inc:{qty: -1}},{new: true}, (error, update) => {
  })
  res.redirect(`/tableTopia/${req.params.id}/showTableTopia`)
})

//======================SEED===============================
tableTopia.get('/seed/newProducts', (req, res) => {
  TableTopia.create(
    [
      {
        id: 10,
        name: 'Argh',
        company: 'Tabletopia',
        img: "https://cf.geekdo-images.com/sjZ_JoOsxeEyJUo8eEvdFQ__itemrep/img/yw425cwtpUOWzq7wfoYja6lA__I=/fit-in/246x300/filters:strip_icc()/pic3707559.gif",
        img1: 'https://tabletopia.gcdn.co/static/files/000/983/cyDsqR30UTJSoPqVIxM6p6.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/000/983/WdSwTEDzpMPjHnllVs9Ay3.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/000/983/Rilj6Nd75KjWnT8r3sAtW0.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        players: '2-4',
        description: `Revolt! Yes, my dear fellow animals, revolt against the humans who exploit us! I am a lab rat who broke free, and I will have my vengeance over those humans! Join me and together we shall blow up this place, the symbol of our oppression! In ARGH, a minimalist game with bluff and deduction, your mission is to find allies and the components to build a bomb. Avoid the humans and the animals that remain faithful to them. Make smart deductions and careful propositions, and thanks to you ARGH will become a landmark in the history of the struggle for animal liberation.`,
        price: 2.99,
        qty: 10
      },
      {
        id: 11,
        name: 'Roll Player',
        company: 'Tabletopia',
        img: 'https://cf.geekdo-images.com/enmQAOQl99U6wiQvZoL5GQ__itemrep/img/lEXrmts1iZPtAufiXjzxk6Ik9rg=/fit-in/246x300/filters:strip_icc()/pic2556921.jpg',
        img1: 'https://tabletopia.gcdn.co/static/files/000/753/PV9eVKcUliZYzjJK61GMP2.png?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/000/235/uvzQSJ5oVILzoXvpAallS5.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/004/258/Ko7opS0Y9cIkqdMWYc0aZ1.jpg?width=2760&height=802&scale=both&mode=crop&format=jpeg&quality=80',
        players: '1-4',
        description: `After a thousand years of peace, Dragul armies raided from the north, prompting you and every other loyal citizen of Nalos to sign up as soldiers of the King’s Guard. The armies of Nalos fought long and hard against the North’s monstrous generals and their minions, finally turning the tide of the Dragul Invasion. But new threats arise to jeopardize all of Ulos. A mysterious cult prepares for the return of an ancient god. The long-abandoned gate at Brizoor Waal, a portal between planes, rumbles with new life. Strange rifts appear in the sky, unleashing bizarre creatures into your world. Dragul invaders seek to exploit this instability to conquer Nalos. As a humble soldier of the King’s Guard, you are called away from your regiment on a special mission that will allow you to uncover the secrets of your world. You will discover powerful artifacts and meet members of the cult working to unearth them. You will confront Dragul warriors and discover the motives behind their invasion. And you will encounter strange beings from other planes who threaten to disrupt the very fabric of your universe.`,
        price: 3.99,
        qty: 1
      },
      {
        id: 12,
        name: 'Paperback',
        company: 'Tabletopia',
        img: "https://boardgaming.com/wp-content/uploads/2014/02/Paperback.jpg",
        img1: 'https://tabletopia.gcdn.co/static/files/000/636/lPl0yuT6hih4cwQycBAikB.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/000/636/U6HYLMEkspXyQzOM78V5iD.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/000/636/8QiyQyyaCVyXVJyw1QQAyD0.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        players: '2-5',
        description: `Word-building meets deck-building in the unique game Paperback. Players start with a deck of letter cards and wild cards. Each hand they form words, and purchase more powerful letters based on how well their word scored. Most letters have abilities that activate when they are used in a word, such as drawing more cards or double letter score. Players buy wilds to gain victory points. Variant included for cooperative play.`,
        price: 4.99,
        qty: 2
      },
      {
        id: 13,
        name: 'Santorini',
        company: 'Tabletopia',
        img: 'https://www.firestormgames.co.uk/uploads/images/products/ANewportStockUploads/39021-santorini.png',
        img1: 'https://tabletopia.gcdn.co/static/files/000/375/BO7Ftoqyudz9VzVkYHZwqP.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/002/281/nfMzfe0ijNdDq6c7I5T3N2.jpg?width=2760&height=802&scale=both&mode=crop&format=jpeg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/000/375/BO7Ftoqyudz9VzVkYHZwqP.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        players: '2-4',
        description: `Santorini is a non-abstract re-imagining of the 2004 edition. Since its original inception over 30 years ago, Santorini has been endlessly developed, enhanced and refined by mathematician and educator, Dr. Gordon Hamilton. Santorini is a highly accessible pure strategy game that is simple enough for an elementary school classroom. But with enough gameplay depth and content for even hardcore gamers to explore, Santorini is truly a game for everyone.`,
        price: 1.99,
        qty: 3
      },
      {
        id: 14,
        name: 'Cartographers',
        company: 'Tabletopia',
        img: 'https://cf.geekdo-images.com/GifbnAmsA4lfEcDkeaC9VA__opengraph/img/s8bFcNqzPel3E2ryY7RCY-Db9W4=/fit-in/1200x630/filters:strip_icc()/pic4397932.png',
        img1: 'https://tabletopia.gcdn.co/static/files/001/813/pqWya81js7Td90hSUx1L27.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/001/813/WBAr2xxtKfPVaXDQTJEgi0.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/001/813/Usls3gYIZmfie7maqDwP02.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        players: '1-6',
        description: `Burgle Bros is a great cooperative "heist" game for 1-4 players. Use your team to explore the office building, avoid the patrolling guards, find the loot, and escape before you get caught!`,
        price: 7.99,
        qty: 4
      },
      {
        id: 15,
        name: 'Secret Hitler',
        company: 'Tabletopia',
        img: 'https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__opengraph/img/5h_P_bH6ssOyoKlpVDxc9W-zWr0=/fit-in/1200x630/filters:strip_icc()/pic5164305.jpg',
        img1: 'https://tabletopia.gcdn.co/static/files/000/884/FzO6PvZB3MJJglKRQr5ZD2.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/000/884/kMfc5pGbyvvDZSA2ddIzfD.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/000/884/lYs71BWQdKS2KQFIGw5r72.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        players: '5-8',
        description: `The year is 1932. The place is pre-WWII Germany. In Secret Hitler, players are German politicians attempting to hold a fragile Liberal government together and stem the rising tide of Fascism. Watch out though — there are secret Fascists among you, and one player is Secret Hitler.`,
        price: 0,
        qty: 5
      },
      {
        id: 16,
        name: 'Railroad Ink',
        company: 'Tabletopia',
        img: 'https://www.boardgamequest.com/wp-content/uploads/2020/09/Railroad-Ink.jpg',
        img1: 'https://tabletopia.gcdn.co/static/files/001/984/tYM6roiTzdSjDEow8I3nZ4.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/001/984/Xv3JRG68y9mO0fTNBtxPO4.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/001/984/YEv7KTn261bgdTb2fyuPq2.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        players: '1-6',
        description: `In the multiplayer puzzle game Railroad Ink, your goal is to connect as many exits on your board as possible. Each round, a set of dice are rolled in the middle of the table, determining which kind of road and railway routes are available to all players. You have to draw these routes on your erasable boards to create transport lines and connect your exits, trying to optimize the available symbols better than your opponents. The more exits you connect, the more points you score at the end of the game, but you lose points for each incomplete route, so plan carefully! Will you press your luck and try to stretch your transportation network to the next exit, or will you play it safe and start a new, simpler to manage route?`,
        price: 6.99,
        qty: 6
      },
      {
        id: 17,
        name: 'K2',
        company: 'Tabletopia',
        img: 'https://www.boardgamequest.com/wp-content/uploads/2015/05/K2-Game.jpg',
        img1: 'https://tabletopia.gcdn.co/static/files/002/265/0zmswH6xyvcLvMi9I4JZzP.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/002/265/chzIrMHyyz7bA6zIlfcsiS0.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/002/265/jCBu4gWVrg7FDQntJcPV51.jpg?maxwidth=3200&maxheight=1800&format=jpg&quality=80',
        players: '1-5',
        description: `K2 is the second-highest mountain on Earth as well as the second deadliest. It's known as the Savage Mountain, as it kills one person for every four who have reached the summit... Now your team stands in its shadow, ready to climb for fame and glory. You know the dangers of K2 all too well. Extreme weather with frequent and deadly storms, exposed, steep, tricky routes and lack of oxygen await you on your way to the summit. You will test your climbing skills to death, try to outsmart the ever-changing weather and always worry about the acclimatization of your 2 mountaineers. Also there are the other teams ready to take the glory for themselves`,
        price: 2.99,
        qty: 7
      },
      {
        id: 18,
        name: 'Stockpile',
        company: 'Tabletopia',
        img: 'https://cf.geekdo-images.com/T7CvF_oFrEMNgS0Eyrbr5g__opengraph/img/FYnJZ2ziE7yTxLU4wboyLvArL1A=/fit-in/1200x630/filters:strip_icc()/pic2537618.jpg',
        img1: 'https://tabletopia.gcdn.co/static/files/000/337/wXRD4indGjG85LN0B0Syw6.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img2: 'https://tabletopia.gcdn.co/static/files/000/337/6TWDPa4VrC9iHKYxiNKaE1.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        img3: 'https://tabletopia.gcdn.co/static/files/000/337/7zfWt2dyhRZ0qnt42Jkdi7.jpg?maxwidth=1600&maxheight=900&format=jpg&quality=80',
        players: '2-5',
        description: `Stockpile is an economic board game that combines the traditional stockholding strategy of buy low, sell high with several additional mechanisms to create a fast-paced, engaging and interactive experience. In Stockpile, players act as stock market investors at the end of the 20th century hoping to strike it rich, and the investor with the most money at the end of the game is the winner. Stockpile centers around the idea that nobody knows everything about the stock market, but everyone does know something. In the game, this philosophy manifests in two ways: insider information and the stockpile.`,
        price: 4.99,
        qty: 8
      }
    ],
    (error, data) => {
      res.redirect('/tableTopia')
    }
  )
})

module.exports = tableTopia
