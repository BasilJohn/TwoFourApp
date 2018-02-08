import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput, KeyboardAvoidingView ,Dimensions,ScrollView, Image} from 'react-native';
import { ImageButton, Input } from '../common';
import CommonStyles,  { deviceHeight,shadowOpt,deviceWidth } from '../../styles/commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;
export default class PostAd extends Component {
    render(){
        return(
     <ScrollView contentContainerStyle={{flexGrow:1}}>   
    <KeyboardAvoidingView style={CommonStyles.keyboardAvoidingViewContainer}>
    <View >
       <View style={CommonStyles.addImageContainer}>
       <Image
            source={require('../../assets/img/photo-camera.png')}
            style={{width: 100, height:100}}
          />
          <View style={CommonStyles.addedImageContainer}>
          <Image
            source={require('../../assets/img/photo.png')}
            style={{width: 50, height:50}}
          />
          <Image
            source={require('../../assets/img/photo.png')}
            style={{width: 50, height:50}}
          />
          <Image
            source={require('../../assets/img/photo.png')}
            style={{width: 50, height:50}}
          />
          </View>
        </View>
        <View >
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
          TITLE
          </Text>
        </View> 
        <View style={[CommonStyles.textInputField]}>
          <TextInput style={CommonStyles.textInput}
              placeholder='Sell somethings'
              underlineColorAndroid='transparent'
           />
      </View>
      </View>
  </KeyboardAvoidingView>
  <View style={[styles.footerControl,CommonStyles.introPageButtonBox]}>
   <View style={CommonStyles.introPageButton} />
   <View style={CommonStyles.introPageButton}>
   <ImageButton
         style={[CommonStyles.nextButton]}
         styleImage={CommonStyles.nextButton}
         appearance={{
           normal: require("../../assets/img/next.png"),
           highlight: require("../../assets/img/next.png")
         }}
         onPress={this._handleClickNextButton.bind(this)}
       />
   </View>
   </View>
  </ScrollView>

        )
    }

    _handleClickNextButton() {
        this.props.navigator.push({
          screen: "TwoFourApp.PostAdOne"
        });
      }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({

    middleControl:{
    flex:1 ,
    },
    footerControl:{
        
    alignItems:'flex-end'
       
     }
});
