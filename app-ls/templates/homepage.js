// import { createGamePage } from './gamePage.js';
import preload from '../dataBase/preload.js';
import createHeader from '../templates/header.js';
import createScorePage from '../templates/scorePage.js';
import { runGame } from '../templates/gamePage.js';
import createPopUp from "./pop-up-init.js";
import { checkStatusForPopUp } from './pop-up-init.js';

// preload palavras e score
preload();

// preload palavras e score
preload();



async function homePage() {

    let app = document.getElementById('app');
    app.innerHTML = '';


    let header = createHeader();
    document.body.setAttribute('data-theme', 'light');
    
    
    if (document.getElementById('header')) {
        document.getElementById('header').remove();
    }
    
    await checkStatusForPopUp();
    


    
    let homePage = document.createElement('div');
    homePage.id = 'homePage';
    homePage.classList.add('homePage');
    app.appendChild(homePage);
    
    
    let h1 = document.createElement('h1');
    let startButton = document.createElement('button');
    let scoreButton = document.createElement('button');
    
    h1.textContent = 'Hangman Game';
    startButton.textContent = 'Start Game';
    scoreButton.textContent = 'Score';
    
    startButton.classList.add('button');
    scoreButton.classList.add('button');
    
    startButton.id = 'start';
    scoreButton.id = 'score';
    
    homePage.appendChild(h1);
    homePage.appendChild(startButton);
    homePage.appendChild(scoreButton);
    document.body.insertBefore(header, app);
    
    
    
    startButton.addEventListener('click', () => {
        setTimeout(() => {
            runGame();
        }
        , 400);
    });
    
    scoreButton.addEventListener('click', () => {
        setTimeout(() => {
            createScorePage();
        }
        , 400);
    });
    
    
    
}

export default homePage;