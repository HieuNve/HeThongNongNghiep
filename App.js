import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import AppNavigation from "./AppNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import GlobalProvider, {GlobalContext} from "./Context/Provider";
import {NativeRouter, Routes, Link} from 'react-router-native'
import Login from "./screens/Login";

const Stack = createStackNavigator()
export default function App() {
    return (

        <GlobalProvider>
            <AppNavigation/>
        </GlobalProvider>

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
