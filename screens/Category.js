import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, Button, Alert} from 'react-native';
import CategoryListItem from "../components/CategoryListItem";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const list = [
    {id: 1, name: "Vườn 1"},
    {id: 2, name: "Vườn 2"},
    {id: 3, name: "Vườn 3"},
    {id: 4, name: "Vườn 4"},
    {id: 5, name: "Vườn 1"},
    {id: 6, name: "Vườn 2"},
    {id: 7, name: "Vườn 3"},
    {id: 8, name: "Vườn 4"},
]


export default function Category({navigation}) {
    const [idUser, setIdUser] = useState("")
    const [listFarm, setListFarm] = useState([])

    function ToAddFarm() {
        navigation.navigate("ThemVuon")
    }

    const getData = async () => {
        try {
            const idUsers = await AsyncStorage.getItem('id')
            console.log(idUsers)
            if (idUser != null) {
                setIdUser(idUsers)
            }

        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getData()
        const request_farm = async () => {
            const result = await axios({
                method: 'get',
                url: `http://159.223.56.85/api/farm/${idUser}`,
                headers: {},
            })
            console.log(result)
            return result
        }
        request_farm().then(res => {
            console.log(res.data.success)
            if (res.data.success === 1) {
                setListFarm(res.data.data)
            } else {

            }
        }).catch((error) => {
            console.log(error)
            if (error.response) {
                console.log("lỗi response")
                Alert.alert("error 500")
                console.log("500")
            } else if (error.request) {
                Alert.alert("error 500")
                console.log("404")
            } else if (error.message) {
                console.log("lỗi mess")
            }
        })
    }, [idUser])
    console.log({idUser})


    console.log(listFarm)


    return (
        <View style={{
            height: "98%"
        }}>
            <Button title={"Thêm vườn"}
                    onPress={() => {
                        ToAddFarm()
                    }}
            />
            <ScrollView style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
                {listFarm.map(value =>
                    <CategoryListItem key={value.location} name={value.location} timestart={value.location}/>)}
            </ScrollView>

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
});
