const ranking = {
    init () {
        this.rankingList = [];
        let listLocalStorage = JSON.parse(localStorage.getItem('listRanking'));
        if (listLocalStorage) {
            listLocalStorage.forEach((r) => {
                this._addHtmlList(r);
                this.rankingList.push({name: r.name, score: r.score});
            });
        }
    },addRanking() {
        let score = game.newScore -1;
        let name = document.getElementById('nameInput').value;
        let list = document.getElementById('rankingNmes');
        this.rankingList.push({name: name, score: score});
        
        localStorage.setItem('listRanking', JSON.stringify(this.rankingList));
        this.rankingList.forEach((r) => {
            this._addHtmlList(r);
        });
    }, _addHtmlList(r) {
        let result = `<span>${r.name} - ${r.score} </span>`;
        let rankingNames = document.getElementById('rankingNames');
        rankingNames.innerHTML += result;
    }
}