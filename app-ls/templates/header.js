import createAboutPage from '../templates/about.js';


function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.classList.add('nav');

    const logoBox = document.createElement('div');
    logoBox.id = 'logoBox';
    logoBox.classList.add('logoBox');

    const logo = document.createElement('img');
    logo.src = '/app-ls/assets/logo.jpeg';
    logo.alt = 'Logo';
    logo.classList.add('logo');

    const navList = document.createElement('ul');
    navList.id = 'navList';
    navList.classList.add('navList');

    const about = document.createElement('li');
    about.textContent = 'About';
    about.id = 'about';
    about.classList.add('navItem');

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
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


    navList.appendChild(about);
    navList.appendChild(contact);
    navList.appendChild(themeSwitch);
    logoBox.appendChild(logo);
    nav.appendChild(logoBox);
    nav.appendChild(navList);

    header.appendChild(nav);

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
        }, 400);
    }
    );




    return header;
}

export default createHeader;