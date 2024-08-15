import DataBase from "../dataBase/dataBase.js";
import w from "./word.js"

export default class Player {
    static id = undefined;
    static name = '';
    static score = 0;
    static unguessedWordsId = [];
    static chances = 6;

    static initialize(name) {
        Player.name = name;
        Player.chances = 6;
        Player.score = 0;
    }

    static getName() {
        return console.log(Player.name);
    }

    static getScore() {
        return Player.score;
    }

    static setId(id) {
        Player.id = id;
    }

    static setScore(score) {
        Player.score += score;
    }

    static updateScore(score) {
        Player.score += score;
    }

    // Reduz uma unidade das chances
    static decreaseChances(){
        Player.chances -= 1;
    }

    // Define os ids das palavras não adivinhadas
    static setUnguessedWordsId(guessedWordIds) {
        const allWordsIds = DataBase.allWordsAndHints.map(object => object.id);
        Player.unguessedWordsId = allWordsIds.filter(id => !guessedWordIds.includes(id));
    }

    // Remove o id de uma palavra adivinhada
    static removeIdGuessedWord(id) {
        Player.unguessedWordsId = Player.unguessedWordsId.filter(num => num !== id);
    }

    // Retorna aleatoriamente o id de uma palavra não adivinhada
    static getRandomIdWord() {
        const randomIndex = Math.floor(Math.random() * Player.unguessedWordsId.length);
        w.id = randomIndex + 1
    }

    static toString() {
        return `ID: ${Player.id !== undefined ? Player.id : 'N/A'}, Nome: ${Player.name}, Pontuação: ${Player.score}, Palavras Não Adivinhadas: [${Player.unguessedWordsId.join(', ')}]`;
    }
}