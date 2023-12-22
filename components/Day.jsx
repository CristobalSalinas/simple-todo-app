import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

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

export default Day = ({number,day, selected, handleChange}) => {

  const changeDay = () =>{
    handleChange(number);
  };

  return (
    <TouchableOpacity onPress={changeDay}>
      <View style={[styles.dayContainer,selected && {backgroundColor:'black'}]}>
        <Text style={[styles.textColor,selected && {color:'white'}]}>{day}</Text>
        <Text style={[styles.textColor,selected && {color:'white'}]}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};
