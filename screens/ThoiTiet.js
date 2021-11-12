import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Text} from "react-native";
import axios from "axios";

export default function ThoiTiet() {
    const [dataW, setDataW] = useState("")
    const [dataWeather, setDataWeather] = useState("")
    const [dataWin, setDataWin] = React.useState("");
    useEffect(() => {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?lat=21.0169933&lon=105.8763607&appid=12c4e7125866191e240c933ca614191d"
        )
            .then((response) => response.json())
            .then((result) => {
                setDataW(result.main)
                setDataWeather(result.weather[0])
                setDataWin(result.wind)
            })
            .catch((error) => console.log("error", error));
    }, []);
    console.log(dataW["temp"])
    console.log(dataWeather)
    console.log(dataWeather["description"])
    console.log(dataWin["speed"])
    var Temp = (Number(dataW["temp"])) + Number(-273.15);
    var feel_like = Number(dataW["feels_like"]) + Number(-273.15)
    var des = dataWeather["description"]
    var speed = dataWin["speed"]

    return (
        <View style={styles.container}>
            <View style={styles.TitleTemp}>
                <Text style={styles.temp}>{Math.round(Temp)} °C</Text>
            </View>
            <View style={styles.TitleTemp}>
                <Text style={styles.txtTemp}>Nhiệt độ cảm nhận: {Math.round(feel_like)} °C</Text>
            </View>
            <View
                style={{
                    flex: 3,
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.txtTemp}>Gió</Text>
                    <Text style={styles.txtTemp1}>{speed} m/s</Text>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.txtTemp}>Độ ẩm không khí</Text>
                    <Text style={styles.txtTemp1}>30 %</Text>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.txtTemp}>Chất lượng</Text>
                    <Text style={styles.txtTemp}>Không khí</Text>
                    <Text style={styles.txtTemp1}>Tốt</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    TitleTemp: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        paddingTop: 30,
    },
    temp: {
        fontSize: 50,
        fontWeight: "bold"
    },
    txtTemp: {
        fontSize: 16,
        fontWeight: "bold"
    },
    txtTemp1: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 20
    }
});