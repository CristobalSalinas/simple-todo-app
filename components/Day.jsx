import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  dayContainer:{
    display:"flex",
    flexDirection:"column",
    width:40,
    borderRadius:25,
    paddingVertical:10,
    gap:15,
    marginHorizontal:5,
    alignContent:"center",
    alignItems:"center",
  },
});

export default Day = ({number,day, selected}) => {
  return (
    <View style={[styles.dayContainer,selected && {backgroundColor:'black'}]}>
      <Text style={[styles.textColor,selected && {color:'white'}]}>{day}</Text>
      <Text style={[styles.textColor,selected && {color:'white'}]}>{number}</Text>
    </View>
  );
};
