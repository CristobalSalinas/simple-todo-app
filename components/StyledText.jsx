import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        fontSize:14,
        color:'white',
    },
    bold:{
        fontWeight:'bold'
    },
    medium:{
        fontSize:22,
    },
    big:{
        fontSize:24,
    },
    white:{
        color:'white',
    },
    black:{
        color:'black',
    },
    green:{
        color:'#06781d',
    },
    line:{
        textDecorationLine:"line-through",
    }
});

const StyledText = ({children,bold,medium,big,white,black,line,green}) =>{

    const textStyles = [
        styles.text,
        bold && styles.bold,
        medium && styles.medium,
        big && styles.big,
        white && styles.white,
        black && styles.black,
        line && styles.line,
        green && styles.green,
    ];

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    );
};

export default StyledText;