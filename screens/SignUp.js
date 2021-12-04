import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from "axios";
import logo from "../assets/logo.png"


export default function SignUp({navigation}) {
    const [username_value, setUsername_value] = useState("")
    const [password_value, setPassword_value] = useState("")
    const [passwordAgain_value, setPasswordAgain_value] = useState("")
    const [phone_number_value, setPhone_number_value] = useState("")
    const loginSignup = () => {
        console.log({username_value})
        console.log({password_value})
        console.log({passwordAgain_value})
        console.log({phone_number_value})

        if (password_value === passwordAgain_value) {
            const request_sign_up = async () => {
                const result = await axios({
                    method: 'post',
                    url: "http://159.223.56.85/api/auth/register",
                    headers: {},
                    data: {
                        username: username_value,
                        password: password_value,
                        phoneNumber: phone_number_value
                    }
                })
                console.log(result)
                return result
            }
            request_sign_up().then(res => {
                console.log(res.data.success)
                if (res.data.success === 1) {
                    Alert.alert("Đăng ký thành công")
                    console.log("đăng ký thành công")
                    navigation.navigate("login")
                } else {
                    Alert.alert("Đăng ký tài khoản không thành công")
                    console.log("đăng ký không thành công")
                }
            }).catch((error) => {
                console.log(error)
                if (error.response) {
                    console.log("lỗi response")
                    Alert.alert("error 500")
                    console.log("500")
                } else if (error.request) {
                    Alert.alert("error 500")
                    console.log("404")
                } else if (error.message) {
                    console.log("lỗi mess")
                }
            })
        } else {
            console.log("no")
            Alert.alert("Nhập lại mật khẩu")
        }

    }

    const gotoLogin = () => {
        navigation.navigate("login")
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
                               keyboardType='numeric'
                               autoFocus={true}
                               placeholder='  Số điện thoại'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={phone_number_value}
                               onChangeText={(phone_number_value) => {
                                   setPhone_number_value(phone_number_value)
                               }}

                    />

                    <TextInput style={styles.from3}
                               placeholder='  Tên đăng nhập'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={username_value}
                               onChangeText={(username_value) => {
                                   setUsername_value(username_value)
                               }}

                    >

                    </TextInput>
                    <TextInput style={styles.from3}
                               secureTextEntry={true}
                               placeholder=' Mật khẩu'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={password_value}
                               onChangeText={(password_value) => {
                                   setPassword_value(password_value)
                               }}
                    >

                    </TextInput>
                    <TextInput style={styles.from3}
                               secureTextEntry={true}
                               placeholder='  Nhập lại mật khẩu'
                               placeholderTextColor='#ffffff'
                               textAlign='center'
                               value={passwordAgain_value}
                               onChangeText={(passwordAgain_value) => {
                                   setPasswordAgain_value(passwordAgain_value)
                               }}

                    >

                    </TextInput>

                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 16,
                        paddingBottom: 20
                    }}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => {
                                    gotoLogin()
                                }}
                            >
                                <View style={styles.DanhSach}>
                                    <Text style={styles.titleButton}>Hủy</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => {
                                    loginSignup()
                                }}
                            >
                                <View style={styles.DanhSach}>
                                    <Text style={styles.titleButton}>Đăng Ký</Text>
                                </View>
                            </TouchableOpacity>
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
    },
    DanhSach: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: 150,
        marginLeft: 16,
        borderRadius: 10,
    },
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },


});
