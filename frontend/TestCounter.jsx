import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import MyButton from './components/MyButton';




const TestCounter = () => {

    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const reset = () => setCount(0);

    return(
        <View>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <MyButton type="1" label="Press here!!" onPress={increment}></MyButton>
            <MyButton type="2" label="Set to zero" onPress={reset}></MyButton>
        </View>
    );

}

export default TestCounter;


const styles = StyleSheet.create({
    countContainer: {
        alignItems: 'center',
        padding: 10,
      },
})

