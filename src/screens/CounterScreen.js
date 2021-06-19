import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current Count: {counter}</Text>

      <Button onPress={() => setCounter(counter + 1)} title="Add Counter" />
      <Button
        onPress={() => setCounter(counter - 1)}
        title="Decrease Counter"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
