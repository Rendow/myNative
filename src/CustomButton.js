import React, {useState} from 'react';
import {Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View,} from 'react-native';

const MyButton = ({onButtonClick,text, ...props}) => {
    return (
            <Pressable
                android_ripple={{color: "#00f"}}
                style={({pressed}) => [
                    styles.btn,
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
                    {...props.style}

                ]}
                onPress={onButtonClick}>
                <Text style={styles.text}>{text} </Text>
            </Pressable>

    );
};

const styles = StyleSheet.create({

    btn: {
        backgroundColor: 'rgb(39,206,137)',
        height: 70,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    text: {
        color: 'white',
        fontSize: 35,
    },
});

export default MyButton;
