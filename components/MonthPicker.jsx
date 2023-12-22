import { View, StyleSheet, FlatList, Text } from "react-native";
import { monthList } from "../constants/const";
import Month from "./Month";
import { useEffect, useRef } from "react";

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
  const flatListRef = useRef(null);

  const changeMonth = (monthNum) =>{
    scrollFlatListToIndex(monthNum);
    handleChange(monthNum);
  };

  const scrollFlatListToIndex = (index) =>{
    flatListRef.current?.scrollToIndex({ index: index, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          ref={flatListRef}
          horizontal={true}
          data={monthList}
          renderItem={({ item }) => <Month title={item.title} selected={monthSelected === item.monthNum } handleChange={changeMonth} monthNumber={item.monthNum}/>}
          keyExtractor={(item) => item.monthNum}
          initialScrollIndex={monthSelected}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              scrollFlatListToIndex(info.index);
            });
          }}
        />
      </View>
    </View>
  );
};
