import createAboutPage from '../templates/about.js';
import homePage from '../templates/homepage.js';
import { checkStatusForPopUp } from './pop-up-init.js';


function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.classList.add('nav');

    const navList = document.createElement('ul');
    navList.id = 'navList';
    navList.classList.add('navList');

    const about = document.createElement('li');
    about.textContent = 'Sobre';
    about.id = 'about';
    about.classList.add('navItem');

    const home = document.createElement('li');
    home.textContent = 'Home';
    home.id = 'home';
    home.classList.add('navItem');


    const contact = document.createElement('li');
    contact.textContent = 'Ajuda';
    contact.id = 'contact';
    contact.classList.add('navItem');
    
    const themeSwitch = document.createElement('label');
    themeSwitch.classList.add('switch');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'themeSwitch';
    input.classList.add('toggle');

    const slider = document.createElement('span');
    slider.classList.add('slider');

    const cardSide = document.createElement('span');
    cardSide.classList.add('cardSide');

    themeSwitch.appendChild(input);
    themeSwitch.appendChild(slider);
    themeSwitch.appendChild(cardSide);

    navList.appendChild(home);
    navList.appendChild(about);
    navList.appendChild(contact);
    navList.appendChild(themeSwitch);

    nav.appendChild(navList);

    header.appendChild(nav);

    home.addEventListener('click', () => {
        setTimeout(() => {
            homePage();
        }, 200);
    });

    contact.addEventListener('click', () => {
        setTimeout(() => {
            localStorage.clear();
            checkStatusForPopUp();
            homePage();
        }, 200);
    }); 

    input.addEventListener("click", () => {
        const checkbox = document.getElementById('themeSwitch');
        if (checkbox.checked) {
            document.body.setAttribute('data-theme', 'dark');
        }   else {
            document.body.setAttribute('data-theme', 'light');
        }

    });


    about.addEventListener('click', () => {
        setTimeout(() => {
            createAboutPage();
        }, 200);
    }
    );




    return header;
}

export default createHeader;