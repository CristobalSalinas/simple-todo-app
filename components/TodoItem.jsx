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

export default TodoItem = ({checked = false, id, title, description, changeStatus}) =>{

    const changeStatusChecked = () =>{
        changeStatus(id);
    }

    return(
        <TouchableOpacity onPress={changeStatusChecked}>
            <View style={styles.container}>
                <View style={styles.check}>
                    {checked && <AntDesign name="check" size={15} color="black"/>}
                </View>
                <View style={styles.info}>
                    <StyledText medium bold line={checked ? true : undefined} green={checked ? true : undefined}>{title}</StyledText>
                    <StyledText line={checked ? true : undefined} green={checked ? true : undefined}>{description}</StyledText>
                </View>
            </View>
        </TouchableOpacity>
    );
};