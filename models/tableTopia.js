const mongoose = require('mongoose')
const tableTopiaSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    img: String,
    description: {type: String},
    price: {type: String} || {type: Number},
    qty: {type: String }
  })
  const TableTopia = mongoose.model('TableTopia', tableTopiaSchema)

  module.exports = TableTopia

// const tableTopia =
// [
//   {
//     name: 'Argh',
//     img: 'https://tabletopia.gcdn.co/static/files/000/517/cVLzRaLgT1IgBIyu3TzxVI.png?width=460&scale=both&mode=crop',
//     players: '2-4',
//     description: `Revolt! Yes, my dear fellow animals, revolt against the humans who exploit us! I am a lab rat who broke free, and I will have my vengeance over those humans! Join me and together we shall blow up this place, the symbol of our oppression! In ARGH, a minimalist game with bluff and deduction, your mission is to find allies and the components to build a bomb. Avoid the humans and the animals that remain faithful to them. Make smart deductions and careful propositions, and thanks to you ARGH will become a landmark in the history of the struggle for animal liberation.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Roll Player',
//     img: 'https://tabletopia.gcdn.co/static/files/001/919/eWG9DD7EMUyaYyJCFBfB5A.png?width=460&scale=both&mode=crop',
//     players: '1-4',
//     description: `After a thousand years of peace, Dragul armies raided from the north, prompting you and every other loyal citizen of Nalos to sign up as soldiers of the King’s Guard. The armies of Nalos fought long and hard against the North’s monstrous generals and their minions, finally turning the tide of the Dragul Invasion. But new threats arise to jeopardize all of Ulos. A mysterious cult prepares for the return of an ancient god. The long-abandoned gate at Brizoor Waal, a portal between planes, rumbles with new life. Strange rifts appear in the sky, unleashing bizarre creatures into your world. Dragul invaders seek to exploit this instability to conquer Nalos. As a humble soldier of the King’s Guard, you are called away from your regiment on a special mission that will allow you to uncover the secrets of your world. You will discover powerful artifacts and meet members of the cult working to unearth them. You will confront Dragul warriors and discover the motives behind their invasion. And you will encounter strange beings from other planes who threaten to disrupt the very fabric of your universe.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Paperback',
//     img: 'https://tabletopia.gcdn.co/static/files/000/557/lhlpT4XNkH8yCJPzws7voF.png?width=460&scale=both&mode=crop',
//     players: '2-5',
//     description: `Word-building meets deck-building in the unique game Paperback. Players start with a deck of letter cards and wild cards. Each hand they form words, and purchase more powerful letters based on how well their word scored. Most letters have abilities that activate when they are used in a word, such as drawing more cards or double letter score. Players buy wilds to gain victory points. Variant included for cooperative play.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Santorini',
//     img: 'https://tabletopia.gcdn.co/static/files/000/374/R6tU0LcwHQJzYTUGanfdz4.png?width=460&scale=both&mode=crop',
//     players: '2-4',
//     description: `Santorini is a non-abstract re-imagining of the 2004 edition. Since its original inception over 30 years ago, Santorini has been endlessly developed, enhanced and refined by mathematician and educator, Dr. Gordon Hamilton. Santorini is a highly accessible pure strategy game that is simple enough for an elementary school classroom. But with enough gameplay depth and content for even hardcore gamers to explore, Santorini is truly a game for everyone.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Cartographers',
//     img: 'https://tabletopia.gcdn.co/static/files/001/800/g8lysa1McZ1p5hnLXXc2g6.png?width=460&scale=both&mode=crop',
//     players: '1-6',
//     description: `Burgle Bros is a great cooperative "heist" game for 1-4 players. Use your team to explore the office building, avoid the patrolling guards, find the loot, and escape before you get caught!`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Secret Hitler',
//     img: 'https://tabletopia.gcdn.co/static/files/000/852/ytQyvBLzT4vGXNQ9PxZh4B.png?width=460&scale=both&mode=crop',
//     players: '5-8',
//     description: `The year is 1932. The place is pre-WWII Germany. In Secret Hitler, players are German politicians attempting to hold a fragile Liberal government together and stem the rising tide of Fascism. Watch out though — there are secret Fascists among you, and one player is Secret Hitler.`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Railroad Ink',
//     img: 'https://tabletopia.gcdn.co/static/files/001/903/HiZnhMKiBiYMd5BC1rNAK0.png?width=460&scale=both&mode=crop',
//     players: '1-6',
//     description: `In the multiplayer puzzle game Railroad Ink, your goal is to connect as many exits on your board as possible. Each round, a set of dice are rolled in the middle of the table, determining which kind of road and railway routes are available to all players. You have to draw these routes on your erasable boards to create transport lines and connect your exits, trying to optimize the available symbols better than your opponents. The more exits you connect, the more points you score at the end of the game, but you lose points for each incomplete route, so plan carefully! Will you press your luck and try to stretch your transportation network to the next exit, or will you play it safe and start a new, simpler to manage route?`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'K2',
//     img: 'https://tabletopia.gcdn.co/static/files/000/225/7mVzFQHgQWASltlXr221d6.png?width=460&scale=both&mode=crop',
//     players: '1-5',
//     description: `K2 is the second-highest mountain on Earth as well as the second deadliest. It's known as the Savage Mountain, as it kills one person for every four who have reached the summit... Now your team stands in its shadow, ready to climb for fame and glory. You know the dangers of K2 all too well. Extreme weather with frequent and deadly storms, exposed, steep, tricky routes and lack of oxygen await you on your way to the summit. You will test your climbing skills to death, try to outsmart the ever-changing weather and always worry about the acclimatization of your 2 mountaineers. Also there are the other teams ready to take the glory for themselves`,
//     price: 'Free',
//     qty: 5
//   },
//   {
//     name: 'Stockpile',
//     img: 'https://tabletopia.gcdn.co/static/files/000/148/OXgmaad5yPyrz1gmdfXRu8.png?width=460&scale=both&mode=crop',
//     players: '2-5',
//     description: `Stockpile is an economic board game that combines the traditional stockholding strategy of buy low, sell high with several additional mechanisms to create a fast-paced, engaging and interactive experience. In Stockpile, players act as stock market investors at the end of the 20th century hoping to strike it rich, and the investor with the most money at the end of the game is the winner. Stockpile centers around the idea that nobody knows everything about the stock market, but everyone does know something. In the game, this philosophy manifests in two ways: insider information and the stockpile.`,
//     price: 'Free',
//     qty: 5
//   }
// ]
//
// module.exports = tableTopia
