import DataBase from "./dataBase.js";

async function preload(){
    if (DataBase.notLoadedWords()){
        DataBase.getAllWords();
    }
    DataBase.getTopPlayers();
}
export default preload;