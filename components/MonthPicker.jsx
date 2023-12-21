import { View, StyleSheet, FlatList, Text } from "react-native";
import { monthList } from "../constants/const";
import Month from "./Month";

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  flatlistContainer: {
    height: 50,
    textAlign: "left",
  },
});

export default MonthPicker = ({monthSelected, handleChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          horizontal={true}
          data={monthList}
          renderItem={({ item }) => <Month title={item.title} selected={monthSelected === item.monthNum } handleChange={handleChange} monthNumber={item.monthNum}/>}
          keyExtractor={(item) => item.monthNum}
        />
      </View>
    </View>
  );
};
