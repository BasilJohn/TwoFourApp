import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  ScrollView
} from "react-native";
import { ImageButton, GradientNavigationBar,Button,LinearGradientButton } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import { SearchBar } from "react-native-elements";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";

export default class PostAd extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.onControlChange = this.onControlChange.bind(this);
  }

  onControlChange(value) {
    return this.setState({
      isOpen: !this.state.isOpen
    });
  }
  _handleClickSignUpButton() {}
  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Post Ad"
          rightButtons={[
            {
              key: 1,
              //buttonIcon: require("../../assets/img/settings.png"),
              //buttonAction: this._handleClickSettingsButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <KeyboardAvoidingView
            style={[CommonStyles.keyboardAvoidingViewContainer]}
          >
            <View
              style={{
                height: deviceHeight / 1.5,
                justifyContent: "space-around"
              }}
            >
              <View>
                <View style={[CommonStyles.paddingTen]}>
                  <Text
                    style={[
                      CommonStyles.headerText,
                      CommonStyles.blackColor,
                      CommonStyles.mediumBold
                    ]}
                  >
                    Price USD
                  </Text>
                </View>
                <View style={[CommonStyles.textInputField]}>
                  <TextInput
                    style={CommonStyles.textInputNoLeftImage}
                    placeholder="Price"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View style={CommonStyles.switchBoxStyle}>
                <Text
                  style={[
                    CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold
                  ]}
                >
                  Negotiable
                </Text>
                <Switch
                  onValueChange={this.onControlChange}
                  value={this.state.isOpen}
                />
              </View>
              <View style={CommonStyles.switchBoxStyle}>
                <Text
                  style={[
                    CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold
                  ]}
                >
                  Free
                </Text>
                <Switch
                  onValueChange={this.onControlChange}
                  value={this.state.isOpen}
                />
              </View>
              <View>
                <View style={[CommonStyles.paddingTen]}>
                  <Text
                    style={[
                      CommonStyles.headerText,
                      CommonStyles.blackColor,
                      CommonStyles.mediumBold
                    ]}
                  >
                    Description (optional)
                  </Text>
                </View>
                <View style={[CommonStyles.multiLinetextInputField]}>
                  <TextInput
                    style={CommonStyles.multiLinetextInput}
                    placeholder="Write few lines about your products"
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={5}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[CommonStyles.buttonBox]}>
          <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'POST AD'} 
              height={60} 
              width={20}
              borderRadius={60}
              textPaddingTop={20}
              onPress={this._handleClickSignUpButton.bind(this)} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  footerControl: {
    alignItems: "center"
  }
});
