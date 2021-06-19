import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const ColorCounter = ({ title, color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${title}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${title}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
