const playGame = {
    stage (field) {
        game.playGame(field, 500);
        if (this._choice(field)) {
           this._nextLevel();
        } else {
            this._finishGame();
        }
    },_choice(field) {
        return game.plays[0] == field;
    }, _updateScore() {
       game.score.innerHTML = 'Score: '+String(game.newScore);
    }, _nextLevel() {
        game.plays.shift();
        if (game.plays.length == 0) {
            this._updateScore();
            game.generateMove();
        }
    }, _finishGame() {
        let current = document.getElementById('game');
        current.classList.remove('state_in_game');
        current.classList.add('after_game');
        let gameOver = setInterval(() => {
            current.classList.remove('after_game');
        }, TIME_OUT);
        setTimeout(() => {
            clearInterval(gameOver);
            current.classList.add('after_game_over');
        }, TIME_OUT);
    }
}