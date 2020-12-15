import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image screen component</Text>
      <ImageDetail title = "forest" imageToShow={require('../../assets/forest.jpg')}/>
      <ImageDetail title="beach"  imageToShow={require('../../assets/beach.jpg')}/>
      <ImageDetail title="mountain"  imageToShow={require('../../assets/mountain.jpg')}/>
    </View>
  );
};

export default ImageScreen;
