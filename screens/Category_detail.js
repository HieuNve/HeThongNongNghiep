import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import farm from "../assets/diary.png";
import frui from "../assets/fruit-tree.png"
import cloud from "../assets/cloudy.png"

import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Category_detail() {
    const [nameFarm, setNameFarm] = useState("")
    const navigation = useNavigation();

    const BackToList = () => {
        navigation.navigate("home")
    }
    const ToNhatKy = () => {
        navigation.navigate("Moitruong")
    }
    const TonhatkySanXuat = () => {
        navigation.navigate("diary")
    }

    const getDataFarm = async () => {
        try {
            const farmName = await AsyncStorage.getItem('nameFarm')
            if (farmName != null) {
                setNameFarm(farmName)
            }

        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getDataFarm()
    }, [])
    return (

        <View style={styles.detailScreen}>

            <View style={styles.headerDeatail}>
                <View style={{flex: 1}}>
                    <View
                        style={{
                            textAlign: 'center',


                        }}>
                        <Text style={styles.title}>
                            <Image source={frui} style={styles.imgFarm}/>
                            {nameFarm}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.title}>Ngày thứ : 2</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.title}>Ngày bắt đầu: 19/11/2021</Text>
                    </View>
                </View>
            </View>


            <View style={{flex: 4}}>
                <View style={{flex: 2, flexDirection: "row", justifyContent: 'space-between',}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => {
                            TonhatkySanXuat()
                        }}
                                          style={styles.touchalbe}
                        >
                            <View style={styles.container}>
                                <Text style={styles.titleNhatKy}>Nhật ký sản xuất</Text>
                                <Image style={styles.categoryImg} source={farm}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => {
                            ToNhatKy()
                        }}
                                          style={styles.touchalbe}
                        >
                            <View style={styles.container}>
                                <Text style={styles.titleNhatKy}>Nhật ký môi trường</Text>
                                <Image style={styles.categoryImg} source={cloud}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{
                    flex: 2,
                    flexDirection: "row"
                }}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={styles.DeatailButton}>
                            <View style={styles.buttonDetail}>
                                <Text style={styles.titleButton}>Quy trình</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={styles.DeatailButton}>
                            <View style={styles.buttonDetail}>
                                <Text style={styles.titleButton}>Kết thúc mùa vụ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={() => {
                            BackToList()
                        }}
                    >
                        <View style={styles.DanhSach}>
                            <Text style={styles.titleButton}>Danh sách vườn</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 3}}>

            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        color: "black",
        borderRadius: 10,
        paddingTop: 16,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 16,
        height: 130,
        marginRight: 20,
        marginLeft: 8

    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        color: "#fff"
    },
    categoryImg: {
        width: 50,
        height: 50,

    },
    touchalbe: {
        paddingTop: 16,
        width: "90%",
        marginLeft: 16,

    },
    detailScreen: {
        flex: 1,
        backgroundColor: '#89c263',
    },
    headerDeatail: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    imgFarm: {
        width: 25,
        height: 25
    },
    buttonDetail: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "90%",
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 7,

    },
    DeatailButton: {
        paddingTop: 45,
    },
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    DanhSach: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "95%",
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 7,
    },
    titleNhatKy: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        color: "black"
    }
});
