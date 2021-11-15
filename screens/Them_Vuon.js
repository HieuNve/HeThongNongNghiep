import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Image} from "react-native";
import logo from "../assets/logo.png"
import {ScrollView} from "react-native";


export default function Them_Vuon({navigation}) {

    function AddFarm() {
        Alert.alert("Thêm Thành Công")
        console.log("thêm ok")
        navigation.navigate("home")
    }

    function CacelAddFarm() {
        Alert.alert("Đã hủy")
        console.log("Hủy ok")
        navigation.navigate("home")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flex: 2}}>
                    <View style={styles.welcome}>
                        <Image style={styles.imgLogo} source={logo}/>
                    </View>
                </View>
                <View style={{flex: 4}}>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.from2}
                                   keyboardType='Tên Vườn'
                                   autoFocus={true}
                                   placeholder='  E-mail adress'
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'

                        />

                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder='  Cây trồng'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'>

                        </TextInput>
                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder=' Diện tích'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'>

                        </TextInput>
                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder='  Vị trí'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'>

                        </TextInput>
                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder='  ID thiết bị'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'>

                        </TextInput>
                        <View style={styles.from1}>
                            <View style={{
                                flex: 1,
                                paddingRight: 25,
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={styles.button}
                                                  onPress={() => {
                                                      AddFarm()
                                                  }}
                                >
                                    <Text style={styles.buttonText}>Thêm vườn</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 1,
                                paddingRight: 25,
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={styles.button}
                                                  onPress={() => {
                                                      CacelAddFarm()
                                                  }}
                                >
                                    <Text style={styles.buttonText}>Hủy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#67ad3d"

    },
    from1: {
        textAlign: "center",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
    },
    textHi: {
        fontSize: 23,
        margin: 150,
        color: '#ffffff',
        textAlign: 'center'
    },
    from2: {
        height: 50,
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
        height: 50,
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
        textAlign: 'center',
        flex: 1
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
        fontWeight: "bold",
        paddingRight: 16
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
