import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Pressable,
    Button,
    ToastAndroid, Modal,
} from 'react-native';

//TouchableWithoutFeedback
//TouchableOpacity - кнопка с изменяемыми стилями
//TouchableHighlight - кнопка с изменяемыми стилями, другой бэкграунд при клике
//Button - стили не изменяются
// Presseble - нажатие с задержкой

const App = () => {
    const [text, setText] = useState(false);
    const [isVisible, setVisible] = useState(true);

    const onButtonClick = () => {
        setVisible(!isVisible)
    };

    return (
        <View style={styles.container}>
            <Modal
                visible={isVisible}
                transparent
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.centered_view}>
                <View style={styles.warning_modal}>
                    <Text style={styles.warning_title}>Text in modal</Text>
                    <Text>There is some text</Text>
                    <Pressable
                        android_ripple={{color: "#00f"}}
                        style={styles.btn}
                        onPress={onButtonClick}>
                        <Text style={styles.text}> {isVisible ? 'true' : 'false'} </Text>
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
                <Text style={styles.text}> {text ? 'true' : 'false'} </Text>
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
        backgroundColor: 'rgba(0,0,0,0.32)',
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
    text: {
        color:'white',
        fontSize:35,
    },
    warning_modal: {
        backgroundColor: '#d4cbcb',
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
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:35,
        padding:15,
        borderRadius:15,
    },

});

export default App;
