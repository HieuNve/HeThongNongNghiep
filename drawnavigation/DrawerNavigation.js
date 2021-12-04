import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from "../screens/Category";
import User_Info from "../screens/User_Info";
import NoteScreens from "../screens/NoteScreens";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={NoteScreens} />
            <Drawer.Screen name="Logout" component={User_Info} />
        </Drawer.Navigator>
    );
}