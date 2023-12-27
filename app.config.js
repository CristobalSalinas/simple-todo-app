import * as dotenv from 'dotenv';

dotenv.config();

export default ({config}) => {
    return {
        ...config,
        slug:'simpletodo',
        name:'SimpleTodo',
        extra:{
            ...config.extra,
            supabaseUrl:process.env.SUPABASE_URL,
            supabasePublicKey:process.env.SUPABASE_PUBLIC_KEY,
        }
    };
};