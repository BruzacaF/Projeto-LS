import { createGamePage } from './gamePage.js';
import runPreLoader from '../animations/pre-loader.js';




document.body.onload = createGamePage();

function homePage() {

    let app = document.getElementById('app');
    app.innerHTML = '';


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


    startButton.addEventListener('click', () => {
        createGamePage();
    });
}

// h1 = document.createElement('h1');
// startButton = document.createElement('button');
// scoreButton = document.createElement('button');

// h1.textContent = 'Hangman Game';
// startButton.textContent = 'Start Game';
// scoreButton.textContent = 'Score';

// startButton.classList.add('button');
// scoreButton.classList.add('button');

// startButton.id = 'start';
// scoreButton.id = 'score';

// app.appendChild(h1);
// app.appendChild(startButton);
// app.appendChild(scoreButton);



export default homePage;