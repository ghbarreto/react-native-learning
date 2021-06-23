import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const lol = [
    { name: 'oi', age: 34 },
    { name: 'oi3', age: 34 },
    { name: 'oi2', age: 34 },
    { name: 'oi4', age: 34 },
    { name: 'oi5', age: 34 },
    { name: 'oi6', age: 34 },
    { name: 'oi7', age: 34 },
    { name: 'oi8', age: 34 },
    { name: 'oi9', age: 34 },
    { name: 'oi10', age: 34 },
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={lol}
      List
      Screen
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
