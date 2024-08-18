import infosDev from './InfosAboutPage';
import page1 from '../templates/templatesForPopUp/page1.js';
import page2 from '../templates/templatesForPopUp/page2.js';
import page3 from '../templates/templatesForPopUp/page3.js';

// const page1Content = page1;

const popUpInitText = {
    1: {
        title: 'Regras do Jogo',
        content: page1,
        teste: 'teste1'
    },

    2: {
        title: 'Interface do Usuário',
        content: page2,
        teste: 'teste2'
    },

    3: {
        title: 'Sobre os desenvolvedores',
        content: page3,
        teste: 'teste3'
    }
}



export default popUpInitText;