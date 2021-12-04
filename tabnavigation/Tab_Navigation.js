import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from "../screens/Category";
import ThongBao from "../screens/Thong_Bao";
import User_Info from "../screens/User_Info";
import {NavigationContainer} from '@react-navigation/native'
import NoteScreens from "../router_screen_home/NoteScreens";
import {Image, StyleSheet, Text, View} from "react-native";
import cloud from "../assets/cloudy.png"
import noti from "../assets/notifications.png"
import ThoiTiet from "../screens/ThoiTiet"
import home from "../assets/home.png"
import user from "../assets/user.png"
import {createDrawerNavigator} from "@react-navigation/drawer";
import Login from "../screens/Login";
import Router_user from "../router_screen_home/router_user";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Mytab() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={NoteScreens}
                           options={{
                               title: "Trang chủ",
                               drawerIcon: () => (
                                   <Image source={home}
                                          style={{
                                              width: 20,
                                              height: 20
                                          }}
                                   />
                               )
                           }}
            />
            <Drawer.Screen name="thongBao" component={ThongBao}
                           options={{
                               title: "Thông báo",
                               drawerIcon: () => (
                                   <Image source={noti}
                                          style={{
                                              width: 20,
                                              height: 20
                                          }}
                                   />
                               )
                           }}
            />
            <Drawer.Screen name="taiKhoan" component={Router_user}
                           options={{
                               title: "Tài khoản",
                               headerShown: false,
                               drawerIcon: () => (
                                   <Image source={user}
                                          style={{
                                              width: 20,
                                              height: 20
                                          }}
                                   />
                               )
                           }}
            />

        </Drawer.Navigator>

    );
}

export default function MyTabs() {
    return (
        <NavigationContainer independent={true}>
            <Mytab/>
        </NavigationContainer>
    );
}
