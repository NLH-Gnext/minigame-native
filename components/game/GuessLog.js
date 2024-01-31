import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const GuessLog = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLog;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "OpenSans",
  },
});
