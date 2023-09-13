import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';
import { Input } from '../components/auth/Input';
import { Header } from '../components/global/Header';
import { RedButton } from '../components/global/RedButton';


export function SignUp({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Sign Up' onPress={() => {}}/>
      <Input name='Name' />
      <Input name='Email'/>
      <Input name='Password'/>
      <View style={styles.otherPageNav}>
        <Text style={styles.otherPageText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Image source={require('../assets/images/round-arrow_right_alt-24px.png')}/>
        </TouchableOpacity>
      </View>
      <RedButton btnText='SIGN UP'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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

});