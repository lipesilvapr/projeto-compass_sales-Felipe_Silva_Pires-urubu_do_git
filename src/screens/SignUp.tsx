import React, { useEffect, useState } from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Colors} from '../assets/global-styles/Colors';
import {Fonts} from '../assets/global-styles/Fonts';
import { Input } from '../components/auth/Input';
import { Header } from '../components/global/Header';
import { RedButton } from '../components/global/RedButton';
import { auth, db } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore"; 
import AsyncStorage from '@react-native-async-storage/async-storage';





export function SignUp() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [att, setAtt] = useState(false); 
  const getLog = async () => {
      try{
          const data = await AsyncStorage.getItem('user');
          if(data)
          setAtt(true);
        }catch (e){
        }
        
  } 
  useEffect (() => {
    getLog();
    if(att) {
      navigation.replace('Home');
    };
  },[att]);
  

  const handleSignUp = async () => {
    
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user;
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
      });
      await updateProfile(user, {
        displayName: name,
      });
      navigation.navigate("LogIn");
    } catch (e) {
      Alert.alert('Authentication error: ', String(e));
    } 
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Sign Up' onPress={() => {}}/>
      <Input name='Name' setName={setName}/>
      <Input name='Email' setEmail={setEmail}/>
      <Input name='Password' setPassword={setPassword}/>
      <View style={styles.otherPageNav}>
        <Text style={styles.otherPageText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Image source={require('../assets/images/round-arrow_right_alt-24px.png')}/>
        </TouchableOpacity>
      </View>
      <RedButton btnText='SIGN UP' onPress={handleSignUp}/>
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