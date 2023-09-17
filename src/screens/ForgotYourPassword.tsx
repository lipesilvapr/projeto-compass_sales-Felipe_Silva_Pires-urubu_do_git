import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';
import { Input } from '../components/auth/Input';
import { Header } from '../components/global/Header';
import { RedButton } from '../components/global/RedButton';
import { auth } from '../config/firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



export function ForgotYourPassword() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const changePassword = () => {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Forgot password' onPress={() => navigation.goBack()}/>
      <View style={styles.viewText}>
        <Text style={styles.text}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
      </View>
      <Input name='Email' setEmail={setEmail}/>
      <RedButton btnText='SEND' onPress={changePassword}/>
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