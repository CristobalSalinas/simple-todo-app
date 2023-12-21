import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    monthCard:{
        paddingHorizontal:6
    },
    montText:{
        fontSize:24
    }
});

export default Month = ({title}) =>{
    return(
        <View style={styles.monthCard}>
            <Text style={styles.montText}>{title}</Text>
        </View>
    );
};