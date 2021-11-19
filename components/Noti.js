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

export default function Noti({name, canhBao, date}) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={{
                    flex: 1
                }}>
                    <Image style={styles.categoryImg} source={farm}/>
                </View>
                <View style={{
                    flex: 2
                }}>
                    <Text style={styles.title}>Ngày {date}</Text>
                    <Text style={styles.title}>Vườn: {name}</Text>
                    <Text style={styles.title}>Cảnh báo: {canhBao}</Text>
                </View>


            </View>
        </TouchableOpacity>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
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

