import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <Text>
      <ImageDetail
        title="Beach"
        img={require('../../assets/beach.jpg')}
        score={10}
      />
      <ImageDetail
        title="Forest"
        img={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="mountain"
        img={require('../../assets/mountain.jpg')}
        score={5}
      />
    </Text>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
