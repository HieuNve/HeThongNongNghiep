import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";
import {Image} from "react-native";
import logo from "../assets/logo.png"
import {ScrollView, Picker} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Them_Vuon({navigation}) {
    const [id_tree, setIdTree] = useState("chọn cây");
    const [farm_name, setFarm_name] = useState("")
    const [location, setLocation] = useState("")
    const [area, setArea] = useState("")
    const [id_device, setIdDevice] = useState("")
    const [idUser, setIdUser] = useState("")
    const [time_finish, setTimeFinish] = useState("")

    const list_tree = [
        {label: 'cà chua', value: '2'},
        {label: 'cà chua1', value: '3'},
        {label: 'cà chua2', value: '4'},
        {label: 'cà chua3', value: '5'},
        {label: 'cà chua4', value: '6'},
    ]

    const getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
    }


    const getData = async () => {
        try {
            const idUsers = await AsyncStorage.getItem('id')
            console.log(idUsers)
            if (idUser != null) {
                setIdUser(idUsers)
            }

        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        getData()
    }, [idUser])

    function AddFarm() {
        let time = getCurrentDate()
        console.log({id_tree})
        console.log({farm_name})
        console.log({location})
        console.log({area})
        console.log({id_device})
        console.log({time})

        if (farm_name.length <= 0 || location.length <= 0 || area.length <= 0 || id_device <= 0 || id_tree <= 0) {
            console.log("no")
            Alert.alert("Nhập lại thông tin vườn")
        } else {
            const request_add_farm = async () => {
                const result = await axios({
                    method: 'post',
                    url: "http://159.223.56.85/api/farm",
                    headers: {},
                    data: {
                        personID: idUser,
                        deviceID: 2,
                        treeID: id_tree,
                        farmName: farm_name,
                        location: location,
                        area: area,
                        timeStart: time,
                        timeFinish: time
                    }
                })
                console.log(result)
                return result
            }
            request_add_farm().then(res => {
                console.log(res.data.success)
                if (res.data.success === 1) {
                    Alert.alert("thêm thành công")
                    console.log("thêm thành công")
                    navigation.navigate("home")
                } else {

                    console.log("đăng ký không thành công")
                }
            }).catch((error) => {
                console.log(error)
                if (error.response) {
                    console.log("lỗi response")
                } else if (error.request) {
                    console.log("404")
                } else if (error.message) {
                    console.log("lỗi mess")
                }
            })
        }

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
                                   placeholder='  Tên Vườn'
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'
                                   value={farm_name}
                                   onChangeText={(farmName) => {
                                       setFarm_name(farmName)
                                   }}
                        />

                        <RNPickerSelect
                            placeholder={{
                                label: 'Chọn cây...',
                                value: null,
                            }}
                            style={{...pickerSelectStyles}}
                            onValueChange={(value) => setIdTree(value)}
                            items={list_tree}
                        />

                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder=' Diện tích'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'
                                   value={area}
                                   onChangeText={(Area) => {
                                       setArea(Area)
                                   }}
                        >

                        </TextInput>
                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder='  Vị trí'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'
                                   value={location}
                                   onChangeText={(Location) => {
                                       setLocation(Location)
                                   }}

                        >

                        </TextInput>
                        <TextInput style={styles.from3}
                                   keyboardType='numeric'
                                   placeholder='  ID thiết bị'
                                   autoFocus={true}
                                   placeholderTextColor='#ffffff'
                                   textAlign='center'
                                   value={id_device}
                                   onChangeText={(IdDevice) => {
                                       setIdDevice(IdDevice)
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
                                        CacelAddFarm()
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
                                        AddFarm()
                                    }}
                                >
                                    <View style={styles.DanhSach}>
                                        <Text style={styles.titleButton}>Thêm Vườn</Text>
                                    </View>
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

    formSelect: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
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
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
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
        }, // to ensure the text is never behind the icon
    },
    inputAndroid: {
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
        }, // to ensure the text is never behind the icon
    },
    inputWeb: {
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
    }
});
