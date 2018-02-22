import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput , KeyboardAvoidingView,Switch, ScrollView } from 'react-native';
import { ImageButton, SwitchButton,Button } from '../common';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../styles/commonStyles';
import {  SearchBar  } from "react-native-elements";


export default class PostAd extends Component {

    constructor() {
        super()
        this.state = {
            isOpen : false
        }
        this.onControlChange = this.onControlChange.bind(this); 
     }
     
     onControlChange(value) {
        return this.setState({
            isOpen: !this.state.isOpen
        });
     }
     _handleClickSignUpButton() {
        
      }
    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <KeyboardAvoidingView  
            style={[CommonStyles.keyboardAvoidingViewContainer]} >
            <View >
              <View>
             <View >
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
            Price USD
          </Text>
            </View>
            <View style={[CommonStyles.textInputField]}>
          <TextInput style={CommonStyles.textInput}
              placeholder='Price'
              underlineColorAndroid='transparent'
           />
            </View>
            </View>
          <View style={CommonStyles.switchBoxStyle}>
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
            Negotiable
          </Text>
          <Switch 
            onValueChange={this.onControlChange} 
            value={this.state.isOpen}/>
            </View>
            <View style={CommonStyles.switchBoxStyle}>
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
            Free
          </Text>
          <Switch 
            onValueChange={this.onControlChange} 
            value={this.state.isOpen}/>
            </View>
            <View >
            <View>
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
            Description (optional)
          </Text>
            </View>
            <View style={[CommonStyles.multiLinetextInputField]}>
          <TextInput style={CommonStyles.multiLinetextInput}
              placeholder='Write few lines about your products'
              underlineColorAndroid='transparent'
              multiline={true}
              numberOfLines={5}
           />
            </View>
            </View>
            </View>
            </KeyboardAvoidingView>
            <View style={[CommonStyles.buttonBox ]}>
            <Button
            onPress={this._handleClickSignUpButton.bind(this)}
            buttonText={"POST AD"}
            />
         </View>
         </ScrollView>
        
        )
    }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({

     footerControl:{
  
      alignItems:'center'
       
     }
});
