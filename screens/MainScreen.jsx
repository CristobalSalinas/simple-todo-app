import { View, Text, Button } from "react-native";

const MainScreen = ({navigation}) => {
  return (
    <View>
      <Text>Pantalla principal</Text>
      <Button title="Ir a la otra pantalla" onPress={()=>navigation.navigate('AddNote')}/>
    </View>
  );
};

export default MainScreen;
