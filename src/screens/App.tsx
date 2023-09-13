import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { ForgotYourPassword } from "./ForgotYourPassword";
import { Colors } from "../assets/global-styles/Colors";

const Stack = createNativeStackNavigator();

export function App() {
    return(
        <SafeAreaView style={styles.safeView}>
            <NavigationContainer>
                <StatusBar backgroundColor={Colors.background} barStyle={'dark-content'}/>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name='SignUp' component={SignUp}/>
                    <Stack.Screen name="LogIn" component={LogIn}/>
                    <Stack.Screen name="Forgot" component={ForgotYourPassword}/>
                </Stack.Navigator>
            </NavigationContainer> 
        </SafeAreaView>  
    );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    }
});