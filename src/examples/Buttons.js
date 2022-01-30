import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Pressable,
  Button,
  ToastAndroid,
} from 'react-native';

//TouchableWithoutFeedback
//TouchableOpacity - кнопка с изменяемыми стилями
//TouchableHighlight - кнопка с изменяемыми стилями, другой бэкграунд при клике
//Button - стили не изменяются
// Presseble - нажатие с задержкой 

const App = () => {
  const [text, setText] = useState(false);

  const onButtonClick = () => {
    setText(!text);
    ToastAndroid.showWithGravity(
      'Button was pressed!',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )
  };

  return (
    <View style={styles.container}>
      <Pressable
      android_ripple={{color:"#00f"}}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'}
          
        ]}
       delayLongPress={500}
        onLongPress={onButtonClick}>
        <Text style={styles.text}> {text ? 'true' :'false'} </Text>
      </Pressable>
      <TouchableOpacity
       disabled
        style={styles.button}
        activeOpacity={0.5}
        onPress={onButtonClick}>
        <Text style={styles.text}>{text ? 'true' :'false'} </Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.5}
        onPress={onButtonClick}
        underlayColor={'#ddd'}
        >
          
        <Text style={styles.text}>{text ? 'true' :'false'} </Text>
      </TouchableHighlight>
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
  button: {
    backgroundColor: 'green',
    height: 60,
    width: 120,
  },
  text: {
    color: 'black',
    fontSize: 35,
  },
});

export default App;
