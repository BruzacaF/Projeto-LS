import { typeWriterAnimation } from "./popUpWin.js";
import w from "../../classes/word.js";
import homePage from "../homepage.js";
import { createGamePage } from "../gamePage.js";
import Player from "../../classes/player.js";
import DataBase from "../../dataBase/dataBase.js";


async function createPopUpLose() {

    let app = document.getElementById('app');

    let popUpLose = document.createElement('div');
    popUpLose.classList.add('popUpBackground');

    let contentBox = document.createElement('div');
    contentBox.classList.add('popUp');

    let header = document.createElement('div');
    header.classList.add('headerPopUp');

    let title = document.createElement('h2');
    let subTitle = document.createElement('p');

    let content = document.createElement('div');
    content.classList.add('popUpContent');

    let textLoseBox = document.createElement('div');
    textLoseBox.classList.add('lose');

    let textLose = document.createElement('p');
    textLose.classList.add('loseText');
    let textLose2 = document.createElement('p');
    textLose2.classList.add('loseText');



    let hintBox = document.createElement('div');
    hintBox.classList.add('hintBox');

    let hint = document.createElement('p');
    hint.classList.add('hint');


    let hint2 = document.createElement('p');
    hint2.classList.add('hint');
    
    let buttons = document.createElement('div');
    buttons.classList.add('buttonRow');

    let button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Jogar novamente'; //Aqui deve ser adicionado um evento para jogar novamente

    let button2 = document.createElement('button');
    button2.classList.add('button');
    button2.innerText = 'Sair'; //Aqui deve ser adicionado um evento para sair

    button2.addEventListener('click', () => {
        homePage();
    }
    );

    button.addEventListener('click', () => {
        createGamePage();
    }
    );

    popUpLose.appendChild(contentBox);

    contentBox.appendChild(header);
    contentBox.appendChild(content);
    contentBox.appendChild(buttons);

    textLoseBox.appendChild(textLose);
    textLoseBox.appendChild(textLose2);
    
    hintBox.appendChild(hint);
    hintBox.appendChild(hint2);
    
    buttons.appendChild(button);
    buttons.appendChild(button2);
    
    header.appendChild(title);
    header.appendChild(subTitle);
    
    content.appendChild(textLoseBox);
    
    app.appendChild(popUpLose);
    
    
    if (await typeWriterAnimation(`Que pena! ${Player.name}, Tente de novo!`, title, 50)) {
        let string = ''
        if (Player.score === 0){
            string = 'todos os seus';
        } else {
            string = `${Player.scoreLocal}`
        }
        if (await typeWriterAnimation(`Você perdeu ${string} pontos`, subTitle, 50)) {
            if (await typeWriterAnimation(`A palavra era: ${w.word}`, textLose, 50)) {
                if (await typeWriterAnimation(`A dica era: ${w.hint}`, textLose2, 50)) {
                    content.appendChild(hintBox);
                    await typeWriterAnimation(`Clique em jogar novamente para tentar de novo!`, hint, 50);
                    await typeWriterAnimation(`Clique em sair para voltar ao menu principal!`, hint2, 50);
                }
            }
            
        }
    }
}


export default createPopUpLose;