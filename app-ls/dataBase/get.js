import DataBase from './dataBase.js'; // Ajuste o caminho conforme necessário

async function showTopPlayers() {
    const db = new DataBase();

    try {
        const topPlayers = await db.getTopPlayers();
        console.log('Top Players:', topPlayers);
        // Aqui você pode fazer o que quiser com os dados dos top players
    } catch (error) {
        console.error('Failed to fetch top players:', error.message);
    }
}

showTopPlayers();