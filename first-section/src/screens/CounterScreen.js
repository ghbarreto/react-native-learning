import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.increment + action.payload };
    case 'decrement':
      return { ...state, counter: state.decrement + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    increment: 0,
    decrement: 0,
    counter: 0,
  });
  return (
    <View>
      {console.log(state.counter)}
      <Text>Current Count: {state.counter} </Text>
      <Button
        onPress={() =>
          dispatch({ type: 'increment', payload: state.counter + 1 })
        }
        title="Increase Counter"
      />
      <Button
        onPress={() =>
          dispatch({ type: 'decrement', payload: state.counter - 1 })
        }
        title="Decrease Counter"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
