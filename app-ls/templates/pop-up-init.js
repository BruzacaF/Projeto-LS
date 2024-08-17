
const popUpInit = () => {
    const popUp = document.querySelector('.pop-up');
    const popUpClose = document.querySelector('.pop-up__close');
    
    popUpClose.addEventListener('click', () => {
        popUp.style.display = 'none';
    });
    }



const popUp = document.createElement('div');
popUp.classList.add('pop-up');

const popUpTtitleBox = document.createElement('div');
popUpTtitleBox.classList.add('pop-up__title-box');

const popUpTtitle = document.createElement('h2');
popUpTtitle.classList.add('pop-up__title');

const popUpSubtitle = document.createElement('p');

const popUpContent = document.createElement('div');
popUpContent.classList.add('pop-up__content');

const popUpContentTitle = document.createElement('h2');
popUpContentTitle.classList.add('pop-up__content-title');

const popUpContentText = document.createElement('p');


const nextPage = document.createElement('button');

nextPage.classList.add('pop-up__close');

const popUpClose = document.createElement('button');
popUpClose.classList.add('pop-up__close');


popUpTtitleBox.appendChild(popUpTtitle);
popUpTtitleBox.appendChild(popUpSubtitle);

popUpContent.appendChild(popUpContentTitle);
popUpContent.appendChild(popUpContentText);

popUp.appendChild(popUpTtitleBox);
popUp.appendChild(popUpContent);
popUp.appendChild(popUpClose);



export default popUpInit;