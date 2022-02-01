import {Alert, StyleSheet, Text, View} from "react-native";
import GlobalStyle from "../utils/GlobalStyle";
import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({navigation, route}) {
    const [name, setName] = useState('');

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            await AsyncStorage.getItem('UserName')
                .then(res => {
                    if (res !== null) {
                        setName(res)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    };
    return <View style={styles.container}>
        <Text style={styles.text}>
            Welcome {name}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    text: GlobalStyle.textFont,

});


