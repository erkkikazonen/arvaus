import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, TextInput, Button,  View, Alert } from 'react-native';

export default function App() {

  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState(generate());
  const [count, setCount] = useState(0);

  function generate() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleRoll = () => {
    const guess = parseInt(number);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      Alert.alert("Invalid Input", "Please enter a number between 1 and 100")
      return;
    }

    setCount(count + 1);

    if (guess === answer) {
      Alert.alert(`You guessed the number in ${count} guesses.`);
      setAnswer(generate());
      setCount(0);

    } else if (guess < answer) {
      Alert.alert("Your guess is too low");
    } else {
      Alert.alert("Your guess is too high")
    }

    setNumber("");

  }

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        style={{ width: 50, borderColor: "gray", borderWidth: 1, margin: 10 }}
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <View style={styles.button}>
        <Button title="MAKE GUESS" color="white" onPress={handleRoll} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: "space-around",
    backgroundColor: "blue"
  }
});
