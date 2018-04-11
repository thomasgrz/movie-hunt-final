import React from 'react';
import BasicApp from './screens/BasicApp'
import DetailsApp from './screens/DetailsApp'
import { Card, TouchableHighlight, StyleSheet, Button,Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'

export default StackNavigator({
  Home:{
    screen: BasicApp,
  },
  Details:{
    screen: DetailsApp
  }
},
{
  initialRouteName: 'Home',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#f4511e',
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
      fontWeight: 'bold',
    }
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
