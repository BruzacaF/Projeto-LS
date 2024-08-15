import DataBase from "../dataBase/dataBase.js";

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

    setId(id){
        this.id = id;
    }

    setScore(score){
        this.score = score;
    }

    // Define os ids das palavras não adivinhadas
    setUnguessedWordsId(guessedWordIds){
        const allWordsIds = DataBase.allWordsAndHints.map(object => object.id);

        this.unguessedWordsId = allWordsIds.filter(id => !guessedWordIds.includes(id));
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

    toString() {
        return `ID: ${this.id !== undefined ? this.id : 'N/A'}, Nome: ${this.name}, Pontuação: ${this.score}, Palavras Não Adivinhadas: [${this.unguessedWordsId.join(', ')}]`;
    }

}