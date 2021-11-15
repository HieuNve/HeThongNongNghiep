import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, Button} from 'react-native';
import CategoryListItem from "../components/CategoryListItem";


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
    function ToAddFarm() {
        navigation.navigate("ThemVuon")
    }

    const categories = list
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
                {categories.map(value =>
                    <CategoryListItem key={value.id} name={value.name}/>)}
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
