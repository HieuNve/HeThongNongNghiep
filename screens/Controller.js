import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Switch, TouchableOpacity} from "react-native";
import {Text} from "react-native";
import logo from "../assets/logo_black.png"
import motor from "../assets/motor.png"
import light from "../assets/lightbulb.png"
import {Image} from "react-native";
import sun from "../assets/sun.png";
import axios from "axios";


export default function Controller({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [maybom, setMaybom] = useState("")
    const [led, setLed] = useState("")
    const [relay3, setRelay3] = useState("")
    const [relay4, setRelay4] = useState("")
    const [statusMB, setStatusMB] = useState("")
    const toggleSwitchMayBom = () => {
        setMaybom(previousState => !previousState);

        if (!maybom) {

            const request_mayBom = async () => {
                const result = await axios({
                    method: 'get',
                    url: `http://159.223.56.85/api/sensors/relay?relay1=1&relay2=0&deviceID=1`,
                    headers: {},
                })
                console.log("Bật")
                console.log(result)
                return result
            }
            request_mayBom().then(res => {

            })
        } else {
            const request_mayBomOff = async () => {
                const result = await axios({
                    method: 'get',
                    url: `http://159.223.56.85/api/sensors/relay?relay1=0&relay2=0&deviceID=1`,
                    headers: {},
                })
                console.log("tắt")
                console.log(result)
                return result
            }
            request_mayBomOff().then(res => {

            })
        }


    }
    const toggleSwitchled = () => setLed(previousState => !previousState);
    const toggleSwitchrelay3 = () => setMaybom(previousState => !previousState);
    const toggleSwitchrelay4 = () => setMaybom(previousState => !previousState);


    useEffect(() => {
        const request_relay = async () => {
            const result = await axios({
                method: 'get',
                url: `http://159.223.56.85/api/sensors/relayDevice`,
                headers: {},
            })
            return result
        }
        request_relay().then(res => {
            let value = res.data.data
            console.log({value})
            if (value.relay1 === 1) {
                setMaybom(true)
            } else {
                setMaybom(false)
            }

            if (value.relay2 === 1) {
                setLed(true)
            } else {
                setLed(false)
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
    }, [])


    const BacktoMt = () => {
        navigation.navigate("Moitruong")
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 2, alignItems: "center"}}>
                <Image source={logo} style={styles.logo}/>
            </View>

            <View style={styles.styleRelay}>
                <View style={{flex: 1}}>
                    <Image source={motor} style={styles.imgTemp}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.titleButton}>Máy Bơm 1</Text>
                </View>
                <View style={styles.switchButton}>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={maybom ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchMayBom}
                        value={maybom}
                    />
                </View>
            </View>

            <View style={styles.styleRelay}>
                <View style={{flex: 1}}>
                    <Image source={light} style={styles.imgTemp}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.titleButton}>Máy Bơm 1</Text>
                </View>
                <View style={styles.switchButton}>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={led ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchled}
                        value={led}
                    />
                </View>
            </View>

            <View style={styles.styleRelay}>
                <View style={{flex: 1}}>
                    <Image source={motor} style={styles.imgTemp}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.titleButton}>Máy Bơm 1</Text>
                </View>
                <View style={styles.switchButton}>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={led ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchled}
                        value={led}
                    />
                </View>
            </View>

            <View style={{
                flex: 1,
                width: "90%",
            }}>
                <TouchableOpacity
                    style={{
                        marginRight: 8,
                        marginLeft: 8
                    }}
                    onPress={() => {
                        BacktoMt()
                    }}

                >
                    <View style={styles.DanhSach}>
                        <Text style={styles.titleButton}>Quay lại</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    logo: {
        width: 180,
        height: 180,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0
        },

    },
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
    },
    switchButton: {
        flex: 1,
        alignItems: "center"
    },
    styleRelay: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 16,
        width: "90%",

    },
    DanhSach: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "100%",
        borderRadius: 7,
        marginRight: 16
    },
    imgTemp: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        justifyContent: "center",
        paddingTop: 10
    }

});