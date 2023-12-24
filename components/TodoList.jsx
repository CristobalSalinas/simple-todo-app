import { StyleSheet, View, Text } from "react-native";
import StyledText from "./StyledText";
import TodoItem from "./TodoItem";

const styles = StyleSheet.create({
  list:{
    backgroundColor:"black",
    flex:1,
    borderTopLeftRadius:45,
    padding:30,
  }
});

export default TodoList = () => {
  return (
    <View style={styles.list}>
      <TodoItem />
    </View>
  );
};
