import Player from '../classes/player.js';
import homePage from '../templates/homepage.js';
import DataBase from '../dataBase/dataBase.js';
import w from '../classes/word.js';


function runGame() {
    let app = document.getElementById('app');
    app.innerHTML = '';

    
    
    
    let boxUser = document.createElement('div');
    boxUser.id = 'boxUser';
    boxUser.classList.add('boxUser');
    
    let boxInput = document.createElement('div');
    boxInput.id = 'boxInput';
    boxInput.classList.add('boxInput');

    let typeLogin = document.createElement('div');
    
    let loginButton = document.createElement('span');
    loginButton.textContent = 'Login';
    loginButton.id = 'login';
    loginButton.classList.add('typeLoginText');

    let cadastrarButton = document.createElement('span');
    cadastrarButton.textContent = 'cadastro';
    cadastrarButton.id = 'cadastrar';
    cadastrarButton.classList.add('typeLoginText2');

    typeLogin.appendChild(loginButton);
    typeLogin.appendChild(cadastrarButton);
    
    typeLogin.classList.add('typeLogin');

    let inputContainer = document.createElement('div');
    inputContainer.id = 'inputContainer';
    inputContainer.classList.add('inputContainer');

    let inputUser = document.createElement('input');
    inputUser.id = 'inputUser';
    inputUser.classList.add('inputUser');
    inputUser.placeholder = 'Digite seu nome';

    // Restricting the input to 10 characters and only letters
    inputUser.maxLength = 10;
    inputUser.pattern = '[a-zA-Z0-9]+';

    let inputPassword = document.createElement('input');
    inputPassword.id = 'inputPassword';
    inputPassword.classList.add('inputPassword');
    inputPassword.placeholder = 'Digite sua senha';

    // Restricting the input to 10 characters and only letters, numbers
    inputPassword.pattern = '[a-zA-Z0-9]+';

    inputPassword.type = 'password';
    inputPassword.minLength = 4;
    inputPassword.maxLength = 10;

    let showPassword = document.createElement('button');
    showPassword.id = 'showPassword';
    showPassword.classList.add('showPassword');

    let showPasswordImg = document.createElement('img');
    showPasswordImg.src = './assets/password.svg';
    showPasswordImg.classList.add('showPasswordImg');
    
    showPassword.appendChild(showPasswordImg);

    
  

    let buttonsBox = document.createElement('div');
    buttonsBox.id = 'buttonsBox';
    buttonsBox.classList.add('buttonsBox');


    let buttonUser = document.createElement('button');
    buttonUser.id = 'run';
    buttonUser.classList.add('buttonUser');
    buttonUser.textContent = 'Iniciar';


    let backButton = document.createElement('button');
    backButton.id = 'back';
    backButton.textContent = 'Back';
    backButton.classList.add('buttonBack');


    inputUser.addEventListener('input', () => {
        inputUser.value = inputUser.value.replace(/[^a-zA-Z0-9 ]/g, '');
    });


    
    backButton.addEventListener('click', () => {
        setTimeout(() => {
            homePage();
        }
        , 100);
    });

    loginButton.addEventListener('click', () => {
        inputUser.placeholder = 'Digite seu nome';
        inputPassword.placeholder = 'Digite sua senha';
        buttonUser.textContent = 'Iniciar';
        cadastrarButton.classList.remove('selected');
        loginButton.classList.add('selected');
    }
        
    );

    cadastrarButton.addEventListener('click', () => {
        inputUser.placeholder = 'Digite seu nome de usuário';
        inputPassword.placeholder = 'Cadastre sua senha';
        buttonUser.textContent = 'Cadastrar';

        loginButton.classList.remove('selected'); // adiciona a classe para elucidar qual botão está selecionado
        cadastrarButton.classList.add('selected');

        cadastrarButton.addEventListener('click', () => {
            // Função para cadastrar usuário na database
        });
    }
    );
    
    showPassword.addEventListener('click', () => {
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
            showPasswordImg.src = './assets/hidePassword.svg';
        } else {
            inputPassword.type = 'password';
            showPasswordImg.src = './assets/password.svg';
        }
    });


    
    
    
    buttonUser.addEventListener('click', async () => {
        const userName = inputUser.value;
        const userPassword = inputPassword.value;

        try {
            validateInput(userName, userPassword);
            // Chama processUserData e aguarda a sua execução
            const Player = await processUserData(userName, userPassword);

            // Se não houver erro, cria a página do jogo após um atraso
            setTimeout(() => {
                createGamePage(Player);
            }, 400);

        } catch (err) {
            // Exibe o erro e encerra a função para garantir que nada mais seja executado
            inputPassword.value = 'Senha Incorreta';
            inputPassword.classList.add('shake-animation'); // Add this line to add the shake animation
            setTimeout(() => {
                inputPassword.classList.remove('shake-animation'); // Remove the shake animation after a delay
                inputPassword.value = ''; // Reset the input value after the shake animation
            }, 500);
            // alert(err.message);
        }
    });
    

    
    
    inputContainer.appendChild(inputUser);
    inputContainer.appendChild(showPassword);
    inputContainer.appendChild(inputPassword);
    
    buttonsBox.appendChild(buttonUser);
    buttonsBox.appendChild(backButton);
    
    boxInput.appendChild(typeLogin);
    boxInput.appendChild(inputContainer);
    boxInput.appendChild(buttonsBox);
    
    boxUser.appendChild(boxInput);
    
    app.appendChild(boxUser);
}


async function processUserData(userName, userPassword){
    let inputUser = document.getElementById('inputUser');
    let inputPassword = document.getElementById('inputPassword');

    let id = await DataBase.userExists(userName);
    Player.initialize(userName);
    
    if (id !== null){
        if(!await DataBase.authenticatePassword(id, userPassword)){
            throw new Error('Senha incorreta');
        }
        let score = await DataBase.getScoreById(id);
        Player.setScore(score);
        
        let guessedWordsId = await DataBase.getGuessedWordIdsByPlayerId(id);
        Player.setUnguessedWordsId(guessedWordsId);
        
        Player.setId(id);
    } else {
        DataBase.addPlayerToDatabase(userName, userPassword);
    }
    return Player;
}

// Valida os inputs do usuário
function validateInput(userName, userPassword){
    let flag = false;
    let message = ''
    if (userName === '') {
        message = 'Digite um nome válido'
        flag = true;
    }
    if (userPassword.length < 4){
        message += '\nSua senha deve ter no mínimo 4 caracteres'
        flag = true;
    }
    if (flag){
        throw new Error(message);
    }
}




function createGamePage(Player) {

    let app = document.getElementById('app');
    let main = document.createElement('main');

    main.id = 'gamePage';
    app.innerHTML = '';

    app.appendChild(main);

    let boxWord = createWordToGuess(Player);
    let keyboard = createKeyboard();


    main.appendChild(boxWord);
    main.appendChild(keyboard);
    addMakeGuessEvent();


}





var userName = undefined;
var score = undefined;

function randomWord() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random];
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

    box.textContent = `Chances: ${Player.chances}`;
    box2.textContent = `${Player.name}`;
    box3.textContent = `Pontos: ${Player.score}`;

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


// ok*
function createWordToGuess() {
    let box = document.createElement('div');
    let containerLetters = document.createElement('div');


    box.id = 'boxWord';
    box.classList.add('boxWord');

    containerLetters.id = 'containerLetters';
    containerLetters.classList.add('containerLetters');

    
    // Sorteia a palavra
    Player.getRandomIdWord();
    let wordHint = DataBase.getWordHint(w.id);
    w.word = wordHint.word;
    console.log(w.word);

    let hideWord = w.word.replace(/[a-zA-Zá-úÁ-ÚçÇ]/gi, '');


    containerLetters.textContent = '';

    let chances = createChances();
    box.appendChild(chances);
    box.appendChild(containerLetters);


    for (let i = 0; i < w.word.length; i++) {
        let span = document.createElement('span');
        span.className = 'letter';
        span.id = `letter-${i}`;
        span.textContent = hideWord[i];
        containerLetters.appendChild(span);

    }

    return box

}


// ok
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

    buttons.forEach((button) => {
        if (button === this) {
            button.classList.toggle("guessed");
            let letter = button.textContent;
            let wordArray = w.word.split('');
            let wordLetters = document.querySelectorAll('.letter');
            let isLetterInWord = false;

            const collator = new Intl.Collator('pt-BR', { sensitivity: 'base' });

            for (let i = 0; i < wordArray.length; i++) {
                if (collator.compare(wordArray[i], letter) === 0) {
                    wordLetters[i].textContent = wordArray[i];
                    isLetterInWord = true;
                    wordLetters[i].classList.add('letterCorrect');
                    button.classList.add('keyCorrect');
                }
            }

            if (!isLetterInWord) {
                Player.decreaseChances();
                let boxChances = document.getElementById('boxChances');
                boxChances.textContent = `Chances: ${Player.chances}`;
                button.classList.add('keyIncorrect');


            }
            if (Player.chances === 0) {
                completeWord();
                gameOver(true);
                

                let buttons = document.querySelectorAll('.key');
                for (let button of buttons) {
                    button.disabled = true;
                }

            }

            if (isWordGuessed()) {
                Player.updateScore(10);
                Player.removeIdGuessedWord(w.id);
                gameOver(false);
            }


        }


    });
}

// ok
function completeWord() {
    let wordArray = w.word.split('');
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

// ok
function isWordGuessed() {
    let wordLetters = document.querySelectorAll('.letter');
    for (let letter of wordLetters) {
        if (letter.textContent === '') {
            return false;  // Retorna false se alguma letra ainda não foi adivinhada
        }
    }
    return true;  // Retorna true se todas as letras foram adivinhadas
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

// ok
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


export { runGame };
export { createGamePage };