import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Fonts } from "../assets/global-styles/Fonts";

interface placeString {
    name: string;
}
export function Input({name}: placeString) {
    return(
        <View style={styles.inputs}>
            <TextInput style={styles.placeholder} placeholder={name}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    inputs: {
        marginVertical: 8,
        justifyContent: 'center',
        elevation: 15,
        backgroundColor: 'white',
        height: 64,
        marginHorizontal: 16,
        borderRadius: 4,
      },
      placeholder: {
        marginLeft: 20,
        fontSize: 14,
        fontFamily: Fonts.Medium,
      },
});