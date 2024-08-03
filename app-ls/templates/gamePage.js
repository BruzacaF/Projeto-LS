import homePage from '../templates/homepage.js';


function runGame() {
    let app = document.getElementById('app');
    app.innerHTML = '';

    
    
    
    let boxUser = document.createElement('div');
    boxUser.id = 'boxUser';
    boxUser.classList.add('boxUser');
    
    let boxInput = document.createElement('div');
    boxInput.id = 'boxInput';
    boxInput.classList.add('boxInput');
    
    let inputUser = document.createElement('input');
    inputUser.id = 'inputUser';
    inputUser.classList.add('inputUser');
    inputUser.placeholder = 'Digite seu nome';

    let buttonUser = document.createElement('button');
    buttonUser.id = 'run';
    buttonUser.classList.add('buttonUser');
    buttonUser.textContent = 'Iniciar';


    let backButton = document.createElement('button');
    backButton.id = 'back';
    backButton.textContent = 'Back';
    backButton.classList.add('buttonBack');
    
    backButton.addEventListener('click', () => {
        setTimeout(() => {
            homePage();
        }
        , 100);
    });
    
    
    
    buttonUser.addEventListener('click', () => {
        userName = inputUser.value;
        score = 0;
        if (userName === '') {
            alert('Digite um nome válido');
            return;
        }
        else {
            setTimeout(() => {
                
                createGamePage();
            }
            , 400);
        }
    });
    
    
    boxInput.appendChild(inputUser);
    boxInput.appendChild(buttonUser);
    boxInput.appendChild(backButton);
    boxUser.appendChild(boxInput);
    app.appendChild(boxUser);
    
    
}






function createGamePage() {

    let app = document.getElementById('app');
    let main = document.createElement('main');

    main.id = 'gamePage';
    app.innerHTML = '';

    app.appendChild(main);

    let boxWord = createWordToGuess();
    let keyboard = createKeyboard();


    main.appendChild(boxWord);
    main.appendChild(keyboard);
    addMakeGuessEvent();


}






var userName = undefined;
var score = undefined;
var words = [];
var guessedWords = [];
var chances = 6;
// words = getRandomWord();
var word = 'undefined';

function randomWord() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random];
}




// async function getRandomWord() {
//     const url = 'https://a-randomizer-data-api.p.rapidapi.com/api/random/words?count=10';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'bdfadaf8a0msh764112675ed3a40p193489jsn10ab5292962b',
//             'x-rapidapi-host': 'a-randomizer-data-api.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         words = JSON.parse(result);
//         return words;
           
//     } catch (error) {
//         console.error(error);
//     }
// }




function createChances() {
    let container = document.createElement('div');

    let box = document.createElement('div');
    let box2 = document.createElement('div');
    let box3 = document.createElement('div');

    box.id = 'boxChances';

    container.classList.add('chances');
    box.classList.add('card');
    box2.classList.add('upperCard');
    box3.classList.add('lowerCard');

    box.textContent = `Chances: ${chances}`;
    box2.textContent = `${userName}`;
    box3.textContent = `Pontos: ${score}`;

    container.appendChild(box);
    container.appendChild(box2);
    container.appendChild(box3);

    return container;
}

function restartGame(restart) {
    if (restart === true) {
        word = getRandomWord();
        chances = 6;
        createGamePage();
    }
}



function createWordToGuess() {
    let box = document.createElement('div');
    let containerLetters = document.createElement('div');


    box.id = 'boxWord';
    box.classList.add('boxWord');

    containerLetters.id = 'containerLetters';
    containerLetters.classList.add('containerLetters');

    for (let i = 0; i < words.length; i++) {
        if (guessedWords.includes(words[i])) {
            word = getRandomWord();
        } else {
            word = words[i];
            break;
        }
        if (guessedWords.length === words.length) {
            saveScore();
            homePage();
            guessedWords = [];
        }
    }



    let hideWord = word.replace(/[a-z]/g, ' ');

    containerLetters.textContent = '';

    let chances = createChances();
    box.appendChild(chances);
    box.appendChild(containerLetters);


    for (let i = 0; i < word.length; i++) {
        let span = document.createElement('span');
        span.className = 'letter';
        span.id = `letter-${i}`;
        span.textContent = hideWord[i];
        containerLetters.appendChild(span);

    }

    return box

}



function createKeyboard() {
    let keyboard = document.createElement('keyboard');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    keyboard.classList.add('keyboard');

    for (let letter of alphabet) {
        let button = document.createElement('button');
        button.id = `key-${letter}`;
        button.classList.add('key');
        button.textContent = letter; // Add this line to set the button text
        keyboard.appendChild(button);
    }

    return keyboard;
}

function makeGuess() {

    let buttons = document.querySelectorAll('.key');

    buttons.forEach(button => {
        if (button === this) {
            button.classList.toggle("guessed");
            let letter = button.textContent;
            let wordArray = word.split('');
            let wordLetters = document.querySelectorAll('.letter');
            let isLetterInWord = false;

            for (let i = 0; i < wordArray.length; i++) {
                if (letter === wordArray[i]) {
                    wordLetters[i].textContent = letter;
                    isLetterInWord = true;
                    wordLetters[i].classList.add('letterCorrect');
                    button.classList.add('keyCorrect');
                }
            }

            if (!isLetterInWord) {
                chances--;
                let boxChances = document.getElementById('boxChances');
                boxChances.textContent = `Chances: ${chances}`;
                button.classList.add('keyIncorrect');


            }
            if (chances === 0) {
                completeWord();
                gameOver(true);
                

                let buttons = document.querySelectorAll('.key');
                for (let button of buttons) {
                    button.disabled = true;
                }

            }

            if (isWordGuessed()) {
                score += 10;
                guessedWords.push(word);
                gameOver(false);
            }


        }


    });
}

function completeWord() {
    let wordArray = word.split('');
    let wordLetters = document.querySelectorAll('.letter');
    for (let i = 0; i < wordArray.length; i++) {
        wordLetters[i].textContent = wordArray[i];
    }
}


function addMakeGuessEvent() {
    let buttons = document.querySelectorAll('.key');
    for (let button of buttons) {
        button.addEventListener('click', makeGuess.bind(button));
    }
}

function isWordGuessed() {
    let wordLetters = document.querySelectorAll('.letter');
    for (let letter of wordLetters) {
        if (letter.textContent === ' ') {
            return false;
        }
    }
    return true;
}

function createPopUp(message) {

    // CREATING POPUP AND BACKGROUND
    let popUpBackground = document.createElement('div');
    let popUp = document.createElement('div');
    let popUpContent = document.createElement('div');

    // CREATING ELEMENTS FROM POPUP

    let closeButton = document.createElement('div');
    closeButton.textContent = 'X';
    let text = document.createElement('h1');
    text.textContent = message;
    let button = document.createElement('button');
    button.textContent = 'Play again';
    let button2 = document.createElement('button');
    button2.id = 'exit';
    button2.textContent = 'Exit';
    let buttonRow = document.createElement('div');


    // ADD EVENT LISTENERS

    button.addEventListener('click', () => {
        setTimeout(() => {
            restartGame(true);
        }
            , 400);
    }
    );


    button2.addEventListener('click', () => {
        setTimeout(() => {
            saveScore();
            homePage();
        }
            , 400);

    }
    );


    // ADD CLASSES AND IDS
    popUp.classList.add('popUp');
    popUp.id = 'popUp';


    closeButton.classList.add('closeButton');
    text.classList.add('text-popUp');
    button.classList.add('button');
    button2.classList.add('button');
    popUpContent.classList.add('popUpContent');
    buttonRow.classList.add('buttonRow');


    popUpBackground.classList.add('popUpBackground');



    // APPENDING ELEMENTS
    popUpBackground.appendChild(popUp);
    popUpContent.appendChild(closeButton);
    popUpContent.appendChild(text);
    buttonRow.appendChild(button);
    buttonRow.appendChild(button2);
    popUpContent.appendChild(buttonRow);

    popUp.appendChild(popUpContent);

    document.getElementById('gamePage').appendChild(popUpBackground);



}

async function gameOver(bool) {
    if (bool === true) {
        setTimeout(() => {
            createPopUp('Game Over!');
        }
            , 1000);
    } else {
        setTimeout(() => {
            createPopUp('You won!');
        }
            , 1000);
    }

}

function saveScore() {
    let playerScore = {
        name: userName,
        score: score,
    };
    let localStorageLength = localStorage.length;
    localStorage.setItem(localStorageLength + 1, JSON.stringify(playerScore));
}



export { runGame };
export { createGamePage };