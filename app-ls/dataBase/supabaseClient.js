import { createClient } from '@supabase/supabase-js';
import '../env.js';


// Variáveis de ambiente para armazenar a URL e a chave
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('supabaseUrl and supabaseKey are required.');
}

// Cria o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
