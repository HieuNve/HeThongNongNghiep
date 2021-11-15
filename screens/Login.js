import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Image} from "react-native";
import logo from "../assets/logo.png"


export default function Login({navigation}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginButton = () => {

        console.log({username})
        console.log({password})
        if (username === "admin" && password === "123") {
            navigation.navigate("tab")
        } else {
            Alert.alert("Thông tin tài khoản mật khẩu không chính xác")
            console.log("Sai tk , MK")
            setUsername("")
            setPassword("")
        }
    }

    function ToSignUp() {
        navigation.navigate("signUp")
    }


    return (

        <View style={styles.container}>

            <View style={{flex: 2}}>
                <View style={styles.welcome}>
                    <Image style={styles.imgLogo} source={logo}/>
                </View>
            </View>
            <View style={{flex: 4}}>
                <View style={{flex: 2}}>
                    <TextInput style={styles.from2}
                               keyboardType='email-address'
                               autoFocus={true}
                               placeholder='  E-mail adress'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={username}
                               onChangeText={(username) => {
                                   setUsername(username)
                               }}

                    />

                    <TextInput style={styles.from3}
                               keyboardType='numeric'
                               secureTextEntry={true}
                               placeholder='  Mật khẩu'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={password}
                               onChangeText={(password) => {
                                   setPassword(password)
                               }}
                    >

                    </TextInput>
                    <View style={styles.from1}>
                        <View>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => {
                                                  loginButton()
                                              }}
                            >
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.action}>
                            <Text style={styles.donthave}>Don't have an account ?
                                <TouchableOpacity
                                    onPress={() => {
                                        ToSignUp()
                                    }}
                                >
                                    <Text style={styles.actionbuttonText}> Sign Up</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#67ad3d"

    },
    from1: {
        textAlign: "center",
        flex: 1
    },
    textHi: {
        fontSize: 23,
        margin: 150,
        color: '#ffffff',
        textAlign: 'center'
    },
    from2: {
        height: 60,
        backgroundColor: '#94c876',
        borderRadius: 25,
        width: "90%",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },

    },
    from3: {
        marginTop: 30,
        height: 60,
        backgroundColor: '#94c876',
        borderRadius: 25,
        width: "90%",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    action: {
        margin: 60,
        textAlign: 'center'
    },
    button: {
        marginTop: 15,
        backgroundColor: '#e7963d',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: "90%",
        marginLeft: 20,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold"
    },
    actionbuttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: "bold"
    },
    welcome: {
        textAlign: "center",
        alignItems: "center",
        paddingTop: 20
    },
    imgLogo: {
        width: 200,
        height: 200,
        textAlign: "center",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    donthave: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    }


});
