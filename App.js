import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, } from 'react-native';
  
export default function App() {
  const [ostos, setOstos] = useState('');
  const [data, setData] = useState([]);

  const buttonAdd = () => {
    if(ostos == ''){

    }
    else {
      setData([...data, { key: ostos }]);
      setOstos('');}
    }
  const buttonClear = () => {
      setData([]);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={ostos => setOstos(ostos)} value={ostos.toString()}/>
      <View style={styles.miniContainer}>
      <Button title='Add' style={styles.button} onPress={() => buttonAdd()}>Add</Button>
      <Button title='Clear' style={styles.button} onPress={() => buttonClear()}>Clear</Button>
      </View>
      <View style={styles.container}>
      <Text>Shopping list</Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} keyExtractor={(item, index) => index.toString()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    padding: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniContainer: {
    width: 150,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: 150,
    color: 'blue',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
