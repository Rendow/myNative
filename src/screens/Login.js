import React, {useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, TextInput, View,} from 'react-native';
import GlobalStyle from "../utils/GlobalStyle";
import MyButton from "../utils/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({navigation}) => {

    const [text, setText] = useState('');
    const onChange = ({value}) => {
        setText(value)
    };
    const setData = async () => {
        if (text.length === 0) {
            Alert.alert('Warning!')
        } else {
            try {
                await AsyncStorage.setItem('UserName', text)
                navigation.navigate('Home')
            } catch (e) {
                console.log(e)
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image
                resizeMode={"stretch"}
                style={styles.logo}
                source={{uri: 'https://image.shutterstock.com/image-vector/welcome-hand-drawn-text-trendy-260nw-1034471089.jpg'}}
            />
            <Text style={styles.text}> Storage</Text>
            <TextInput onChange={onChange} placeholder={'Enter you name'} style={styles.input}/>
            <MyButton style={styles.btn} text={'Login'} color={'#dc2c2c'} onButtonClick={setData}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#78eaee',
    },
    text: GlobalStyle.textFont,
    logo: {
        height: 100,
        width: 100,
        margin: 20,
    },
    input: {
        width: 200,
        borderColor: 'black',
        backgroundColor: '#fff',
        borderWidth: 1,
        fontSize: 20,
        marginTop: 130,
        height: 40,
        padding: 5,
        borderRadius: 10,
    },
    btn: {
        marginTop: 130,
    },
});


