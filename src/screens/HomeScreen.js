import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      ></Button>
      <Button
        title="Navigate to Image"
        onPress={() => navigation.navigate('Image')}
      ></Button>
      <Button
        title="Navigate to Counter"
        onPress={() => navigation.navigate('Counter')}
      ></Button>

      <Button
        title="Navigate to Color"
        onPress={() => navigation.navigate('Color')}
      ></Button>
      <Button
        title="Navigate to Square"
        onPress={() => navigation.navigate('Square')}
      ></Button>
      <Button
        title="Text Demo"
        onPress={() => navigation.navigate('Text')}
      ></Button>
      <Button
        title="Box Demo"
        onPress={() => navigation.navigate('Box')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
