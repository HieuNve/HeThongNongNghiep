import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {View} from "react-native";
import {ImageBackground} from "react-native-web";
import imgBackGround from "../assets/backgroud.jpg"

export default function Chao({navigation}) {
    useEffect(() => {
        setTimeout(function () {
            navigation.navigate("login")
        }, 3000)
    })
    return (
        <View style={styles.container}>
            <ImageBackground style={{
                width: "100%",
                height: "100%",
            }}
                             source={imgBackGround}
            >

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
