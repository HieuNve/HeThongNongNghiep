import React from 'react';
import {
    View,
    Text,
    StyleSheet, Alert
} from "react-native"
import farm from "../assets/farm.png"
import {Image} from "react-native";
import {TouchableOpacity} from "react-native";
import {} from '@react-navigation/native'
import Category_detail from "../screens/Category_detail";
import {useNavigation} from '@react-navigation/native'

export default function CategoryListItem({name}) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("detail")}>
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
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

