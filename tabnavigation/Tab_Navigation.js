import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from "../screens/Category";
import ThongBao from "../screens/Thong_Bao";
import User_Info from "../screens/User_Info";
import {NavigationContainer} from '@react-navigation/native'
import NoteScreens from "../screens/NoteScreens";

const Tab = createBottomTabNavigator();

function Mytab() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={NoteScreens}/>
            <Tab.Screen name="Settings1" component={ThongBao}/>
            <Tab.Screen name="Settings" component={User_Info}/>
        </Tab.Navigator>

    );
}

export default function MyTabs() {
    return (
        <NavigationContainer independent={true}>
            <Mytab/>
        </NavigationContainer>
    );
}