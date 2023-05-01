import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import MyButton from './components/MyButton';

export default function App() {

  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <MyButton type="1" label="Press here!!" onPress={increment}></MyButton>
      <MyButton type="2" label="Set to zero" onPress={reset}></MyButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
