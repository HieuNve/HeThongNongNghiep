import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import farm from "../assets/farm.png";
import {useNavigation} from "@react-navigation/native";

export default function Category_detail() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => {
                Alert.alert("okok")
            }}
                              style={styles.touchalbe}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Nhật ký môi trường</Text>
                    <Image style={styles.categoryImg} source={farm}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Alert.alert("okok")
            }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Nhật ký sản xuất</Text>
                    <Image style={styles.categoryImg} source={farm}/>
                </View>
            </TouchableOpacity>
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
    },
    touchalbe: {
        paddingTop: 16
    }
});
