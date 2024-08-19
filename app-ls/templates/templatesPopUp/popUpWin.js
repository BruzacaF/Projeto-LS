import Player from "../../classes/player.js";
import DataBase from "../../dataBase/dataBase.js";
import DB from "../../dataBase/dataBase.js";
import { createGamePage } from "../gamePage.js";
import homePage from "../homepage.js";


async function createPopUpWin() {

    let app = document.getElementById('app');

    let popUpWin = document.createElement('div');
    popUpWin.classList.add('popUpBackground');

    let contentBox = document.createElement('div');
    contentBox.classList.add('popUp');

    let header = document.createElement('div');
    header.classList.add('headerPopUp');

    let title = document.createElement('h2');
    let subTitle = document.createElement('p');

    let content = document.createElement('div');
    content.classList.add('popUpContent');

    

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

    popUpWin.appendChild(contentBox);

    contentBox.appendChild(header);
    contentBox.appendChild(content);
    contentBox.appendChild(buttons);


    buttons.appendChild(button);
    buttons.appendChild(button2);

    header.appendChild(title);
    header.appendChild(subTitle);

    app.appendChild(popUpWin);

    await DataBase.getTopPlayers();

   
    if (await typeWriterAnimation(`Parabéns ${(Player.name)}`, title, 100)) {
        if (Player.scoreLocal > 100) { //Colocar um valor de referência 
            await typeWriterAnimation(`Você fez ${Player.scoreLocal} pontos, UM VERDADEIRO MESTRE! `, subTitle, 50);
        } else if (Player.scoreLocal > 50) { //Colocar um valor de referência
            await typeWriterAnimation(`Parabens você fez ${Player.scoreLocal},`, subTitle, 150);
        } else {
            await typeWriterAnimation(`Você fez ${Player.scoreLocal} pontos, continue treinando!`, subTitle, 50);
        }
    }

    content.appendChild(await createRanking());

    // Add fade-in animation
    content.style.opacity = 0;
    content.style.animation = 'fadeIn 1s forwards';
    content.style.animationDelay = '500ms';
    content.style.animationTimingFunction = 'ease-in';
    content.style.animationFillMode = 'forwards';
    content.style.animationIterationCount = '1';
    content.style.animationDirection = 'normal';
    content.style.animationPlayState = 'running';
    let fadeIn = document.createElement('style');
    fadeIn.setAttribute('type', 'text/css');
    fadeIn.innerHTML = '@keyframes fadeIn {from {opacity: 0;}to {opacity: 1;}}';
    content.appendChild(fadeIn);

}

function typeWriterAnimation(text, loaderText, speed) {
    return new Promise(resolve => {
        let newLoaderText = document.createElement('p');


        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                newLoaderText.textContent += text[i];
                loaderText.textContent = newLoaderText.textContent;
            }, speed * i);
        }

        setTimeout(() => {
            resolve('done');
        }, speed * text.length);
    });
}

async function createRanking() { //Aqui se possivel comparar o ranking do player com o ranking
                                // dos outros players e caso ele esteja entre os 5 primeiros exibir ele no ranking

    let ranking = document.createElement('div');
    ranking.classList.add('ranking');

    let title = document.createElement('h2');
    title.innerText = 'Ranking';

    let hintsBox = document.createElement('div');
    hintsBox.classList.add('hintsBox');

    let hint1 = document.createElement('p');
    hint1.innerText = `Clique em "Jogar novamente" para continuar de onde parou.`;

    let hint2 = document.createElement('p');
    hint2.innerText = `Clique em "Sair" para voltar ao menu principal.`;

    hintsBox.appendChild(hint1);
    hintsBox.appendChild(hint2);

    let data = DB.topPlayers;

    ranking.appendChild(title);
    let listRanking = document.createElement('ul');

    data.forEach((player, index) => {
        let playerRank = document.createElement('li');
        if (index > 0 && data[index - 1].score === player.score) {
            playerRank.innerText = ` - ${player.name} - ${player.score} pontos`;
        } else {
            playerRank.innerText = `${index + 1}º lugar: ${player.name} - ${player.score} pontos`;
        }

        listRanking.appendChild(playerRank);
    }

    );

    ranking.appendChild(listRanking);
    ranking.appendChild(hintsBox);
    return ranking;
}



export default createPopUpWin;
export {typeWriterAnimation};