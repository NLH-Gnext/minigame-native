import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "OpenSansBold",
    color: "white",
    textAlign: "center",
    // borderWidth: 0,
    // borderColor: "white",
    // borderRadius: 8,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
