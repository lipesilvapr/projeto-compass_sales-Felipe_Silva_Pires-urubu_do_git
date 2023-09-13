import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';
import { Input } from '../components/auth/Input';
import { Header } from '../components/global/Header';
import { RedButton } from '../components/global/RedButton';



export function LogIn({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Log In' onPress={() => navigation.goBack()}/>
      <Input name='Email'/>
      <Input name='Password'/>
      <View style={styles.otherPageNav}>
        <Text style={styles.otherPageText}>Forgot your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Image source={require('../assets/images/round-arrow_right_alt-24px.png')}/>
        </TouchableOpacity>
      </View>
      <RedButton btnText='LOG IN'/>
      <TouchableOpacity style={styles.align} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.otherPageText}>Doesn't have an accout? Sing up right here!</Text>      
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
    marginTop: 18,
    fontFamily: Fonts.Bold,
    marginLeft: 14,
    color: 'black',
    fontSize: 34,
    marginBottom: 54,
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
  align: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});