import MainScreen from "./screens/MainScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import AppBar from "./components/AppBar";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
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
