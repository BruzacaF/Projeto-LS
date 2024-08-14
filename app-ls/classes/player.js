export default class Player {
    constructor(name) {
        this.id = undefined;
        this.name = name;
        this.score = 0;
        this.unguessedWordsId = [];
    }

    getName() {
        return console.log(this.name);
    }

    getScore() {
        return this.score;
    }

    updatePlayerInfo(playerInfo, guessedWords) {
        this.score = playerInfo.score;
        this.id = playerInfo.id
        this.guessedWords = guessedWords
    }

    addIdUnguessedWords(unguessedWordsId){
        unguessedWordsId.forEach(unguessedWordId => this.unguessedWordsId.push(unguessedWordId.id))
        console.log(this.unguessedWordsId)
    }

    // Remove o id de uma palavra adivinhada
    removeIdGuessedWord(id){
        this.unguessedWordsId = this.unguessedWordsId.filter(num => num !== id);
    }
    
    // Retorna aleatoriamente o id de uma palavra não adivinhada
    getRandomIdWord(){
        const randomIndex = Math.floor(Math.random() * this.unguessedWordsId.length);
        return this.unguessedWordsId[randomIndex]
    }

}