import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { ForgotYourPassword } from "./ForgotYourPassword";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

export function App() {
    return(
     <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
             <Stack.Screen name='SignUp' component={SignUp}/>
             <Stack.Screen name="LogIn" component={LogIn}/>
             <Stack.Screen name="Forgot" component={ForgotYourPassword}/>
        </Stack.Navigator>
    </NavigationContainer>      
    );
};