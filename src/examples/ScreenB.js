import React from 'react';
import {Pressable, StyleSheet, Text, View,} from 'react-native';


export const ScreenB = ({navigation}) => {
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


