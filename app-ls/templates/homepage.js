// import { createGamePage } from './gamePage.js';
import preload from '../dataBase/preload.js';
import createHeader from '../templates/header.js';
import createScorePage from '../templates/scorePage.js';
import { runGame } from '../templates/gamePage.js';
import { checkStatusForPopUp } from './pop-up-init.js';
import { typeWriterAnimation } from './templatesPopUp/popUpWin.js';


async function homePage() {
    // preload palavras e score
    preload();

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

    let cardBox = document.createElement('div');
    cardBox.id = 'cardBox';
    cardBox.classList.add('cardBox');

    
    
    startButton.textContent = 'Iniciar';
    scoreButton.textContent = 'Ranking';
    
    startButton.classList.add('button');
    scoreButton.classList.add('button');
    
    startButton.id = 'start';
    scoreButton.id = 'score';
    
    cardBox.appendChild(h1);
    cardBox.appendChild(startButton);
    cardBox.appendChild(scoreButton);
    homePage.appendChild(cardBox);
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

    typeWriterAnimation('Letra a Letra', h1, 100);
    
    
    
}

export default homePage;