import DataBase from "./dataBase.js";

async function preload(){
    if ( DataBase.allWordsAndHints === undefined){
        DataBase.getAllWords();
    }
    if (DataBase.topPlayers === undefined){
        DataBase.getTopPlayers();
    }
}

export default preload;