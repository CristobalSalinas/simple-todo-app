import MainScreen from "./screens/MainScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import AppBar from "./components/AppBar";
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { process } from "./env";
import { useEffect, useState } from "react";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY);
const Stack = createNativeStackNavigator();

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const fetchTodos = async () =>{
      try {
        const { data, error } = await supabase.from('todos').select('*');

        if(error){
          throw error;
        }
        
        setTodos(data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchTodos();
  },[]);

  console.log(todos);

  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <NavigationContainer>
        <AppBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MainScreen}/>
          <Stack.Screen name="AddNote" component={AddNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
