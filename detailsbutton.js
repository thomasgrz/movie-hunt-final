import React from 'react'
import {Button} from 'react-native'
import {withNavigation} from 'react-navigation'

export default class DetailsButton extends React.Component{
    render(){
        return(
            <Button title="More Info" onPress={()=>{this.props.navigation.navigate('Details')}}/>
        )
    }
}