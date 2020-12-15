import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friends #1", age: 20 },
    { name: "friends #2", age: 22 },
    { name: "friends #3", age: 24 },
    { name: "friends #4", age: 20 },
    { name: "friends #5", age: 23 },
    { name: "friends #6", age: 54 },
    { name: "friends #7", age: 42 },
    { name: "friends #8", age: 25 },
    { name: "friends #9", age: 25 },
  ];
  return (
    <FlatList
      horizontal={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 10,
  },
});

export default ListScreen;
