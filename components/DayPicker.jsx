import { View, Text, FlatList, StyleSheet } from "react-native";
import Day from "./Day";
import { useEffect, useRef } from "react";

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:20,
  }
});

export default DayPicker = ({ days, selectedDay, handleChange }) => {

  const flatListRef = useRef(null);

  const changeDay = (dayNum) =>{
    handleChange(dayNum);
  };

  useEffect(()=>{
    if(selectedDay != undefined){
      scrollToIndex(selectedDay -1);
    }
  },[selectedDay]);

  const scrollToIndex = (index) =>{
    flatListRef.current?.scrollToIndex({ index: index, animated: true });
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={days}
        horizontal={true}
        renderItem={({ item }) => (
          <Day
            day={item.day}
            number={item.num}
            selected={selectedDay === item.num}
            handleChange={changeDay}
          />
        )}
        keyExtractor={(item) => item.num}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            scrollToIndex(info.index);
          });
        }}
      />
    </View>
  );
};
