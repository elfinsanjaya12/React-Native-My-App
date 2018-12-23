import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contoh from './contoh'
import {hallo, hello} from './contoh'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Elfin Sanjaya</Text>
        <Text>{hallo}</Text>
        <Text>{hello}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
