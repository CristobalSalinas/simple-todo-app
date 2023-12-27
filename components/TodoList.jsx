import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native";
import TodoItem from "./TodoItem";
import { useCallback, useEffect, useState } from "react";
import supabase from '../lib/supabase';

const styles = StyleSheet.create({
  list:{
    backgroundColor:"black",
    flex:1,
    borderTopLeftRadius:45,
    padding:30,
  }
});

export default TodoList = ({date}) => {
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(false);

  const dateToFilter = `${date?.year}-${date?.month + 1}-${date?.day}`;

  const fetchTodos = async () =>{
    setLoading(true);
    try {
      const {data,error} = await supabase.from('todos').select().eq('date',dateToFilter);

      if(error) throw error;

      console.log('data que viene',data);

      setTodos(data);

    } catch (error) {
      console.error(error);
      setTodos([]);
    }finally{
      setLoading(false);
    }
  };

  const updateTodo = async (id,completedStatus) =>{
    try {

      const updatedTodos = todos.map(todo=>(
        todo.id === id ? {...todo, completed : completedStatus} : todo
      ));

      setTodos(updatedTodos);

      const { error } = await supabase
        .from('todos')
        .update({ completed: completedStatus })
        .eq('id', id);

      if(error) throw error;

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    if(date?.year !== undefined && date?.day !== undefined){
      fetchTodos();
    }
  },[date]);

  return (
    <View style={styles.list}>
      {loading ? <ActivityIndicator size="large" color="#ffffff" /> : <FlatList 
        data={todos}
        renderItem={({item})=><TodoItem id={item.id} title={item.title} description={item.description} completed={item.completed} updateTodo={updateTodo}/>}
        keyExtractor={(item)=>item.id}
        />}
    </View>
  );
};
