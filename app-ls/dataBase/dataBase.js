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
        }
    }

    static async loadedTopPlayers(){
        return DataBase.topPlayers === undefined;
    }

    static async updatePlayerScore(playerId, newScore) {
        try {
            // Atualiza o score do jogador
            const { error } = await supabase
                .from('players')
                .update({ score: newScore })
                .eq('id', playerId);
    
            if (error) throw error;
    
            // Se a atualização foi bem-sucedida, retorna uma mensagem de sucesso
            return { success: true, message: 'Score updated successfully' };
    
        } catch (err) {
            console.error('Error updating score:', err.message);
        }
    }

    static async addGuessedWord(playerId, wordId) {
        try {
            // Adiciona o ID da palavra adivinhada na tabela guessed_words
            const { error } = await supabase
                .from('guessed_words')
                .insert([{ id_player: playerId, id_word: wordId }]);
    
            if (error) throw error;
    
            // Se a inserção foi bem-sucedida, retorna uma mensagem de sucesso
            return { success: true, message: 'Guessed word ID added successfully' };
    
        } catch (err) {
            console.error('Error adding guessed word ID:', err.message);
        }
    }
    
}