

let popUpPage1 = function () {

    let content = document.createElement('div');
    content.classList.add('popUpContent');

    let contentText = document.createElement('h2');
    contentText.textContent = ' Instruções ';

    let contentList = document.createElement('ul');
    let contentListItems = [
        '1. Você tem 6 chances de errar',
        '2. Você não pode repetir letras',
        '3. Você ganha 10 pontos por acertar a palavra',
        '4. Você recebe 2 pontos por letra acertada',
        '5. Você perde 3 ponto por letra errada',
        '6. Você perde 5 pontos se errar a palavra'
    ];

    contentListItems.forEach(item => {
        let contentListItem = document.createElement('li');
        contentListItem.textContent = item;
        contentList.appendChild(contentListItem);
    });



    content.appendChild(contentText);
    content.appendChild(contentList);

    return content;
}






export default popUpPage1;


