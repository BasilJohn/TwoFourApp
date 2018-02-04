import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput , KeyboardAvoidingView } from 'react-native';
import { ImageButton, SwitchButton } from '../common';
import CommonStyles from '../../styles/commonStyles';
import {  SearchBar  } from "react-native-elements";

export default class PostAd extends Component {

    constructor() {
        super();
        this.state = {
           switch1Value: false,
           switch2Value: false,
        }
     }
     toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
     }
     toggleSwitch2 = (value) => {
        this.setState({switch2Value: value})
        console.log('Switch 2 is: ' + value)
     }
     
    render(){
        return(
            <KeyboardAvoidingView>
            <View >
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold]}>
             Price USD
            </Text>
            <View style={CommonStyles.textInputField}>
            <TextInput
              placeholder=''
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
            </View>
            </View>
            <View>
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold]}>
             Negotiable
            </Text>
            <View>
             <SwitchButton/>
            </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}