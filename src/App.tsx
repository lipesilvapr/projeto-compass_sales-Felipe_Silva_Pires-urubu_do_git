import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./screens/SignUp";
import { LogIn } from "./screens/LogIn";
import { ForgotYourPassword } from "./screens/ForgotYourPassword";
import { Colors } from "./assets/global-styles/Colors";
import { Home } from "./screens/Home";

const Stack = createNativeStackNavigator();
export function App() {
    return(
            <SafeAreaView style={styles.safeView}>
                    <NavigationContainer>
                            <StatusBar backgroundColor={Colors.background} barStyle={'dark-content'}/>
                            <Stack.Navigator initialRouteName='SignUp'  screenOptions={{headerShown: false,}}>
                                    <Stack.Screen name='SignUp' component={SignUp}/>
                                    <Stack.Screen name="LogIn" component={LogIn}/>
                                    <Stack.Screen name="Forgot" component={ForgotYourPassword}/>
                                    <Stack.Screen name="Home" component={Home}/> 
                            </Stack.Navigator>
                    </NavigationContainer>          
            </SafeAreaView>       
        ); 
    } 
    

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    }
});