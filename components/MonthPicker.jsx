import { View, StyleSheet, FlatList, Text } from "react-native";
import { monthList } from "../constants/const";
import Month from "./Month";
import { useEffect, useRef } from "react";

const styles = StyleSheet.create({
  parent:{
    backgroundColor: "#fff",
    flexDirection:"row",
    height:65,
  },  
  monthContainer: {
    flex:0.95,
  },
  flatlistContainer: {
    height: 50,
    textAlign: "left",
  },
  styledContainer:{
    backgroundColor:'black',
      borderTopLeftRadius:15,
      flex:0.05,

  }
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
    <View style={styles.parent}>
      <View style={styles.monthContainer}>
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
      <View style={styles.styledContainer}/>
    </View>

  );
};
