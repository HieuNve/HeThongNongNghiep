import React, {useState} from 'react';
import {Alert, Button, View, Modal, Pressable, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Text} from "react-native";
import Noti from "../components/Noti";
import FarmDiary from "../components/FarmDiary";
import {ScrollView} from "react-native";

export default function FarmDiaryScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [Disease, setDisease] = useState("")
    const [Work, setWork] = useState("")
    const [Supplies, setSupplies] = useState("")

    function ToAddFarm() {
        setModalVisible(true)
    }

    return (
        <View style={{
            height: "98%"
        }}>
            <Button title={"Viết nhật ký"}
                    onPress={() => {
                        ToAddFarm()
                    }}
            />
            <ScrollView style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
                <FarmDiary date={"4-12-2021"} name={"Nhật ký 1"} canhBao={"không"}/>
            </ScrollView>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}

                >

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.titleButton}>Nhật Ký</Text>
                            <TextInput style={styles.from3}
                                       placeholder='  Dịch bênh'
                                       placeholderTextColor='#000000'
                                       value={Disease}
                                       onChangeText={(Disease) => {
                                           setDisease(Disease)
                                       }}
                            />
                            <TextInput style={styles.from3}
                                       placeholder='  Công việc'
                                       placeholderTextColor='#000000'
                                       value={Work}
                                       onChangeText={(Work) => {
                                           setWork(Work)
                                       }}
                            />
                            <TextInput style={styles.from3}
                                       placeholder='  Sử dụng thuốc trừ sâu, phân bón'
                                       placeholderTextColor='#000000'
                                       value={Supplies}
                                       onChangeText={(Supplies) => {
                                           setSupplies(Supplies)
                                       }}
                            />


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
                                            setModalVisible(!modalVisible)
                                        }}
                                    >
                                        <View style={styles.DanhSach}>
                                            <Text style={styles.titleButton}>Thêm</Text>
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

    from3: {
        marginTop: 30,
        height: 45,
        borderRadius: 15,
        justifyContent: "flex-start",
        backgroundColor: '#fff',
        width: "100%",
        marginLeft: 20,
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
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
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
});

