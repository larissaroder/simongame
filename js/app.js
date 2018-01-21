ranking.init();

play.addEventListener('click', () => {
  document.getElementById('game').classList.remove('state_initial');
  document.getElementById('game').classList.add('state_in_game');
  game.start();
  game.newGame();
});

rankingPanel.addEventListener('click', () =>
  document.getElementById('rankingPanel').classList.toggle('open'));

addScoreRanking.addEventListener('click', () => {
  ranking.addRanking();
});

red.addEventListener('click', () => 
  playGame.stage(RED));

green.addEventListener('click', () =>
  playGame.stage(GREEN));

yellow.addEventListener('click', () =>
  playGame.stage(YELLOW));

blue.addEventListener('click', () =>
  playGame.stage(BLUE));


  