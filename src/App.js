import React, {useState} from 'react';
import {Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View,} from 'react-native';
import MyButton from "./utils/CustomButton";
import Header from "./examples/Header";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {ScreenB} from "./examples/ScreenB";
import {Login} from "./screens/Login";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Home from "./screens/Home";

//const Stack = createStackNavigator()
// навигация через топ - const Top = createMaterialTopTabNavigator()
// навигая через боковое меню - const Drawer = createDrawerNavigator()
//const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const App = () => {
    const [isVisible, setVisible] = useState(true);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName ='Login'>
                <Stack.Screen
                    name={'Login'}
                    component={Login}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    text: {
        fontSize: 40,
        margin:10,
    },

});

export default App;
