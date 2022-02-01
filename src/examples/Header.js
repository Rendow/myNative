import React, {useState} from 'react';
import {Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View,} from 'react-native';

const Header = ({text, ...props}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text} </Text>
        </View>

    );
};

const styles = StyleSheet.create({

    view: {
        backgroundColor: 'rgba(57,158,213,0.32)',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 35,
    },
});

export default Header;
