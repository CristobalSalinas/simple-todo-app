import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },  
    check:{
        borderRadius:50,
        width:30,
        height:30,
        backgroundColor:"white",
        marginRight:20
    },
    info:{
        flex:2
    },
    date:{
        flex:1,
    }
});

export default TodoItem = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.check}/>
            <View style={styles.info}>
                <StyledText medium bold>Terminar este proyecto</StyledText>
                <StyledText>Tengo que terminar esto</StyledText>
            </View>
            <StyledText style={styles.date}>9:30 PM</StyledText>
        </View>
    );
};