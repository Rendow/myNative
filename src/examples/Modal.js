import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View,} from 'react-native';

const App = () => {
    const [isVisible, setVisible] = useState(true);

    const onButtonClick = () => {
        setVisible(!isVisible)
    };

    return (
        <View style={styles.container}>
            <Modal
                visible={isVisible}
                transparent
                animationType={"fade"}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.centered_view}>
                <View style={styles.warning_modal}>
                    <Text style={styles.warning_title}>Title</Text>
                    <Text style={styles.warning_body}>There is some text</Text>
                    <Pressable
                        android_ripple={{color: "#00f"}}
                        style={styles.modal_btn}
                        onPress={onButtonClick}>
                        <Text style={styles.text}> Button </Text>
                    </Pressable>
                </View>

            </View>

            </Modal>
            <Pressable
                android_ripple={{color: "#00f"}}
                style={({pressed}) => [
                    styles.btn,
                    {backgroundColor: pressed ? '#dddddd' : '#00ff00'}

                ]}
                delayLongPress={500}
                onLongPress={onButtonClick}>
                <Text style={styles.text}> Button </Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 400,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    centered_view: {
        backgroundColor: 'rgba(0,0,0,0.21)',
         flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn: {
        backgroundColor: 'rgb(39,206,137)',
        height: 70,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:15,
    },
    modal_btn: {
        backgroundColor: 'rgb(39,206,137)',
        height: 70,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
    },
    text: {
        color:'white',
        fontSize:35,
    },
    warning_modal: {
        backgroundColor: '#f0eff1',
        height: 400,
        width: 400,
        borderRadius:20,
        borderColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    warning_title: {
        backgroundColor: '#ea7777',
        borderColor:'black',
        textAlign:"center",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:35,
        padding:15,
        width: 400,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    warning_body: {
        flex:1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',

    },

});

export default App;
