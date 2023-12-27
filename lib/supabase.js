import Constants from "expo-constants";
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const baseUrl = Constants.expoConfig.extra.supabaseUrl;
const anonKey = Constants.expoConfig.extra.supabasePublicKey;

const supabase = createClient(baseUrl, anonKey);

export default supabase;
