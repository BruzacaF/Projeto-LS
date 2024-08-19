import popUpInitText from "../assets/pop-up-init-text";
import logoHtml from "../assets/html5-logo.svg";
import logoCss from "../assets/css3-logo.svg";
import logoJs from "../assets/js-logo.svg";
import logoDB from "../assets/database-logo.svg";




async function createPopUp() {
    let app = document.getElementById('app');
    app.innerHTML = '';

    let popUp = document.createElement('div');
    popUp.id = 'popUp-init';
    popUp.classList.add('popUp-init');

    let popUpBox = document.createElement('div');
    popUpBox.id = 'popUpBox';
    popUpBox.classList.add('popUpBox');

    
    let popUpTitle = document.createElement('h2');
    popUpTitle.id = 'popUpTitle';
    popUpTitle.textContent = 'Bem-vindo ao Jogo da Forca';


    let popUpContent = document.createElement('div');
    popUpContent.classList.add('popUpContent');
    popUpContent.id = 'popUpContent';

    let htmlLogo = document.createElement('img');
    htmlLogo.src = logoHtml;
    htmlLogo.alt = 'HTML5 Logo';
    htmlLogo.classList.add('logo');

    let cssLogo = document.createElement('img');
    cssLogo.src = logoCss;
    cssLogo.alt = 'CSS3 Logo';
    cssLogo.classList.add('logo');

    let jsLogo = document.createElement('img');
    jsLogo.src = logoJs;
    jsLogo.alt = 'JavaScript Logo';
    jsLogo.classList.add('logo');

    let dbLogo = document.createElement('img');
    dbLogo.src = logoDB;
    dbLogo.alt = 'Database Logo';
    dbLogo.classList.add('logo');

    let popUpContentText = document.createElement('p');
    popUpContentText.textContent = 'Este é um jogo da forca (sem forca)\ndesenvolvido para a disciplina de Linguagem de Script\n\n Usamos as seguintes tecnologias:';
    popUpContentText.innerHTML = popUpContentText.textContent.replace(/\n/g, '<br>');

    let popUpContentList = document.createElement('ul');
    let popUpContentItem1 = document.createElement('li');
    let popUpContentItem2 = document.createElement('li');
    let popUpContentItem3 = document.createElement('li');
    let popUpContentItem4 = document.createElement('li');
    
    popUpContentItem1.textContent = 'HTML5 - Para Criar a estrutura do jogo';
    popUpContentItem1.appendChild(htmlLogo);
    popUpContentItem2.textContent = 'CSS3 - Para estilizar o jogo';
    popUpContentItem2.appendChild(cssLogo);
    popUpContentItem3.textContent = 'JavaScript - Para criar a lógica do jogo';
    popUpContentItem3.appendChild(jsLogo);
    popUpContentItem4.textContent = 'Supabase - Para armazenar os dados do jogo';
    popUpContentItem4.appendChild(dbLogo);
    
    popUpContentList.appendChild(popUpContentItem1);
    popUpContentList.appendChild(popUpContentItem2);
    popUpContentList.appendChild(popUpContentItem3);
    popUpContentList.appendChild(popUpContentItem4);

    let popUpContenText2 = document.createElement('p');
    popUpContenText2.textContent = 'Requisito do projeto:\n\n1 - Uso de programação funcional: Map, Filter, Reduce\n2 - Uso de módulos no JavaScript\n3 - Criação de componentes dinâmicos com JavaScript\n4 - Vite como bundler\n\n';
    popUpContenText2.innerHTML = popUpContenText2.textContent.replace(/\n/g, '<br>');
    
    popUpContent.appendChild(popUpContentText);
    popUpContent.appendChild(popUpContentList);
    popUpContent.appendChild(popUpContenText2);


    let nextButton = document.createElement('button');
    nextButton.textContent = 'Próximo';
    nextButton.id = 'next';
    nextButton.classList.add('button');


    
    
    
    app.appendChild(popUp);
    popUp.appendChild(popUpBox);
    popUpBox.appendChild(popUpTitle);
    popUpBox.appendChild(popUpContent);
    popUpBox.appendChild(nextButton);
    
    addContentToPopUp(popUpInitText);

    return popUp;
}


function addContentToPopUp(popUpInitText) {  
    let clickCount = 1;
    let nextButton = document.querySelector('#next');

    nextButton.addEventListener('click', () => {

        let title = document.querySelector('#popUpTitle');
        let popUpContent = document.querySelector('#popUpContent');
        popUpContent.innerHTML = '';
        let content = document.createElement('div');
        
        let popUpData = Object.values(popUpInitText);
        if(clickCount < (popUpData.length) + 1) {
                
            title.textContent = popUpData[clickCount-1].title;
            content = popUpData[clickCount-1].content();
            popUpContent.appendChild(content);
            
            clickCount++;

        }

        if(clickCount === (popUpData.length)) {
            nextButton.addEventListener('click', () => {
                let popUp = document.getElementById('popUp-init');
                popUp.display = 'none';
            });
        }
              
    });
}

async function checkStatusForPopUp() {
    await JSON.parse(localStorage.getItem('popUp')) ? null : createPopUp();
}




    export default createPopUp;
    export {checkStatusForPopUp};