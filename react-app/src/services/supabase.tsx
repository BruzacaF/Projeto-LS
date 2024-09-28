import { createClient, SupabaseClient } from '@supabase/supabase-js';

const API_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const API_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;

// Cria o cliente Supabase com tipagem explícita
const supabase: SupabaseClient = createClient(API_URL, API_KEY);


export default class DataBase {

    // Array de objetos com nome e score
    static topPlayers: Array<{ name: string; score: number }>;

    // Verifica se o usuário existe no banco de dados
    static async userExists(userName: string): Promise<number | null> {
        try {
            const { data, error } = await supabase
                .from('players')
                .select('id')
                .eq('name', userName)
                .single();

            if (error) {
                throw error;
            }

            if (data !== null) {
                return data.id;
            }
            return null;
        } catch (err: any) {
            console.error('Error checking user existence:', err.message);
            return null;
        }
    }

    static async authenticate(id: number, password: string): Promise<boolean | undefined> {
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
        } catch (err: any) {
            console.error('Error authenticating password:', err.message);
        }
    }

    // Adiciona nome e senha do jogador no banco de dados
    static async addPlayerToDatabase(userName: string, userPassword: string): Promise<void> {
        try {
            const { error } = await supabase
                .from('players')
                .insert([{ name: userName, password: userPassword }]);

            if (error) throw error;
        } catch (err: any) {
            console.error('Error adding player to database:', err.message);
        }
    }
}