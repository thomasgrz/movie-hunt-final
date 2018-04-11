import React from 'react';
import { Card, TouchableHighlight, StyleSheet, Button,Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'

export default class DetailsApp extends React.Component{
   static navigationOptions = ({ navigation, navigationOptions })=>{
      const { params } = navigation.state;

      return {
        title: params ? params.otherParam : "Nested Details Screen",
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor
      }
   };

   render(){
     /* read params passed in from last screen*/
     const { params } = this.props.navigation.state
     const itemId = params ? params.itemId : null;
     const otherParam = params ? params.otherParam : null;

     return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam:{JSON.stringify(otherParam)}</Text>
          <Button 
            title="Go to Details ... again"
            onPress={()=>this.props.navigation.navigate('Details')}
          />
          <Button 
            title="Go to back"
            onPress={()=>this.props.navigation.goBack()}
          />
          <Button 
          title="Update Header"
          onPress={()=>{
            this.props.navigation.setParams({otherParam: "Updated!"})
          }} 
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
    }
  })
