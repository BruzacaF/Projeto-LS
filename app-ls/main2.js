import DataBase from './dataBase/dataBase.js';
const db = new DataBase();

document.getElementById('loadTopPlayersButton').addEventListener('click', () => {
    console.log('passou');
    try {
        const topPlayers = db.getTopPlayers(); // Supondo que já seja um objeto ou array
        console.log(topPlayers);
        
        const leaderboard = document.getElementById('#leaderboard');
        leaderboard.innerHTML = 'ggjgjgjgjjgjgjg'; // Limpa a lista atual
        
    } catch (err) {
        console.error('Failed to fetch top players:', err);
    }
});