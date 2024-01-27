import { Text, StyleSheet, View } from "react-native";
const GamingScreen = () => {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
        <View>Log Round</View>
      </View>
    </View>
  );
};

export default GamingScreen;

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    padding : 1,
  }
})