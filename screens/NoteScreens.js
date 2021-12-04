import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Category from "./Category";
import Category_detail from "./Category_detail";
import MoiTruong from "./MoiTruong";
import Them_Vuon from "./Them_Vuon";
import Controller from "./Controller"
import { createDrawerNavigator } from '@react-navigation/drawer';
import FarmDiary from "./FarmDiary";
import FarmDiaryScreen from "./FarmDiary";
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const NoteScreens = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name={"home"} component={Category}
                              options={{
                                  headerShown: false,
                              }}
                />
                <Stack.Screen name={"detail"} component={Category_detail}
                              options={{
                                  headerShown: false
                              }}
                />
                <Stack.Screen name={"Moitruong"} component={MoiTruong}
                              options={{
                                  headerShown: false
                              }}
                />
                <Stack.Screen name={"ThemVuon"} component={Them_Vuon}
                              options={{
                                  headerShown: false
                              }}
                />
                <Stack.Screen name={"DieuKhien"} component={Controller}
                              options={{
                                  headerShown: false
                              }}
                />
                <Stack.Screen name={"diary"} component={FarmDiaryScreen}
                              options={{
                                  headerShown: false
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default NoteScreens