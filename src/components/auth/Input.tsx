import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { Fonts } from "../../assets/global-styles/Fonts";
import { Colors } from "../../assets/global-styles/Colors";

interface placeString {
    name: string;
}
export function Input({name}: placeString) {
    const [pass, setPass] = useState(false);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [checkValidPassword, setCheckValidPassword] = useState(false);
    const [texting, setTexting] = useState(false);

    const placeholderHandler = (text: string) => {
        setTexting(true);
        if(name === 'Email') {
            let re = /\S+@\S+\.\S+/;
            let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4-6}$/im; 
            if(re.test(text) || regex.test(text)) {
                setCheckValidEmail(false)
            } else {
                setCheckValidEmail(true);
            }
            if(text === '') {
                setTexting(false);
                setCheckValidEmail(false);
            }
        }
        if(text === '') {
            setTexting(false);
        }

        if(name === 'Password') {
            setPass(true);
            if(text.length >= 4) {
                setCheckValidPassword(false);
            } else {
                setCheckValidPassword(true);
            }
            if(text === '') {
                setTexting(false);
                setCheckValidPassword(false);
            }
        }
    }

    

    if(name === 'Email') {
        return(
            <>
                <View style={[styles.inputs, checkValidEmail && styles.errorInputs]}>
                    <Text style={[styles.hidden, texting && styles.highPlaceholderShown, texting && checkValidEmail && styles.highPlaceholderShownError ]}>{name}</Text>
                    <View style={styles.viewInputsAndImages}>
                        <TextInput autoCorrect={false} style={styles.placeholder} placeholder={name} secureTextEntry={pass} onChangeText={(text) => placeholderHandler(text)}/>
                        {checkValidEmail ? <Image style={styles.checkImages} source={require('../../assets/images/outline-close-24px.png')}/> : <Image style={[styles.hiddenCheckImages, texting && styles.checkImages]} source={require('../../assets/images/outline-check-24px.png')}/>}
                    </View>
                </View>
                <View style={styles.viewErrorText}>
                    {checkValidEmail ? <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text> : null}
                </View>
            </>
        );
    }
    if(name === 'Password') {
        return(
            <>
                <View style={[styles.inputs, checkValidPassword && styles.errorInputs]}>
                    <Text style={[styles.hidden, texting && styles.highPlaceholderShown, texting && checkValidPassword && styles.highPlaceholderShownError ]}>{name}</Text>
                    <View style={styles.viewInputsAndImages}>
                        <TextInput autoCorrect={false} style={styles.placeholder} placeholder={name} secureTextEntry={pass} onChangeText={(text) => placeholderHandler(text)}/>
                        {checkValidPassword ? <Image style={styles.checkImages} source={require('../../assets/images/outline-close-24px.png')}/> : <Image style={[styles.hiddenCheckImages, texting && styles.checkImages]} source={require('../../assets/images/outline-check-24px.png')}/>}
                    </View>
                </View>
                <View style={styles.viewErrorText}>
                    {checkValidPassword ? <Text style={styles.errorText}>Invalid Password, put at least 4 characters</Text> : null}
                </View>
            </>
        );
    }

   return(
    <View style={[styles.inputs]}>
        <Text style={[styles.hidden, texting && styles.highPlaceholderShown]}>{name}</Text>
        <View style={styles.viewInputsAndImages}>
            <TextInput  autoCorrect={false} style={styles.placeholder} placeholder={name} secureTextEntry={pass} onChangeText={(text) => placeholderHandler(text)}/>
            <Image style={[styles.hiddenCheckImages, texting && styles.checkImages]} source={require('../../assets/images/outline-check-24px.png')}/>
        </View>
    </View>
   );
    
    
}

const styles = StyleSheet.create({
    inputs: {
        marginVertical: 8,
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: 'white',
        height: 64,
        marginHorizontal: 16,
        borderRadius: 4,
    },
    viewInputsAndImages: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    checkImages: {
        top: 3,
        marginRight: 21,
        width: 24,
    },
    hiddenCheckImages: {
        width: 0,
    },
    placeholder: {
        marginLeft: 20,
        fontSize: 14,
        fontFamily: Fonts.Medium,
        bottom:8,
    },
    hidden: {
        opacity: 0,
    },
    highPlaceholderShown: {
        opacity: 100,
        top: 8,
        marginLeft: 24,
        fontSize: 11,
        fontFamily: Fonts.Medium,
    },
    highPlaceholderShownError: {
        color: Colors.redError,
        opacity: 100,
        top: 10,
        marginLeft: 24,
        fontSize: 11,
        fontFamily: Fonts.Medium,
    },
    errorInputs: {
        marginVertical: 8,
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: 'white',
        height: 64,
        marginHorizontal: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.redError,
    },
    viewErrorText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontFamily: Fonts.Medium,
        fontSize: 11,
        color: Colors.redError,
    },

});