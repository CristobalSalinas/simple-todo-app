import { View, Text } from "react-native";
import MonthPicker from "../components/MonthPicker";
import { useMemo, useState, useEffect } from "react";

const MainScreen = () => {
  const [date,setDate] = useState(null);

  useEffect(()=>{
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    setDate({
      day,
      month,
      year
    })
  },[]);

  const selectedMonth = (month) =>{
    setDate({...date,month:month});
  };

  const monthDays = useMemo(()=>{
    const monthTotalDays = new Date(date?.year, date?.month + 1, 0).getDate();
    const firstDayOfTheMonth = new Date(date?.year, date?.month, 1);

    console.log(firstDayOfTheMonth);

    for (let i = 1; i <= monthTotalDays; i++) {
      console.log(firstDayOfTheMonth + 1 - 1);
    }

    return monthTotalDays;
  },[date]);

  return (
    <View>
      <MonthPicker monthSelected={date?.month} handleChange={selectedMonth}/>
      <Text>monthDays: {monthDays}</Text>
    </View>
  );
};

export default MainScreen;
