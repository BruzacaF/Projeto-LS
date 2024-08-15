import { createClient } from '@supabase/supabase-js';

// Variáveis de ambiente para armazenar a URL e a chave
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('supabaseUrl and supabaseKey are required.');
}

// Cria o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;