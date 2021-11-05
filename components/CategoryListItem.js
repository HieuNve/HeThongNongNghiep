import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native"
import farm from "../assets/farm.png"
import {Image} from "react-native";

export default function CategoryListItem(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <Image style={styles.categoryImg} source={farm}/>
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
        fontWeight: "200"
    },
    categoryImg: {
        width: 64,
        height: 64
    }
});

