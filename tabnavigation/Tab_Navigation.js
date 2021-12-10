import React, {Component} from 'react';
import ThongBao from "../screens/Thong_Bao";
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import NoteScreens from "../router_screen_home/NoteScreens";
import {Alert, Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import noti from "../assets/notifications.png"
import farmer from "../assets/farmer.png"
import home from "../assets/home.png"
import user from "../assets/user.png"
import logout from "../assets/logout.png"
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer";
import Router_user from "../router_screen_home/router_user";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import {GlobalContext} from "../Context/Provider";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import {createStackNavigator} from "@react-navigation/stack";
import AppNavigation from "../AppNavigation";
import Chao from "../screens/Chao";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const UserView = () => {
    const {name, phone} = React.useContext(GlobalContext)
    return (
        <View style={{
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <Image style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                borderColor: Colors.green,
                borderWidth: 4,
                marginBottom: 10
            }}
                   source={farmer}
            />
            <Text style={{fontWeight: "bold", fontSize: 14}}>{name}</Text>
            <Text style={{fontSize: 12}}>{phone}</Text>
        </View>
    )
}


const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const {login, setLogin} = React.useContext(GlobalContext)
    const Logout = () => {

        Alert.alert("Logout", "Are you sure to logout?", [
            {
                text: "Cancel", onPress: () => {
                }
            },
            {
                text: "OK",
                onPress: () => {
                    setLogin(true)
                },
            },
        ]);
    }
    return (
        <View>
            <UserView/>
            <DrawerContentScrollView>
                <DrawerItemList {...props}
                                activeTinColor={"green"}
                />
                <DrawerItem
                    label={"Đăng Xuất"}
                    onPress={() => {
                        Logout()
                    }}
                    icon={({size, color}) => (
                        <Image source={logout}
                               style={{
                                   width: 20,
                                   height: 20
                               }}
                        />
                    )}
                />
            </DrawerContentScrollView>

        </View>
    );
}

function Mytab() {

    const dimension = useWindowDimensions()
    const drawerType = dimension.width >= 700 ? 'permanent' : 'front';

    return (
        <Drawer.Navigator
            drawerStyle={{
                width: 280,
                backgroundColor: 'white'
            }}
            drawerType={drawerType}
            edgeWidth={100}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >

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


        </Drawer.Navigator>

    );
}

export default function MyTabs() {
    const {login, setLogin} = React.useContext(GlobalContext)
    return (
        <NavigationContainer independent={true}>

            {
                login ? (
                    <>
                        <Stack.Navigator>
                            <Stack.Screen name={"login"} component={Login}
                                          options={{
                                              headerShown: false
                                          }}
                            />


                            <Stack.Screen name={"tab"} component={MyTabs}
                                          options={{
                                              headerShown: false
                                          }}
                            />
                            <Stack.Screen name={"signUp"} component={SignUp}
                                          options={{
                                              headerShown: false,
                                          }}
                            />

                        </Stack.Navigator>
                    </>
                ) : (
                    <Mytab/>
                )
            }
        </NavigationContainer>
    );
}
