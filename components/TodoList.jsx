import { StyleSheet, View, Text, FlatList } from "react-native";
import TodoItem from "./TodoItem";
import todos from '../data/todos';
import { useState } from "react";

const styles = StyleSheet.create({
  list:{
    backgroundColor:"black",
    flex:1,
    borderTopLeftRadius:45,
    padding:30,
  }
});

export default TodoList = () => {
  const [todosList,setTodosList] = useState(todos);

  const changeTodoStatus = (id) =>{
    let todo = todosList.find(x=>x.id === id);
    todo.checked = !todo.checked;
    setTodosList([
      ...todosList,
      todo,
    ]);
  }

  return (
    <View style={styles.list}>
      <FlatList 
        data={todos}
        renderItem={({item})=><TodoItem id={item.id} title={item.title} description={item.description} checked={item.checked} changeStatus={changeTodoStatus}/>}
        keyExtractor={(item)=>item.id}
        />
    </View>
  );
};
