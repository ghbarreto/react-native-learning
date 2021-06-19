import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'gabriel';
  return (
    <View>
      <Text style={styles.textStyle}>Components props d rendered</Text>
      <Text style={styles.secondStyle}>Hello my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstStyle: {
    color: 'red',
    fontSize: 45,
  },
  secondStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
