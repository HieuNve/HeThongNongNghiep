import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CategoryListItem from "./components/CategoryListItem";
import Category from "./screens/Category";
import Category_detail from "./screens/Category_detail";
import MyTabs from "./tabnavigation/Tab_Navigation"


const Stack = createStackNavigator()
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"tab"} component={MyTabs}
                              options={{
                                  headerShown: false,
                              }}
                />
                {/*<Stack.Screen name={"Home"} component={Category}/>*/}
                {/*<Stack.Screen name={"detail"} component={Category_detail}*/}
                {/*/>*/}
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
