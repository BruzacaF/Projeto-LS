import supabase from './supabaseClient.js'; // Ajuste o caminho conforme necessário

export default class DataBase {
    // Array de objetos de todas as palavras e dicas
    static allWordsAndHints;

    // Array de objetos com nome e score
    static topPlayers;

    // Verifica se o usuário existe no banco de dados
    static async userExists(player) {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('id')
                .eq('name', player.name)
                .single();

            if (error) throw error;
            return data !== null;
        } catch (err) {
            console.error('Error checking user existence:', err.message);
            throw err;
        }
    }

    // Adiciona nome e senha do jogador no banco de dados
    static async addPlayerToDatabase(player) {
        try {
            const { error } = await supabase
                .from('players')
                .insert([{ name: player.name, password: player.password }]);

            if (error) throw error;
        } catch (err) {
            console.error('Error adding player to database:', err.message);
            throw err;
        }
    }

    // Retorna informações do jogador
    static async getPlayerInfoByName(player) {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('id, password, score')
                .eq('name', player.name)
                .single();

            if (error) throw error;
            return data;
        } catch (err) {
            console.error('Error retrieving player info:', err.message);
            throw err;
        }
    }

    // Função para obter os ids das palavras não adivinhadas pelo jogador
    static async getIdFromUnGuessedWordsByPlayerId(playerId) {
        try {
            const { data, error } = await supabase
                .from('words')
                .select('id')
                .not('id', 'in', `
                    (SELECT id_word FROM guessed_words WHERE id_player = ${playerId})
                `);

            if (error) throw error;
            return data;
        } catch (err) {
            console.error('Error retrieving unguessed words:', err.message);
            throw err;
        }
    }

    // Método para recuperar todas as palavras da tabela words
    static async getAllWords() {
        try {
            const { data, error } = await supabase
                .from('words')
                .select('id, word, hint')
                .order('id', { ascending: true });

            if (error) throw error;
            DataBase.allWordsAndHints = data;
        } catch (err) {
            console.error('Error retrieving words and hints:', err.message);
            throw err;
        }
    }

    static async loadedWords(){
        return DataBase.allWordsAndHints === undefined;
    }

    // Retorna um objeto {word: 'example', hint: 'example'}
    static getWordHint(id) {
        return DataBase.allWordsAndHints.find(word => word.id === id);
    }

    // Função para obter os 10 melhores jogadores
    static async getTopPlayers() {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('name, score')
                .order('score', { ascending: false })
                .limit(10);

            if (error) throw error;
            DataBase.topPlayers = data;
        } catch (err) {
            console.error('Error retrieving top players:', err.message);
            throw err;
        }
    }

    static async loadedTopPlayers(){
        return DataBase.topPlayers === undefined;
    }
}