import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from "../screens/Category";
import ThongBao from "../screens/Thong_Bao";
import User_Info from "../screens/User_Info";
import {NavigationContainer} from '@react-navigation/native'
import NoteScreens from "../screens/NoteScreens";
import {Image} from "react-native";
import cloud from "../assets/cloudy.png"
import noti from "../assets/notifications.png"
import ThoiTiet from "../screens/ThoiTiet"
import home from "../assets/home.png"
import user from "../assets/user.png"

const Tab = createBottomTabNavigator();

function Mytab() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={NoteScreens}
                        options={{
                            title: "Trang chủ",
                            tabBarIcon: () => (
                                <Image source={home}
                                       style={{
                                           width: 20,
                                           height: 20
                                       }}
                                />
                            )
                        }}
            />
            <Tab.Screen name="thongBao" component={ThongBao}
                        options={{
                            title: "Thông báo",
                            tabBarIcon: () => (
                                <Image source={noti}
                                       style={{
                                           width: 20,
                                           height: 20
                                       }}
                                />
                            )
                        }}
            />
            <Tab.Screen name="thoiTiet" component={ThoiTiet}
                        options={{
                            title: "Thời tiết",
                            tabBarIcon: () => (
                                <Image source={cloud}
                                       style={{
                                           width: 20,
                                           height: 20
                                       }}
                                />
                            )
                        }}
            />
            <Tab.Screen name="taiKhoan" component={User_Info}
                        options={{
                            title: "Tài khoản",
                            tabBarIcon: () => (
                                <Image source={user}
                                       style={{
                                           width: 20,
                                           height: 20
                                       }}
                                />
                            )
                        }}
            />
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