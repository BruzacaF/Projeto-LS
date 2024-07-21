import homePage from '../templates/homepage.js';






function createScorePage() {

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


    let scoreTable = createTable();

    
    scorePage.appendChild(backButton);
    scorePage.appendChild(scoreTitle);
    scorePage.appendChild(scoreTable);

    app.appendChild(scorePage);



}

function createTable() {
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

    let data = localStorage
    data = Object.entries(data);
    data = data.filter(item => item[0] !== 'playerScore');
    data = data.map(item => JSON.parse(item[1]));
    data = data.sort((a, b) => b.score - a.score);
    data = data.slice(0, 10);

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');


        td1.innerHTML = i + 1; 
        td2.innerHTML = data[i].name;
        td3.innerHTML = data[i].score;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    
    return table;
}







export default createScorePage;