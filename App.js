import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CategoryListItem from "./components/CategoryListItem";
import Category from "./screens/Category";
import Category_detail from "./screens/Category_detail";
import MyTabs from "./tabnavigation/Tab_Navigation"
import Chao from "./screens/Chao";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreens from "./screens/NoteScreens";

const Stack = createStackNavigator()
export default function App() {
    const [isLogin, setIsLogin] = useState(false);
    const getData = async () => {
        try {
            const username = await AsyncStorage.getItem('username')
            console.log({username})
            if (username != null) {
                setIsLogin(true)
            } else {
                setIsLogin(false)
            }
        } catch (e) {

        }
    }
    useEffect(() => {
        getData()
    }, [isLogin])
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"chao"} component={Chao}
                              options={{
                                  headerShown: false
                              }}
                />
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
        </NavigationContainer>
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
