import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fonts } from "../assets/global-styles/Fonts";
import { RedButton } from "../components/global/RedButton";
import { signOut } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";



export function Home() {
    const navigation: any = useNavigation();

    const handleLogout = async () => {
        await signOut(auth).then(() => {
            console.log('sucess');
            navigation.navigate("LogIn");
          }).catch((error) => {
            console.log(error.message);
          });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.homeTitle}>Hello</Text>
            <Text style={styles.homeTitle}>{auth.currentUser?.displayName}</Text>
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