import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  monthCard: {
    paddingHorizontal: 6,
  },
  montText: {
    fontSize: 34,
  },
  monthTextNotSelected: {
    color: "#c4c4c4",
  },
  monthTextSelected: {
    color: "black",
  },
});

export default Month = ({ title, monthNumber, selected, handleChange }) => {
  const textStyle = [
    styles.montText,
    selected ? styles.monthTextSelected : styles.monthTextNotSelected,
  ];

  const onChangeMonth = () => {
    handleChange(monthNumber);
  };

  return (
    <TouchableOpacity onPress={onChangeMonth}>
      <View style={styles.monthCard}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
