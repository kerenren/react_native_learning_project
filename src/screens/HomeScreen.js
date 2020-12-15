import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color demo"
      />
      <Button
        onPress={() => navigation.navigate("Adjuster")}
        title="Go to Adjusting Color demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
