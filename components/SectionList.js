import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  SectionList,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [text, setText] = useState([
    {
      title: 'title 1',
      data: ['item 1-1', 'item 1-2', 'item 1-3'],
    },
    {
      title: 'title 2',
      data: ['item 2-1', 'item 2-2', 'item 2-3'],
    },
    {
      title: 'title 3',
      data: ['item 3-1', 'item 3-2', 'item 3-3'],
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setText([
      ...text,
      {
        title: 'title 4',
        data: ['item 4-1', 'item 4-2', 'item 4-3'],
      },
    ]);
    setRefreshing(false);
  };
  const onButtonClick = () => {};

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={text}
      renderItem={({item}) => (
          <Text  style={styles.text}> {item}</Text>
      )}
      renderSectionHeader={({section}) =>(
        <View style={styles.item}>
        <Text  style={styles.text}> {section.title}</Text>
      </View>
      
      )}
      refreshControl={ 
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        color={['#ff00ff']}
     /> }
      >
    </SectionList>
  );
};

const styles = StyleSheet.create({
  item: {
    color:'black' ,
    backgroundColor: 'violet',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 45,
  },
  text:{
    color:'black' ,
    fontSize: 35,
  },
  container: {
    backgroundColor: '#black',
    height: 400,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});


