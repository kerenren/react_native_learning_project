import React from "react";
import { Text, Button, View } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  return (
    <View>
      <Text>Adjust the {color} color</Text>
      <Button title={`Increse ${color} color`} onPress={()=>{onIncrease()}} />
      <Button title={`Reduce ${color} color`} onPress={()=>{onDecrease()}}/>
    </View>
  );
};

export default ColorCounter;
