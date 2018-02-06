import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput , KeyboardAvoidingView,Switch } from 'react-native';
import { ImageButton, SwitchButton,GradientButton } from '../common';
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

    render(){
        return(
            <KeyboardAvoidingView>
            <View>
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.appFontColor]}>
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
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.appFontColor]}>
             Negotiable
            </Text>
            <View>
            <Switch 
            onValueChange={this.onControlChange} 
            value={this.state.isOpen}
            />
            </View>
            </View>
            <View>
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.appFontColor]}>
             Free
            </Text>
            <View>
            <Switch 
            onValueChange={this.onControlChange} 
            value={this.state.isOpen}
            />
            </View>
            </View>
            <View>
             <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.appFontColor]}>
             Description (optional)
            </Text>
            <View style={CommonStyles.textInputField}>
            <TextInput 
              placeholder='Write few lines about your product'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              multiline={true}
              numberOfLines={5}
            />
            </View>
            </View>
            <View style={[CommonStyles.buttonBox, {marginBottom: spaceHeight * 0.17}]}>
            {/* <GradientButton
            setting={shadowOpt}
            btnText="POST ADs"
            /> */}
        </View>
            </KeyboardAvoidingView>
        )
    }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;