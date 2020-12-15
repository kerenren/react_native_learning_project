import React from "react";
import {  Button, View } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  return (
    <View>
      <Button title={`Increse ${color} color`} onPress={()=>{onIncrease()}} />
      <Button title={`Reduce ${color} color`} onPress={()=>{onDecrease()}}/>
    </View>
  );
};

export default ColorCounter;
