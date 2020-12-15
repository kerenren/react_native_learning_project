import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("stranger");
  return (
    <View>
      <Text>Text screen </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name === "stranger" ? null : name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
        placeholder="what's your name?"
      />
      <Text>Hi there {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: "green",
    borderWidth: 1,
    height: 150,
    borderRadius: 10,
  },
});

export default TextScreen;
