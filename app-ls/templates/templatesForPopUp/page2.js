
let popUpPage2 = function () {

    let content = document.createElement('div');
    content.classList.add('popUpContent');

    let contentText = document.createElement('h2');
    contentText.textContent = 'Como funciona a Interface'; // Fixed the variable name

    let contentList = document.createElement('ul');
    let contentListItems = [
        '1. Clique em "Entrar" para jogar',
        '2. Clique em "Cadastrar" para se cadastrar',
        '3. Clique em "Ranking" para ver o ranking dos jogadores',
    ];

    let contentText2 = document.createElement('h2');
    contentText2.textContent = 'Outras funcionalidades'; 

    let contentList2 = document.createElement('ul');
    let contentListItems2 = [
        '1. Seu progresso é salvo automaticamente',
        '2. Sua pontuação é adicionada ao ranking(se você for bom o suficiente)',
        '3. Você pode retomar o jogo de onde parou',
    ];

    contentListItems2.forEach(item => {
        let contentListItem = document.createElement('li');
        contentListItem.textContent = item;
        contentList2.appendChild(contentListItem);
    }
    );

    
    content.appendChild(contentList2);


    contentListItems.forEach(item => {
        let contentListItem = document.createElement('li');
        contentListItem.textContent = item;
        contentList.appendChild(contentListItem);
    }
    );



    content.appendChild(contentText);
    content.appendChild(contentList);
    content.appendChild(contentText2);
    content.appendChild(contentList2);

    return content;
}


export default popUpPage2;




