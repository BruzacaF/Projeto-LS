import supabase from './supabaseClient.js'; // Ajuste o caminho conforme necessário

export default class DataBase {
    // Array de objetos de todas as palavras e dicas
    static allWordsAndHints;

    // Array de objetos com nome e score
    static topPlayers;

    // Verifica se o usuário existe no banco de dados
    static async userExists(userName) {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('id')
                .eq('name', userName)
                .single();

            if (data !== null){
                return data.id
            }
            return null;
        } catch (err) {
            console.error('Error checking user existence:', err.message);
            throw err;
        }
    }

    static async authenticatePassword(id, password) {
        try {
            // Busca a senha do usuário pelo ID
            const { data, error } = await supabase
                .from('players')
                .select('password')
                .eq('id', id)
                .single();

            if (error) {
                throw error;
            }

            // Verifica se a senha passada é igual à senha no banco de dados
            if (data.password === password) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error('Error authenticating password:', err.message);
            throw err;
        }
    }

    // Adiciona nome e senha do jogador no banco de dados
    static async addPlayerToDatabase(userName, userPassword) {
        try {
            const { error } = await supabase
                .from('players')
                .insert([{ name: userName, password: userPassword }]);

            if (error) throw error;
        } catch (err) {
            console.error('Error adding player to database:', err.message);
            throw err;
        }
    }

    // Retorna o score do jogador
    static async getScoreById(id) {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('score')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data.score;
        } catch (err) {
            console.error('Error retrieving score', err.message);
            throw err;
        }
    }

    // Método para obter os ids das palavras adivinhadas
    static async getGuessedWordIdsByPlayerId(playerId) {
        try {
            const { data, error } = await supabase
                .from('guessed_words')
                .select('id_word')
                .eq('id_player', playerId);
    
            if (error) throw error;
    
            // Extrai apenas os IDs das palavras adivinhadas
            const guessedWordIds = data.map(word => word.id_word);
    
            return guessedWordIds;
        } catch (err) {
            console.error('Error retrieving guessed word IDs:', err.message);
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

    static async notLoadedWords(){
        return DataBase.allWordsAndHints === null;
    }

    // Retorna um objeto {word: 'example', hint: 'example'}
    static getWordHintById(id) {
        return DataBase.allWordsAndHints.find(word => word.id === id);
    }

    // Função para obter os 10 melhores jogadores
    static async getTopPlayers() {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('name, score')
                .order('score', { ascending: false })
                .limit(5);

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