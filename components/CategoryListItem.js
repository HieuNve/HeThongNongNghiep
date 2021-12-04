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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CategoryListItem({name, time_start, area, location}) {

    const navigation = useNavigation();
    const onClickFarm = async () => {
        navigation.navigate("detail")
        await save_data_farm(name, time_start)
    }
    const save_data_farm = async (value, time_start) => {

        try {
            await AsyncStorage.setItem('nameFarm', value)
            await AsyncStorage.setItem('timestart', time_start)
        } catch (e) {
            // saving error
        }
    }

    return (
        <TouchableOpacity onPress={() => {
            onClickFarm()
        }}>
            <View style={styles.container}>
                <View
                    style={{
                        flex: 2
                    }}
                >
                    <Text style={styles.title}>Tên vườn: {name}</Text>
                    <Text style={styles.title}>Diện tích: {area}</Text>
                    <Text style={styles.title}>Địa điểm: {location}</Text>
                    <Text style={styles.title}>Ngày bắt đầu: {time_start}</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    <Image style={styles.categoryImg} source={farm}/>
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
        borderRadius: 10,
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
    },
    categoryImg: {
        width: 64,
        height: 64
    }
});

