import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState } from "react";

function generateRamdomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRamdomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

const GamingScreen = ({ userNumber }) => {
  const initialGuess = generateRamdomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <NumberContainer>{currentGuess}</NumberContainer>
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
    flex: 1,
    padding: 24,
  },
});
