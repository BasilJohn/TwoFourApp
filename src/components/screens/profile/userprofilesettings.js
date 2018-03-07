import React from 'react';
import { View ,Text,StyleSheet,TouchableWithoutFeedback,Image,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native';
import { LinearGradientButton,GradientNavigationBar } from '../../common';
import  CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { noNavTabbarNavigation } from '../../../styles/navigatorstyle';

export default class UserProfileSetting extends React.Component{
    static navigatorStyle = noNavTabbarNavigation;
    _handleClickSaveButton() {
        
      }

    render(){
        return(
        <View style={CommonStyles.normalPage}>
             <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Profile Settings'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../../assets/img/save.png'),
                buttonAction: this._handleClickSaveButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              }
            ]
          }
        />
        <ScrollView>
        <View style={[{alignItems:'center',marginTop:50}]} >
        <View>   
        <Image
            source={require('../../../assets/img/photo-camera.png')}
            style={{width: 100, height:100}}
          />
        </View>
        </View>
        <View style={styles.titleBox}>
        <Text style={[
            CommonStyles.titleText,
            CommonStyles.greyColor,
            CommonStyles.semiBold,
            CommonStyles.paddingTen,
            {alignSelf:'flex-start'}
          ]}>
            Profile
          </Text>
        </View> 
        <KeyboardAvoidingView>
        <View style={[styles.formBox,CommonStyles.spaceAround]}>
          <View style={[CommonStyles.signInTextInputField]}>
            <Image
              source={require('../../../assets/img/avatar.png')}
              style={{position:'absolute', bottom: 12,left: 20, width: 19, height: 22}}
            />
            <TextInput
              placeholder='John Player'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.signInTextInputField}>
            <Image
              source={require('../../../assets/img/envelope.png')} 
              resizeMode='contain'
              style={{position:'absolute',bottom: 12,left: 20, width: 19, height: 22}}
            />
            <TextInput
              placeholder='player@gmail.com'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.signInTextInputField}>
            <Image
              source={require('../../../assets/img/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20, width: 17, height: 22}}
            />
            <TextInput
              placeholder='Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.signInTextInputField}>
            <Image
              source={require('../../../assets/img/phoneCall.png')}
              style={{position:'absolute',bottom: 12,left: 20, width: 19, height: 22}}
            />
            <TextInput
              placeholder='6677177777'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
           
           </View>  
           </KeyboardAvoidingView>
           </ScrollView> 
        </View>
        
        )
    }
}
const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
    titleBox: {
      height: 52,
      marginTop: spaceHeight * 0.10,
       justifyContent: 'center',
      alignItems: 'center',
    },formBox: {
        height: 250,
        alignItems: 'center',
        marginBottom: spaceHeight * 0.05,
      },
})