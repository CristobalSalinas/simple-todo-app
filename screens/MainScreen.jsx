import { View, Text } from "react-native";
import MonthPicker from "../components/MonthPicker";
import { useMemo, useState, useEffect } from "react";
import { weekDays } from "../constants/const";
import DayPicker from "../components/DayPicker";
import TodoList from "../components/TodoList";

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
    setDate({...date,month:month,day:1});
  };

  const selectDay = (day) =>{
    setDate({...date,day:day});
  }

  const monthDays = useMemo(()=>{
    const monthTotalDays = new Date(date?.year, date?.month + 1, 0).getDate();

    const days = [];

    for (let i = 1; i <= monthTotalDays; i++) {
      const dateByDay = new Date(date?.year, date?.month, i);
      const weekDay = weekDays[dateByDay.getDay()];
      const dayNumber = i;
      days.push({num:dayNumber,day:weekDay})
    }

    return days;
  },[date]);

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <MonthPicker monthSelected={date?.month} handleChange={selectedMonth}/>
      <DayPicker days={monthDays} selectedDay={date?.day} handleChange={selectDay}/>
      <TodoList />
    </View>
  );
};

export default MainScreen;
