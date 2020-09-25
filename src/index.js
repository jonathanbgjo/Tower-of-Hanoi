const HanoiGame = require('../toh_solution/game.js')
const HanoiView = require('./hanoi-view.js')
$(() => {
  const container = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, container);
  // console.log(game.towers)
  console.log("hello")
});
