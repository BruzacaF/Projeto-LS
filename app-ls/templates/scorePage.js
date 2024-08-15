import DB from '../dataBase/dataBase.js';
import homePage from '../templates/homepage.js';






async function createScorePage() {

    let app = document.getElementById('app');
    app.innerHTML = '';

    let scorePage = document.createElement('div');
    scorePage.id = 'scorePage';
    scorePage.className = 'scorePage';

    let scoreTitle = document.createElement('h1');
    scoreTitle.innerHTML = 'Score Page';
    scoreTitle.className = 'scoreTitle';


    let backButton = document.createElement('button');
    backButton.innerHTML = 'Back';
    backButton.className = 'backButton';
    backButton.onclick = function () {
        homePage();
    }


    let scoreTable = await createTable();


    scorePage.appendChild(backButton);
    scorePage.appendChild(scoreTitle);
    scorePage.appendChild(scoreTable);

    app.appendChild(scorePage);


    




}


async function createTable() {

    let table = document.createElement('table');
    table.id = 'scoreTable';
    table.className = 'scoreTable';

    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    th1.innerHTML = 'Rank';
    th2.innerHTML = 'Name';
    th3.innerHTML = 'Score';

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    table.appendChild(tr);

    if (!DB.loadedTopPlayers()){
        await DB.getTopPlayers();
    }
    let data = DB.topPlayers;

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        
        td1.innerHTML = i+1;
        td2.innerHTML = data[i].name;
        td3.innerHTML = data[i].score;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    return table; // Certifique-se de retornar um elemento do tipo Node
}

export default createScorePage;