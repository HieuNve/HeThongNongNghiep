import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from "../screens/Login"
import User_Info from "../screens/User_Info";
import MyTabs from "../tabnavigation/Tab_Navigation";
import SignUp from "../screens/SignUp";


const Stack = createStackNavigator();
const Router_user = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name={"user_info"} component={User_Info}
                              options={{
                                  headerShown: false,
                              }}
                />
                {/*<Stack.Screen name={"login"} component={Login}*/}
                {/*              options={{*/}
                {/*                  headerShown: false,*/}
                {/*              }}*/}
                {/*/>*/}
                {/*<Stack.Screen name={"tab"} component={MyTabs}*/}
                {/*              options={{*/}
                {/*                  headerShown: false*/}
                {/*              }}*/}
                {/*/>*/}
                {/*<Stack.Screen name={"signUp"} component={SignUp}*/}
                {/*              options={{*/}
                {/*                  headerShown: false,*/}
                {/*              }}*/}
                {/*/>*/}

            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default Router_user