
import infosDev from "../assets/InfosAboutPage.js";

// Add the import statement for infosDev


function createAboutPage() {

    let app = document.getElementById('app');
    app.innerHTML = '';

    let aboutPage = document.createElement('div');
    aboutPage.id = 'aboutPage';
    aboutPage.classList.add('aboutPage');

    let h1 = document.createElement('h1');
    h1.textContent = 'Developers';


    let devInfos = document.createElement('div');
    devInfos.id = 'devInfos';
    devInfos.classList.add('devInfos');


    let mainText = document.createElement('div');
    mainText.id = 'mainText';
    mainText.classList.add('mainText');
    mainText.textContent = 'Click on the icons to learn more about the developers.';

    let mainContent = document.createElement('div');
    mainContent.id = 'mainContent';
    mainContent.classList.add('mainContent');

    let expandableIcons = createIcons();



    app.appendChild(aboutPage);
    aboutPage.appendChild(h1);
    aboutPage.appendChild(expandableIcons);
    aboutPage.appendChild(devInfos);
    devInfos.appendChild(mainText);
    devInfos.appendChild(mainContent);

    
    function createIcons() {
        let expandableIcons = document.createElement('div');
        expandableIcons.id = 'expandableIcons';
        expandableIcons.classList.add('expandableIcons');
        
        var devInfos = Object.values(infosDev);
    
        for (let i = 0; i < devInfos.length; i++) {
            let icon = document.createElement('img');
            icon.src = devInfos[i].icon;
            icon.alt = devInfos[i].name;
            icon.classList.add('icon');
            icon.addEventListener('click', function () {
                displayDevInfos(i, devInfos);

            });
            expandableIcons.appendChild(icon);
        }
        
        return expandableIcons;
    }


    function displayDevInfos(index, devInfos) {
        mainContent.innerHTML = '';

        let mainText = document.getElementById('mainText');
        mainText.style.display = 'none';

        let card = document.createElement('div');
        card.classList.add('card');

        let name = document.createElement('h2');
        name.textContent = devInfos[index].name;
    
        let role = document.createElement('p');
        role.textContent = devInfos[index].role;
    
        let description = document.createElement('p');
        description.textContent = devInfos[index].description;

        let cardIcon = document.createElement('div');
        cardIcon.classList.add('cardIcon');
        cardIcon.style.backgroundImage = `url(${devInfos[index].icon})`;


    
        
        let content = document.createElement('div');
        content.classList.add('content');

        let brandIcons = document.createElement('div');
        brandIcons.classList.add('brandIcons');

        let linkedin = document.createElement('a');
        linkedin.href = devInfos[index].brands.linkedin;
        linkedin.target = '_blank';
        let linkedinIcon = document.createElement('img');
        linkedinIcon.src = 'assets/linkedin.svg';
        linkedinIcon.alt = 'linkedin';
        linkedin.appendChild(linkedinIcon);


        let github = document.createElement('a');
        github.href = devInfos[index].brands.github;
        github.target = '_blank';
        let githubIcon = document.createElement('img');
        githubIcon.src = 'assets/github.svg';
        githubIcon.alt = 'github';
        github.appendChild(githubIcon);

        





        brandIcons.appendChild(github);
        brandIcons.appendChild(linkedin);

     
        content.appendChild(name);
        content.appendChild(role);
        content.appendChild(description);
        content.appendChild(brandIcons);

        card.appendChild(cardIcon);
        card.appendChild(content);
        mainContent.appendChild(card);


    }





};

















export default createAboutPage;