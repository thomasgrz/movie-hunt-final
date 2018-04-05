import React from 'react';
import expo;
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{height: 40}}      
          placeholder="this will be a search field"
        />
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
