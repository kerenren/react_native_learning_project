import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current counter: {counter}</Text>
      <Button
        onPress={() => setCounter(counter + 1)}
        title="Increase counter"
      />
      <Button
        onPress={() => setCounter(counter - 1)}
        title="Decrease counter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
