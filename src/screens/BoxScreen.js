import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={(styles.textStyle, styles.textOneStyle)}>Child #1</Text>
        <Text style={(styles.textStyle, styles.textTwoStyle)}>Child #2</Text>
        <Text style={(styles.textStyle, styles.textThreeStyle)}>Child #3</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.child1}></Text>
        <Text style={styles.child2}></Text>
        <Text style={styles.child3}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
  child1: {
    backgroundColor: 'lightblue',
    height: 50,
    width: 50,
  },
  child2: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 50,
    top: 50,
  },
  child3: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
