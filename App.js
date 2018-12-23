import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      header: 'Hello State',
      hasil: 0,
      angka1:0,
      angka2:0
    }
  }

  hitung = () =>{
    const {angka1, angka2 } = this.state
    this.setState({hasil : angka1 + angka2})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:32}}>{this.state.hasil}</Text>
        <Text>Hello Elfin Sanjaya</Text>
        <TextInput 
          style={styles.inputBox}
          value={this.state.header}
          onChangeText={ (text) => this.setState({header: text})}
        />
        <TextInput 
          style={styles.inputBox}
          value={String(this.state.angka1)}
          onChangeText={ (text) => this.setState({angka1: Number(text)})}
        />
        <TextInput 
          style={styles.inputBox}
          value={String(this.state.angka2)}
          onChangeText={ (text) => this.setState({angka2: Number(text)})}
        />

        <Button title ="Click Me" onPress={this.hitung} />
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
    margin: 32
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin:6

  }
});
