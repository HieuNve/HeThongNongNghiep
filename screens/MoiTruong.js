import React, {Component} from 'react';
import {Alert, Button, StyleSheet, TouchableOpacity} from "react-native";
import {View} from "react-native";
import {Text} from "react-native";
import {Image} from "react-native";
import logo from "../assets/logo.png"

export default function MoiTruong({navigation}) {
    const BackToList = () => {
        navigation.navigate("detail")
    }
    const DieuKhien = () => {
        console.log("dieu khien")
        Alert.alert("Điều khiển")
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: "center"}}>
                <Image style={styles.imgLogo} source={logo}/>
            </View>
            <View style={{flex: 2, alignItems: "center"}}>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>A</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>25</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>A</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>25</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>A</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>25</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>A</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>25</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>A</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>25</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>

            </View>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={() => {
                            BackToList()
                        }}
                    >
                        <View style={styles.DanhSach}>
                            <Text style={styles.titleButton}>Quay lại</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={() => {
                            DieuKhien()
                        }}
                    >
                        <View style={styles.DanhSach}>
                            <Text style={styles.titleButton}>Điều khiển</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        justifyContent: "center",
        paddingTop: 10
    },
    boxtemp: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
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
        backgroundColor: "blue",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "95%",
        marginLeft: 16,
        borderRadius: 7,
    },
    titleButton: {
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    imgLogo: {
        width: 150,
        height: 150
    }
});
