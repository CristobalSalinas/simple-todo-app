import { View } from "react-native";
import MonthPicker from "../components/MonthPicker";
import { useState } from "react";

const MainScreen = () => {
  const [monthSelected,setMonthSelected] = useState(0); 

  const selectedMonth = (month) =>{
    setMonthSelected(month);
  };

  return (
    <View>
      <MonthPicker monthSelected={monthSelected} handleChange={selectedMonth}/>
    </View>
  );
};

export default MainScreen;
