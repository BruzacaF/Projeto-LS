import { none } from './constants.js';
import infosDev from './InfosAboutPage';

const infosDev = infosDev;
infosDevNames = Object.keys(infosDev.name);
infosDevRoles = Object.keys(infosDev.role);
infosDevDescriptions = Object.keys(infosDev.description);
infosDevIcons = Object.keys(infosDev.icon);



const popUpInitText = {
    page1: {
        title: 'Bem-Vindo ao jogo da forca(sem forca)',
        subtitle: 'Jogo desenvolvido para a disciplina de Linguagem de Script \n do curso de Sistemas para Internet do IFPB - Campus João Pessoa',
        contentTitle: 'O que é o jogo da forca(sem forca)?',
        contentText: 'O jogo da forca(sem forca) é um jogo de adivinhação de palavras, \n onde o jogador deve tentar adivinhar a palavra oculta, tendo como dica o número de letras da palavra e o tema da palavra. \n O jogador tem 6 chances de errar, caso erre mais que 6 vezes, o jogo acaba.(Como não temos forca, nenhum boneco sofrerá com seus erros)',
        nextPage: 'Próxima',

    },

    page2: {
        title: 'Quem desenvolveu o jogo? e por quê?',
        subtitle: `O jogo foi desenvolvido por ${infosDevNames}  , \n estudantes do curso de Sistemas para Internet do IFPB - Campus João Pessoa, \n como forma de avaliação da disciplina de Linguagem de Script. \n O jogo foi desenvolvido com o intuito de aplicar os conhecimentos adquiridos na disciplina e também para ser um projeto de portfólio(Quem sabe né?).`,
        contentTitle: 'Por que o jogo foi desenvolvido?',
        contentText: 'O jogo foi desenvolvido com o intuito de aplicar os conhecimentos adquiridos na disciplina de Linguagem de Script, \n e testar as habilidades de desenvolvimento de interface, lógica de programação e utilização de banco de dados  dos desenvolvedores, assim como a capacidade de trabalho em equipe e organização.',
        contentDevsImg: infosDevIcons,
        nextPage: 'Proxima',
    
    } ,

    page3: {
        title: 'Como o jogo foi desenvolvido?',
        subtitle: 'O jogo foi desenvolvido utilizando as tecnologias HTML, CSS e JavaScript,\n O jogo foi desenvolvido com o auxílio de um banco de dados para armazenar as palavras e temas do jogo, \n e também para armazenar as informações dos jogadores.',
        contentTitle: 'Quais as tecnologias utilizadas?',
        contentText: 'As tecnologias utilizadas foram HTML, CSS, JavaScript para o desenvolvimento da interface do jogo, \n e JavaScript e Supabase para o desenvolvimento da lógica do jogo e do banco de dados.',
        nextPage: 'Proxima',
        play: none,
    } ,

    page4: {
        title: 'Quem são os desenvolvedores?',
        subtitle: `Os desenvolvedores do jogo são ${infosDevNames}, \n e cada um tem uma função específica no desenvolvimento do jogo.`,
        contentTitle: 'Quais as funções dos desenvolvedores?',
        contentText: infosDev,
        nextPage: 'Proxima',
       
    } ,

    page5: {
        title: 'Sem enrolação, vamos jogar!',
        subtitle: 'Esperamos que você se divirta jogando o jogo da forca(sem forca), \n e que você consiga adivinhar todas as palavras(Vai que você é um gênio e aparece no nosso ranking).',
        contentTitle: 'Boa sorte!',
        contentText: 'Clique no botão abaixo para começar a jogar.',
        nextPage: 'Jogar',
    } ,

};








export default popUpInitText;