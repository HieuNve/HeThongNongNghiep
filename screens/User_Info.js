import React, {useEffect, useState} from 'react';
import {Alert, View, Modal} from "react-native";
import {Text} from "react-native";
import {ImageBackground, StyleSheet, Image} from "react-native";
import {TouchableOpacity} from "react-native";
import edit from "../assets/edit.png"
import in4 from "../assets/information.png"
import logout from "../assets/logout.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User_Info({navigation}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const logout = () => {
        setModalVisible(true)
    }
    const onlogout = () => {
        setModalVisible(!modalVisible)
        // navigation.navigate("login")
    }
    const getData = async () => {
        try {
            const username = await AsyncStorage.getItem('username')
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

                <TouchableOpacity
                    onPress={() => {
                        logout()
                    }}
                >
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
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Bạn có chắc chắn đăng xuất không? </Text>
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
                                            setModalVisible(!modalVisible)
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

                                            onlogout()
                                        }}
                                    >
                                        <View style={styles.DanhSach}>
                                            <Text style={styles.titleButton}>Đăng xuất</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    DanhSach: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: 130,
        marginLeft: 16,
        borderRadius: 10,
    },
});

