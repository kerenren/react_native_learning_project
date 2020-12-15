import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Kelly";

  const anotherGreeting = <Text>Hello, it's you!</Text>
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      {anotherGreeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "green",
  },
  subHeaderStyle:{
      fontSize: 20
  }
});

export default ComponentsScreen;
