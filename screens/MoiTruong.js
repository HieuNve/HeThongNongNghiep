import React, {useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, TouchableOpacity} from "react-native";
import {View} from "react-native";
import {Text} from "react-native";
import {Image} from "react-native";
import logo from "../assets/logo.png"
import axios from "axios";
import sun from "../assets/sun.png"
import hum from "../assets/humidity.png"
import temp from "../assets/temperature.png"
import Ph from "../assets/ph.png"

export default function MoiTruong({navigation}) {
    const [data, setData] = useState("")
    const BackToList = () => {
        navigation.navigate("detail")
    }
    const DieuKhien = () => {
        console.log("dieu khien")
        navigation.navigate("DieuKhien")
    }
    useEffect(() => {

        fetch(
            "http://159.223.56.85/api/getAllsensors"
        )
            .then((response) => response.json())
            .then((result) => setData(result.data))
            .catch((error) => console.log("error", error));
    }, []);
    console.log(data)

    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: "center"}}>
                <Image style={styles.imgLogo} source={logo}/>
            </View>
            <View style={{flex: 4, alignItems: "center"}}>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Image source={temp} style={styles.imgTemp}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Nhiệt độ môi trường</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>{data["temperature"]}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>C</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Image source={hum} style={styles.imgTemp}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Độ ẩm không khí</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>{data["humidity"]}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>%</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Image source={hum} style={styles.imgTemp}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Độ ẩm đất</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>{data["soilHumidity"]}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>%</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Image source={Ph} style={styles.imgTemp}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Độ PH đất</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>{data["soilPH"]}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>%</Text>
                    </View>
                </View>
                <View style={styles.boxtemp}>
                    <View style={{flex: 1}}>
                        <Image source={sun} style={styles.imgTemp}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.textStyle}>Cường độ ánh sáng</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>{data["lightIntensity"]}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyle}>Lux</Text>
                    </View>
                </View>

            </View>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={{flex: 1, alignItems: 'center'}}>
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
                <View style={{flex: 1, alignItems: 'center'}}>
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
        backgroundColor: '#89c263',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
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
    imgLogo: {
        width: 100,
        height: 100
    },
    imgTemp: {
        width: 40,
        height: 40,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        justifyContent: "center",
        paddingTop: 10
    }
});
