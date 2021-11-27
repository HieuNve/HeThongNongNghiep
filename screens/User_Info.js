import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {Text} from "react-native";
import {ImageBackground, StyleSheet, Image} from "react-native";
import {TouchableOpacity} from "react-native";
import edit from "../assets/edit.png"
import in4 from "../assets/information.png"
import logout from "../assets/logout.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User_Info() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const getData = async () => {
        try {
            const username = await AsyncStorage.getItem('username')
            const phone = await AsyncStorage.getItem('phone')
            if (username != null) {
                setName(username)
                setPhone(phone)
            }

        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(name)
    return (
        <View>
            <View style={styles.box}>
                <Image
                    style={styles.background}
                    source={{
                        uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                    }}
                />
                <View style={styles.headerContent}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                        }}
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.phoneNumber}>{phone}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={{
                    marginTop: 10
                }}>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>
                                <Image source={edit} style={styles.imgedit}/>
                                Đổi mật khẩu
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>
                                <Image source={in4} style={styles.imgedit}/>
                                Thông tin thiết bị
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>
                                <Image source={logout} style={styles.imgedit}/>
                                Đăng xuất
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    headerContent: {
        padding: 10,
        paddingTop: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    textContent: {
        flexDirection: "column",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    box: {
        marginTop: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 1,
            width: -2,
        },
        elevation: 2,
        paddingTop: 10,
        paddingBottom: 10
    },
    name: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "600",
    },
    phoneNumber: {
        fontSize: 16,
        color: "#778899",
        fontWeight: "600",
    },
    body: {
        height: 450,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 5,
        width: "98%",
        height: 50,
    },
    infoContent: {
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 5,
    },
    info: {
        paddingLeft: 10,
        fontSize: 18,
        color: "#000000",
    },
    imgedit: {
        width: 22,
        height: 22,
        marginRight: 10
    }
});

