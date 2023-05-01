import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const MyButton = ({type, label, onPress}) => {

    if ("1" === type) {
        return (
        
            <TouchableOpacity onPress={onPress} style={styles.button1}>
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    } else if ("2" === type) {
        return (
        
            <TouchableOpacity onPress={onPress} style={styles.button2}>
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    button1: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: "5px",
        width: 200
    },
    button2: {
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: "5px",
        width: 200
    }
  });

export default MyButton;