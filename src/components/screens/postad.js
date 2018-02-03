import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ImageButton, Input } from '../common';
import CommonStyles from '../../styles/commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostAd extends Component {
    render(){
        return(
         <View style={CommonStyles.normalSinglePage}>
        <View style={CommonStyles.postPageImageBox}>
        <Ionicons  name={'ios-add-circle-outline'} color={"black"} size={100} />
        </View>
        <View style={CommonStyles.postPageTextBox}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold
          ]}>
            TITLE
          </Text>
          <View style={{width:80}}>
          <Input
                    placeholder={""}
                    inputText={""}
                    value={""}
                    onChangeText={this._handleClickNextButton.bind(this)}
                  />
          </View>
        </View>
         <View  style={CommonStyles.postPageButton}>
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
        )
    }

    _handleClickNextButton() {
        this.props.navigator.push({
          screen: "TwoFourApp.PostAdOne"
        });
      }
}
