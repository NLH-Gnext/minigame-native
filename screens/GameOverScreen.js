import { StyleSheet, Text, View } from "react-native"

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Game Over Screen</Text>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container :{
    paddingTop : 50,
  }
})