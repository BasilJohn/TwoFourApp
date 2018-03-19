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
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Navigation } from "react-native-navigation";

import { LinearGradientButton } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";

export default class ForgotPasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    orientation: "portrait"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          style={CommonStyles.keyboardAvoidingViewContainer}
        >
          <View style={CommonStyles.normalSinglePage}>
            <View style={styles.titleBox}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                FORGOT PASSWORD
              </Text>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {
                    width: deviceWidth - 90,
                    marginTop: 15,
                    textAlign: "center"
                  }
                ]}
              >
                We just need your registered Email to send you password reset
                intruction
              </Text>
            </View>
            <View style={styles.formBox}>
              <View style={CommonStyles.textInputField}>
                <Image
                  source={require("../../../assets/img/envelope.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 22,
                    height: 17
                  }}
                />
                <TextInput
                  placeholder="Email"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={CommonStyles.buttonBox}>
              <LinearGradientButton
                colorOne={"#3D88A7"}
                colorTwo={"#3972A0"}
                colorThree={"#355F9A"}
                buttonText={"SEND EMAIL"}
                height={60}
                width={20}
                borderRadius={60}
                textColor={'#FFFF'}
                onPress={this._handleResetPassword.bind(this)}
              />
            </View>
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
              <TouchableWithoutFeedback
                onPress={() => this._handleClickSignUp()}
              >
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
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  _handleResetPassword() {
    this.props.navigator.push({
      screen: "TwoFourApp.SignIn"
    });
  }

  _handleClickSignUp() {
    this.props.navigator.push({
      screen: "TwoFourApp.SignUp"
    });
  }
}

const styles = StyleSheet.create({
  titleBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 48
  },
  formBox: {
    alignItems: "center"
  },
  noteBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 15
  }
});
