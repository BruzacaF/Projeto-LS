import homePage from '../templates/homepage.js';






function createScorePage (){

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

function createTable () {
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

    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.sort((a, b) => b.score - a.score);

    return table;
}







export default createScorePage;