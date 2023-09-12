import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';

export function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Sign Up</Text>
      <View style={styles.inputs}>
        <TextInput style={styles.placeholder} placeholder='Name'/>
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.placeholder} placeholder='Email'/>
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.placeholder} placeholder='Password'/>
      </View>
      <View style={styles.otherPageNav}>
        <Text style={styles.otherPageText}>Already have an account?</Text>
        <Image source={require('../assets/images/round-arrow_right_alt-24px.png')}/>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            Sign up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  textContainer: {
    fontFamily: Fonts.Bold,
    marginLeft: 14,
    color: 'black',
    fontSize: 34,
    marginBottom: 54,
  },
  inputs: {
    marginVertical: 8,
    justifyContent: 'center',
    elevation: 20,
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
  otherPageNav: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  otherPageText: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
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