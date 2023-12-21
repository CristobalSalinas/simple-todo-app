import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const styles = StyleSheet.create({
  appBar: {
    height: 55,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
});

export default AppBar = () => {
  const navigation = useNavigation();
  const [isAddingNote,setIsAddingNote] = useState(false);

  const navigateToScreen = () => {
    const screenState = !isAddingNote;
    setIsAddingNote(screenState);
    if(screenState){
      navigation.navigate('AddNote');
    }else{
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.appBar}>
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToScreen}>
          { isAddingNote ? <AntDesign name="down" size={24} color="black" /> : <AntDesign name="left" size={24} color="black" /> }
        </TouchableOpacity>
        <FontAwesome name="user-circle" size={35} color="black" />
      </View>
    </View>
  );
};
