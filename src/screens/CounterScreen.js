import React, { useReducer } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increse":
      return { ...state, count: state.count + action.payload };

    case "decrease":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text>Current counter: {state.count}</Text>
      <Button
        onPress={() => dispatch({ type: "increse", payload: 1 })}
        title="Increase counter"
      />
      <Button
        onPress={() => dispatch({ type: "decrease", payload: -1 })}
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
