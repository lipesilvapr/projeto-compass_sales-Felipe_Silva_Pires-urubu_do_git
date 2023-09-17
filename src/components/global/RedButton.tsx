import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../assets/global-styles/Colors';
import { Fonts } from '../../assets/global-styles/Fonts';

interface Button {
    btnText: string;
    onPress: (event: GestureResponderEvent) => void;
}

export function RedButton({btnText, onPress}: Button) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {btnText}
        </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 10,
    marginVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginHorizontal: 16,
    borderRadius: 25,
    backgroundColor: Colors.redButton,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: 'white',
  },
});