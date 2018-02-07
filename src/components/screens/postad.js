import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput, KeyboardAvoidingView ,Dimensions} from 'react-native';
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
        
    <KeyboardAwareScrollView
    style={{ backgroundColor: '#fff' }}
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={CommonStyles.keyboardAvoidingViewContainer}
    scrollEnabled={false}>
       <View style={CommonStyles.addImageContainer}>
         <Ionicons  name={'ios-add-circle-outline'} color={"black"} size={100} />
        </View>
        <View >
          <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold]}>
          TITLE
          </Text>
        </View> 
        <View style={[CommonStyles.textInputField]}>
          <TextInput style={CommonStyles.textInput}
              placeholder='Sell somethings'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
           />
      </View>
    <View style={[CommonStyles.introPageButtonBox,styles.footerControl]}>
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
  </KeyboardAwareScrollView>
   
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
