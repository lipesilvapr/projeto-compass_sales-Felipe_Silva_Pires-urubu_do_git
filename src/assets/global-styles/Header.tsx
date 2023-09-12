import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";

interface HeaderTitle {
    title: string;
    onPress: any;
}

export function Header({title, onPress}: HeaderTitle) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
                <Image source={require('../images/go-back-arrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.textContainer}>{title}</Text>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        backgroundColor: Colors.background,
      },
    noImageContainer: {
        opacity: 0,
    },
    imageContainer: {
        marginLeft: 8,
        width: 24,
    },
    textContainer: {
        marginTop: 18,
        fontFamily: Fonts.Bold,
        marginLeft: 14,
        color: 'black',
        fontSize: 34,
        marginBottom: 54,
    },
});