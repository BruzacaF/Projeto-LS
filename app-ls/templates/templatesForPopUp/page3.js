import infosDev from "../../assets/InfosAboutPage";

let popUpPage3 = function () {
    
        let infosDevData = Object.values(infosDev);

        let nextButton = document.querySelector('#next');
        nextButton.addEventListener('click', () => {
            let popUp = document.getElementById('popUp-init');
            popUp.style.display = 'none';
            localStorage.setItem('popUp', JSON.stringify(true));
        });


        let content = document.createElement('div');
        content.classList.add('popUpContentDevs');

        let expandableIcons = document.createElement('div');
        expandableIcons.classList.add('popUpExpandableIcons');

        let contentBox = document.createElement('div');
        contentBox.id = 'contentBoxDev';
        contentBox.classList.add('contentBoxDev');

        let contentBoxDefault = document.createElement('div');
        contentBoxDefault.classList.add('contentDefault');

        let textDefault = document.createElement('h2');
        textDefault.textContent = 'Time de desenvolvedores:';

        let textDefault2 = document.createElement('p');
        textDefault2.textContent = 'Clique nos ícones acima\npara saber mais sobre nossos desenvolvedores.';
        textDefault2.innerHTML = textDefault2.textContent.replace(/\n/g, '<br>');
        
        let listDefault = document.createElement('ul');
        let listDefaultItems = [
            'Filipe Bruzaca Cavalcante - Sistemas para Internet',
            'Julielison - Sistemas para Internet',
            'Flavio - Sistemas para Internet'
        ];
        
        listDefaultItems.forEach(item => {
            let listDefaultItem = document.createElement('li');
            listDefaultItem.textContent = item;
            listDefault.appendChild(listDefaultItem);
        }   
    );

        contentBoxDefault.appendChild(textDefault);
        contentBoxDefault.appendChild(listDefault);
        contentBoxDefault.appendChild(textDefault2);

    

        infosDevData.forEach(item => {
            let icon = document.createElement('img');
            icon.src = item.icon;
            icon.alt = item.alt;
            icon.id = item.id;
            icon.classList.add('iconExpandable');
            expandableIcons.appendChild(icon);
            icon.addEventListener('click', () => {
                showInfosDev(item);
            });
        }
        );

     
        
        content.appendChild(expandableIcons); 
        contentBox.appendChild(contentBoxDefault);
        content.appendChild(contentBox);
        return content;

    }


function showInfosDev(item) {
    let contentBox = document.querySelector('#contentBoxDev');
    contentBox.innerHTML = '';
    

    let content = document.createElement('div');
    content.classList.add('boxShowDev');
    let title = document.createElement('h2');
    title.textContent = item.name;
    let role = document.createElement('p');
    role.textContent = item.role;
    let description = document.createElement('p');
    description.textContent = item.description;
    description.innerHTML = description.textContent.replace(/\n/g, '<br>');
    let brands = document.createElement('div');
    brands.classList.add('brands');

    let imgBox = document.createElement('div');
    imgBox.classList.add('imgBox');
    let github = document.createElement('img');
    github.src = item.brands.github;
    github.alt = 'github';

    let imgBox2 = document.createElement('div');
    imgBox2.classList.add('imgBox');
    let linkedin = document.createElement('img');
    linkedin.src = item.brands.linkedin;
    linkedin.alt = 'linkedin';

    imgBox.appendChild(github);
    imgBox2.appendChild(linkedin);


    brands.appendChild(imgBox);
    brands.appendChild(imgBox2);
    content.appendChild(title);
    content.appendChild(role);
    content.appendChild(description);
    content.appendChild(brands);
    contentBox.appendChild(content);


}


export default popUpPage3;