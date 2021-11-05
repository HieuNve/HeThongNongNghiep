import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Alert
} from "react-native"
import farm from "../assets/farm.png"
import {Image} from "react-native";
import {TouchableOpacity} from "react-native-web";

export default function CategoryListItem(props) {
    const click = () => {
      Alert.alert("okok")
        console.log("okok1")
    }
    return (
        <TouchableOpacity onPress={() =>{
            click()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>{props.name}</Text>
                <Image style={styles.categoryImg} source={farm}/>
            </View>
        </TouchableOpacity>
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
        fontWeight: "200"
    },
    categoryImg: {
        width: 64,
        height: 64
    }
});

