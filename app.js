const RED = 'red';
const YELLOW = 'yellow';
const BLUE = 'blue';
const GREEN = 'green';

play.addEventListener('click', () => {
  document.getElementById('game').classList.remove('state_initial');
  document.getElementById('game').classList.add('state_in_game');
  game.start();
  game.newGame();
});

red.addEventListener('click', () => 
  playGame.stage(RED));

green.addEventListener('click', () =>
  playGame.stage(GREEN));

yellow.addEventListener('click', () =>
  playGame.stage(YELLOW));

blue.addEventListener('click', () =>
  playGame.stage(BLUE));

  