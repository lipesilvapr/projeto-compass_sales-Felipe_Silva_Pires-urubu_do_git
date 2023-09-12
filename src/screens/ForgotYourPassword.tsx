import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';
import { Input } from '../auth/Input';
import { Header } from '../assets/global-styles/Header';
import { RedButton } from '../assets/global-styles/RedButton';

export function ForgotYourPassword({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Forgot password' onPress={() => navigation.goBack()}/>
      <View style={styles.viewText}>
        <Text style={styles.text}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
      </View>
      <Input name='Email'/>
      <RedButton btnText='SEND'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  viewText: {
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: 'black',
  },
  button: {
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