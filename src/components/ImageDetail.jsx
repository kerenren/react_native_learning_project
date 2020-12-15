import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = ({ title, imageToShow }) => {

  return (
    <View>
      <Image source={imageToShow} />
      <Text>Image Detail about {title}</Text>
    </View>
  );
};

export default ImageDetail;
