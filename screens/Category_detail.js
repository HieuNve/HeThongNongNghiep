import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import farm from "../assets/diary.png";
import frui from "../assets/fruit-tree.png"
import cloud from "../assets/cloudy.png"
import {useNavigation} from "@react-navigation/native";

export default function Category_detail() {
    // const navigation = useNavigation();
    return (
        <View style={styles.detailScreen}>

            <View style={styles.headerDeatail}>
                <View style={{flex: 1}}>

                    <Text style={styles.title}>
                        <Image source={frui} style={styles.imgFarm}/>
                        Vườn cà chua</Text>
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
            <View style={{flex: 2}}>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("okok")
                        }}
                                          style={styles.touchalbe}
                        >
                            <View style={styles.container}>
                                <Text style={styles.title}>Nhật ký sản xuất</Text>
                                <Image style={styles.categoryImg} source={farm}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert("okok")
                        }}
                                          style={styles.touchalbe}
                        >
                            <View style={styles.container}>
                                <Text style={styles.title}>Nhật ký môi trường</Text>
                                <Image style={styles.categoryImg} source={cloud}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1,
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
            </View>
            <View style={{flex: 3}}>

            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 16
    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 16,
        color: "green"
    },
    categoryImg: {
        width: 64,
        height: 64
    },
    touchalbe: {
        paddingTop: 16,
        width: "90%",
        marginLeft: 16,

    },
    detailScreen: {
        flex: 1,
    },
    headerDeatail: {
        flex: 1,
    },
    imgFarm: {
        width: 25,
        height: 25
    },
    buttonDetail: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "blue",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "90%",
        marginLeft: 16,
        borderRadius: 7,

    },
    DeatailButton: {
        paddingTop: 16,
    },
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
});
