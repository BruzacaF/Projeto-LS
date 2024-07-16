class Player {
    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
        this.GuessedWords = [];
    }


    getName() {
        return console.log(this.name);
    }


    getScore() {
        return this.score;
    }

    updateScore(score) {
        this.score += score;
    }

    addGuessedWord(...word) {
        word.forEach(word => {
            this.GuessedWords.push(word);
        });
    }

    getGuessedWords() {
        return this.GuessedWords;
    }

}

export default Player;