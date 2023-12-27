import MainScreen from "./screens/MainScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import supabase from "./lib/supabase";
import Constants from "expo-constants";


const Stack = createNativeStackNavigator();

export default function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const fetchTodos = async () =>{
      try {
        const {data, error} = await supabase.from('todos').select('*');

        if (error) throw error;

        setTodos(data);

      } catch (error) {
        console.error(error);
      }
    };

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
