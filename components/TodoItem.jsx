import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import { AntDesign } from "@expo/vector-icons";


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
        marginBottom:30
    },  
    check:{
        borderRadius:50,
        width:20,
        height:20,
        marginRight:20,
        marginTop:6,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"center",
    },
    info:{
        flex:2
    },
    date:{
        flex:1,
    }
});

export default TodoItem = ({id, title, description, completed, updateTodo}) =>{

    const changeTodoStatus = () =>{
        updateTodo(id,!completed);
    }

    return(
        <TouchableOpacity onPress={changeTodoStatus}>
            <View style={styles.container}>
                <View style={styles.check}>
                    {completed && <AntDesign name="check" size={15} color="black"/>}
                </View>
                <View style={styles.info}>
                    <StyledText medium bold line={completed ? true : undefined} green={completed ? true : undefined}>{title}</StyledText>
                    <StyledText line={completed ? true : undefined} green={completed ? true : undefined}>{description}</StyledText>
                </View>
            </View>
        </TouchableOpacity>
    );
};