import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../assets/global-styles/Fonts";
import { RedButton } from "../components/global/RedButton";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";





export function Home() {
    const navigation: any = useNavigation();
    const [userName,setUserName] = useState('');
    const getName = async () => {
        const name = await AsyncStorage.getItem('name').then((textName) => {
            if(textName)
            setUserName(textName);
        });
    }
    useEffect(() => {
       getName(); 
    })

    const handleLogout = async () => {
        await signOut(auth).then(() => {
            AsyncStorage.setItem('user', '');
            navigation.replace('SignUp');
        }).catch((error) => {
        });
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.homeTitle}>Hello</Text>
            <Text style={styles.homeTitle}>{userName}</Text>
            <RedButton btnText="LOGOUT" onPress={handleLogout}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeTitle: {
        fontSize: 50,
        fontFamily: Fonts.Bold,
        alignSelf: 'center',
    },
});