import React from 'react';
import { Card, TouchableHighlight, StyleSheet, Button,Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation'

export default class BasicApp extends React.Component{
  static navigationOptions = {
    title:"Home Screen",
    headerRight: (
      <Button
        onPress={()=>{alert("This is a press")}}
        title="press me"
        color="#fff"
      />
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          title="Go to Details"
          onPress={()=>this.props.navigation.navigate("Details",{
            otherParam: "otherParam variable",
            itemId: 86,
          })} 
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