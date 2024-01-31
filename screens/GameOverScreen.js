import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.jpg")} />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needs <Text style={styles.highlight}>X</Text> rounds to guess
        the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "OpenSans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "OpenSansBold",
  },
});
