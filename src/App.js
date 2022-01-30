import React, {useState} from 'react';
import {Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View,} from 'react-native';
import MyButton from "./CustomButton";
import Header from "./Header";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";



const Stack = createStackNavigator()
const App = () => {
    const [isVisible, setVisible] = useState(true);



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Screen_A'}
                    component={ScreenA}
                />
                <Stack.Screen
                    name={'Screen_B'}
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const ScreenA = ({navigation}) => {
    const onButtonClick = () => {
        navigation.navigate('Screen_B')
    };
    return (
        <View style={styles.container}>

            <Pressable
                android_ripple={{color: "#00f"}}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
                ]}
                onPress={onButtonClick}>
                <Text style={styles.text}> go to screen b</Text>
            </Pressable>
        </View>
    );
};
const ScreenB = ({navigation}) => {
    const onButtonClick = () => {
        navigation.navigate('Screen_A')
    };
    return (
        <View style={styles.container}>

            <Pressable
                android_ripple={{color: "#00f"}}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
                ]}
                onPress={onButtonClick}>
                <Text style={styles.text}> go to screen a</Text>
            </Pressable>
        </View>
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
