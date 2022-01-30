import React, {useState} from 'react';
import {Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View,} from 'react-native';

const App = () => {
    const [isVisible, setVisible] = useState(true);

    const onButtonClick = () => {
        setVisible(!isVisible)
    };

    return (
        <ImageBackground
            source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1185620019.1641859200'}}
            style={styles.container}>

            <Pressable
                android_ripple={{color: "#00f"}}
                style={({pressed}) => [
                    styles.btn,
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'}

                ]}
                onPress={onButtonClick}>
                <Text style={styles.text}>Button </Text>
            </Pressable>
            <View>
                {isVisible
                    ? <Image
                        style={styles.img}
                        resizeMode={"stretch"}
                        source={require('./assets/done-text-green-grungy-vintage-rectangle-stamp-done-text-green-grungy-vintage-stamp-214435444.jpg')}/>
                    : <Image
                        style={styles.img}
                        resizeMode={"stretch"}
                        source={{uri:'https://docs.microsoft.com/ru-ru/windows/win32/uxguide/images/mess-error-image15.png'}}/>}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#fff',
        paddingTop:20,
    },

    btn: {
        backgroundColor: 'rgb(39,206,137)',
        height: 70,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    img: {
        height:90,
        width: 260,
    },
    text: {
        color: 'white',
        fontSize: 35,
    },


});

export default App;
