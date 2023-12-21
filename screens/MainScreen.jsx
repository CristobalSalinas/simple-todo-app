import { View, Text, Button } from "react-native";
import MonthPicker from "../components/MonthPicker";

const MainScreen = ({navigation}) => {
  return (
    <View>
      <MonthPicker />
      <Text>Pantalla principal</Text>
    </View>
  );
};

export default MainScreen;
