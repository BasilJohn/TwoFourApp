import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import DeviceInfo from "react-native-device-info";
import { LinearGradientButton } from "../../common";
import CommonStyles, {
  deviceHeight,
  deviceWidth
} from "../../../styles/commonStyles";
import { connect } from "react-redux";

import {
  userNameChanged,
  passwordChanged,
  confirmPasswordChanged,
  emailChanged,
  signUpUser
  } from "../../../store/actions/auth";
class SignUpScreen extends Component {
  userNameChanged(value) {
    this.props.userNameChanged(value);
  }
  passwordChanged(value) {
    this.props.passwordChanged(value);
  }
  confirmPasswordChanged(value) {
    this.props.confirmPasswordChanged(value);
  }
  emailChanged(value) {
    this.props.emailChanged(value);
  }

  _signUpButtonPress() {
        
    this.props.signUpUser(this.props);

    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });
  }
  doSomething() {
    // this.setState({
    //   //
    // })
  }
  handlePress = () => { };
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
                  onChangeText={this.userNameChanged.bind(this)}
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
                  onChangeText={this.passwordChanged.bind(this)}
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
                  onChangeText={this.confirmPasswordChanged.bind(this)}
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
                  onChangeText={this.emailChanged.bind(this)}
                />
              </View>
            </View>
            <View style={[CommonStyles.buttonBox]}>
              <LinearGradientButton
                colorOne={"#3D88A7"}
                colorTwo={"#3972A0"}
                colorThree={"#355F9A"}
                buttonText={"SIGN UP"}
                height={48}
                width={55}
                borderRadius={60}
                textPaddingTop={13}
                textColor={"#FFFF"}
                onPress={this._signUpButtonPress.bind(this)}
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
                CommonStyles.spaceAround
              ]}
            >
              <View style={{ width: deviceWidth / 2 - 20 }}>
                <LinearGradientButton
                  colorOne={"#4A90E2"}
                  colorTwo={"#4A90E2"}
                  colorThree={"#4A90E2"}
                  buttonText={"FACEBOOK"}
                  height={43}
                  //width={250}
                  borderRadius={50}
                  textPaddingTop={10}
                  textColor={"#FFFF"}
                  onPress={this.handlePress.bind(this)}
                />
              </View>
              <View style={{ width: deviceWidth / 2 - 20 }}>
                <LinearGradientButton
                  colorOne={"#D77056"}
                  colorTwo={"#D77056"}
                  colorThree={"#D77056"}
                  buttonText={"GOOGLE"}
                  height={43}
                  //width={250}
                  borderRadius={50}
                  textPaddingTop={10}
                  textColor={"#FFFF"}
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
            Already have an account?
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
                SIGN IN
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "TwoFourApp.SignIn"
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

const mapStateToProps = ({ auth }) => {
  const { userName, password, confirmPassword, emailId, deviceInfo } = auth;
  return { userName, password, confirmPassword, emailId, deviceInfo };
};

export default connect(
  mapStateToProps,
  {
    userNameChanged,
    passwordChanged,
    confirmPasswordChanged,
    emailChanged,
    signUpUser
  }
)(SignUpScreen);
