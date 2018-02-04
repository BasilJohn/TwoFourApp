import React, { Component } from 'react';
import { View,Text,StyleSheet,TextInput, KeyboardAvoidingView } from 'react-native';
import { ImageButton, Input } from '../common';
import CommonStyles from '../../styles/commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostAd extends Component {
    render(){
        return(
        <KeyboardAvoidingView behavior="padding" style={CommonStyles.normalSinglePage}>
        <View style={CommonStyles.postPageImageBox}>
        <Ionicons  name={'ios-add-circle-outline'} color={"black"} size={100} />
        </View>
        <View style={styles.middleControlStyle}>
         <Text style={[CommonStyles.titleText, CommonStyles.blackColor,CommonStyles.extraBold]}>
            TITLE
          </Text>
          <View style={CommonStyles.textInputField}>
          <TextInput
              placeholder='Sell somethings'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
        </View>
        </View>
        <View style={CommonStyles.introPageButtonBox}>
        <View style={CommonStyles.introPageButton} />
        <View style={CommonStyles.introPageButton}>
        <ImageButton
              style={CommonStyles.nextButton}
              styleImage={CommonStyles.nextButton}
              appearance={{
                normal: require("../../assets/img/next.png"),
                highlight: require("../../assets/img/next.png")
              }}
              onPress={this._handleClickNextButton.bind(this)}
            />
        </View>
        </View>
       </KeyboardAvoidingView>
        )
    }

    _handleClickNextButton() {
        this.props.navigator.push({
          screen: "TwoFourApp.PostAdOne"
        });
      }
}

const styles = StyleSheet.create({

    footerControlStyle:{

        flex:0.2,
        alignItems:"flex-end",
        justifyContent:"flex-end",
        
    },
    middleControlStyle:{
        flex:1,
        justifyContent:"center",
        padding:10
    }

});
