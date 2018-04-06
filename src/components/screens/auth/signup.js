import React, { Component } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Navigation } from "react-native-navigation";
import RadioButton from "react-native-radio-button";
import { LinearGradientButton } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";

export default class SignUpScreen extends Component {
  doSomething(value) {
    // this.setState({
    //   //
    // })
  }
  handlePress = () => {};
  constructor(props) {
    super(props);
  }
  static navigatorStyle = {
    navBarHidden: true // make the nav bar hidden
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          style={CommonStyles.keyboardAvoidingViewContainer}
        >
          <View style={CommonStyles.normalSinglePage}>
            <View style={styles.titleBox}>
              <Text
                style={[CommonStyles.extraLargeText, CommonStyles.blackColor]}
              >
                SIGN UP
              </Text>
            </View>
            <View style={[styles.formBox, CommonStyles.spaceAround]}>
              <View style={[CommonStyles.signInTextInputField]}>
                <Image
                  source={require("../../../assets/img/avatar.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 19,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Username"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={CommonStyles.signInTextInputField}>
                <Image
                  source={require("../../../assets/img/padlock.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 17,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Password"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={CommonStyles.signInTextInputField}>
                <Image
                  source={require("../../../assets/img/padlock.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 17,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Confirm Password"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={CommonStyles.signInTextInputField}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/img/envelope.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 17,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Email Id"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={[CommonStyles.buttonBox]}>
              <LinearGradientButton
                colorOne={"#3D88A7"}
                colorTwo={"#3972A0"}
                colorThree={"#355F9A"}
                buttonText={"SIGN UP"}
                height={50}
                width={20}
                borderRadius={60}
                textPaddingTop={15}
                textColor={'#FFFF'}
                onPress={this._signInButtonPress.bind(this)}
              />
            </View>
            <View style={[CommonStyles.alignCenter]}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.greyColor,
                  CommonStyles.semiBold
                ]}
              >
                {"Or Social Login"}
              </Text>
            </View>
            <View
              style={[
                CommonStyles.buttonBox,
                CommonStyles.row,
                CommonStyles.spaceBetween
              ]}
            >
              <View>
                <LinearGradientButton
                  colorOne={"#4A90E2"}
                  colorTwo={"#4A90E2"}
                  colorThree={"#4A90E2"}
                  buttonText={"FACEBOOK"}
                  height={50}
                  width={210}
                  borderRadius={50}
                  textPaddingTop={15}
                  textColor={'#FFFF'}
                  onPress={this.handlePress.bind(this)}
                />
              </View>
              <View>
                <LinearGradientButton
                  colorOne={"#D77056"}
                  colorTwo={"#D77056"}
                  colorThree={"#D77056"}
                  buttonText={"GOOGLE"}
                  height={50}
                  width={210}
                  borderRadius={50}
                  textPaddingTop={15}
                  textColor={'#FFFF'}
                  onPress={this.handlePress.bind(this)}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.noteBox}>
          <Text
            style={[
              CommonStyles.regularBold,
              CommonStyles.normalText,
              CommonStyles.lightgreyColor
            ]}
          >
            Don't have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => this._goToSignUpScreen()}>
            <View style={{ marginLeft: 5 }}>
              <Text
                style={[
                  CommonStyles.regularBold,
                  CommonStyles.normalText,
                  CommonStyles.softBlueColor
                ]}
              >
                SIGN UP
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "TwoFourApp.SignUp"
    });
  }

  _signInButtonPress() {
    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });
  }
  _handleClickFortgotPass() {
    this.props.navigator.push({
      // screen: "Healer.ForgotPasswordScreen"
    });
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 52,
    marginTop: spaceHeight * 0.1,
    marginBottom: spaceHeight * 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  formBox: {
    height: 250,
    alignItems: "center",
    marginBottom: spaceHeight * 0.05
  },
  subFormBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth - 85,
    height: 45
  },
  noteBox: {
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  }
});
