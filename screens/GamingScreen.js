import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";
const GamingScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
        {/* <View>Log Round</View> */}
      </View>
    </View>
  );
};

export default GamingScreen;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 24,
  },
});
