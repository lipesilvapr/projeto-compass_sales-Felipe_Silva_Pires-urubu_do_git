import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from "react-native";
import { Colors } from "../../assets/global-styles/Colors";
import { Fonts } from "../../assets/global-styles/Fonts";

interface HeaderTitle {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

export function Header({title, onPress}: HeaderTitle) {

    if(title === 'Sign Up') {
        return(
            <View style={styles.container}>
                <Text style={styles.textContainerSignUp}>{title}</Text>
            </View>
        );
        
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
                <Image source={require('../../assets/images/go-back-arrow.png')}/>
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
    textContainerSignUp: {
        marginTop: 40,
        fontFamily: Fonts.Bold,
        marginLeft: 14,
        color: 'black',
        fontSize: 34,
        marginBottom: 54,
    },
});