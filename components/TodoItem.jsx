import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
        marginBottom:30
    },  
    check:{
        borderRadius:50,
        width:30,
        height:30,
        marginRight:20
    },
    info:{
        flex:2
    },
    date:{
        flex:1,
    }
});

export default TodoItem = ({checked = false, title, description, date}) =>{
    return(
        <View style={styles.container}>
            <View style={[styles.check, {backgroundColor : checked ? "green" : "white"}]}/>
            <View style={styles.info}>
                <StyledText medium bold>{title}</StyledText>
                <StyledText>{description}</StyledText>
            </View>
            <StyledText style={styles.date}>{date}</StyledText>
        </View>
    );
};