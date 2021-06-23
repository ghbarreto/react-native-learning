import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [a, b] = useState('');

  const validate = () => {
    return a.length < 5 ? (
      <Text>Password must be bigger than 5 characters</Text>
    ) : (
      <Text></Text>
    );
  };

  return (
    <View>
      <TextInput onChangeText={e => b(e)} style={styles.input} />
      <Text>My name is: {a}</Text>
      {validate()}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
