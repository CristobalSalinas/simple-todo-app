import { View, Text, FlatList, StyleSheet } from "react-native";
import Day from "./Day";

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:20,
  }
});

export default DayPicker = ({ days, selectedDay, handleChange }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        horizontal={true}
        renderItem={({ item }) => (
          <Day
            day={item.day}
            number={item.num}
            selected={selectedDay === item.num}
            handleChange={handleChange}
          />
        )}
        keyExtractor={(item) => item.num}
      />
    </View>
  );
};
