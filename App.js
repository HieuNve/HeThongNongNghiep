import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CategoryListItem from "./components/CategoryListItem";


const list = [
    {id: 1, name: "Vườn 1"},
    {id: 2, name: "Vườn 2"},
    {id: 3, name: "Vườn 3"},
    {id: 4, name: "Vườn 4"},
]
export default function App() {
    const categories = list
    return (
        <View>
            <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
                {categories.map(value => <CategoryListItem name={value.name}/>)}
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
