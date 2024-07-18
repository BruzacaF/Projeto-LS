


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










const words = ['javascript', 'html', 'css', 'paralelepidocmaleas'];
var chances = 6;
var word = getRandomWord();

function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}




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
    box2.textContent = 'Jogador 1';
    box3.textContent = 'Pontuação: 0';
    
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
                gameOver(true);
                
            }

            if (isWordGuessed()) {
                gameOver(false);
            }
        
        }
       
    });
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

function createPopUp (message) {

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
    button2.textContent = 'Exit';
    let buttonRow = document.createElement('div');

    
    // ADD EVENT LISTENERS

    button.addEventListener('click', () => {
        restartGame(true);
    }
    );

    button2.addEventListener('click', () => {  
        homePage();

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

    

    // setTimeout(() => {
    //     popUp.style.display = 'none';
    // }, 3000);
    // setTimeout(() => {
    //     createGamePage();
    // }, 3000);
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






export { createGamePage };