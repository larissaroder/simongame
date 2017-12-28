const game = {
    start () {
        this.newScore = 0,
        this.possibilities = ['green','blue', 'red', 'yellow'],
        this.currentGame = [];
        this.score = document.getElementById('score');
    }, newGame() {
        this.currentGame = [];
        this.newScore = 0;
        this.generateMove();
    }, generateMove() {
        this.plays = [];
        this.newScore ++;
        this.currentGame.push(this.possibilities[(Math.floor(Math.random()*this.possibilities.length))]);
        this.plays = this.currentGame.slice();
        this._showMovies();
    }, _showMovies() {
       let i = 0;
       let moves = setInterval(() => {
         this.playGame(game.currentGame[i]);
         i++;
         if (i >= this.currentGame.length) {
           clearInterval(moves);
         }
       }, INTERVAL);
    }, playGame(field, time) {
        if (time == undefined) {
            time = TIME_OUT;
        }
        this.current = document.getElementById(field);
        this.current.classList.add('active-'+field);
        setTimeout(() => {
            this.current.classList.remove('active-'+field);
        }, time);
    }
}