const playGame = {
    stage (field) {
        game.playGame(field, 500);
        if (this._choice(field)) {
            game.plays.shift();
            if (game.plays.length == 0) {
                this._updateScore();
                game.generateMove();
            }
        }
    },_choice(field) {
        return game.plays[0] == field;
    }, _updateScore() {
       game.score.innerHTML = 'Score: '+String(game.newScore);
    },
}