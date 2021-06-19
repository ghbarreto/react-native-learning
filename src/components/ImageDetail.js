import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, img, score }) => {
  return (
    <Text>
      <Image source={img} />
      <Text>{title}</Text>
      <Text>Image score: {score}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
