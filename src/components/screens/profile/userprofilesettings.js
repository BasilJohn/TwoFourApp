import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { LinearGradientButton, GradientNavigationBar } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import { getUserSettingsInfo } from "../../../store/actions/user";


class UserProfileSetting extends React.Component {

  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {
      userSettingsData:{}
    };
  }
  
  _handleClickSaveButton() {}

  _signOutButtonPress() {}

  componentDidMount(){
    this.props.getUserSettingsInfo(1);
  }

  componentDidUpdate(prevProps){

    if(this.props.userSettingsData!==prevProps.userSettingsData){
      this.setState({userSettingsData:this.props.userSettingsData})
    }

  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Profile Settings"
          rightButtons={[
            {
              key: 1,
              buttonIcon: require("../../../assets/img/save.png"),
              buttonAction: this._handleClickSaveButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View>
              <Image
                source={require("../../../assets/img/photo-camera.png")}
                style={{ width: 100, height: 100 }}
              />
            </View>
          </View>

          <View style={[styles.titleBox, { flex: 0.2 }]}>
            <Text
              style={[
                CommonStyles.mediumText,
                CommonStyles.greyColor,
                CommonStyles.mediumBold,
                CommonStyles.paddingTen,
                { alignSelf: "flex-start" }
              ]}
            >
              Profile
            </Text>
          </View>
          <KeyboardAvoidingView>
            <View style={[styles.formBox, CommonStyles.spaceAround]}>
              <View style={[CommonStyles.squareTextInputField]}>
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
                  placeholder="User Name"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                  value={this.props.userSettingsData.supplierName}
                />
              </View>
              <View style={CommonStyles.squareTextInputField}>
                <Image
                  source={require("../../../assets/img/envelope.png")}
                  resizeMode="contain"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 19,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Email"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                  value={this.props.userSettingsData.supplierEmail}
                />
              </View>
              <View style={CommonStyles.squareTextInputField}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/img/padlock.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 19,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Password"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                  // value={}
                />
              </View>
              <View style={CommonStyles.squareTextInputField}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/img/phone-call.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 19,
                    height: 22
                  }}
                />
                <TextInput
                  placeholder="Mobile Number"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                  value={this.props.userSettingsData.mobileNumber}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[styles.titleBox,{marginBottom:10}]}>
            <Text
              style={[
                CommonStyles.mediumText,
                CommonStyles.greyColor,
                CommonStyles.mediumBold,
                CommonStyles.paddingTen,
                { alignSelf: "flex-start" }
              ]}
            >
              Support
            </Text>
          </View>
          <KeyboardAvoidingView>
            <View style={[styles.formBox]}>
              <View style={[CommonStyles.squareTextInputField,{marginBottom:20}]}>
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
                  editable={false}
                  placeholder="Help"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
                <Image
                  source={require("../../../assets/img/nextIcon.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 20,
                    width: 19,
                    height: 22
                  }}
                />
              </View>
              <View style={[CommonStyles.squareTextInputField,{marginBottom:20}]}>
                <Image
                  source={require("../../../assets/img/avatar.png")}
                  resizeMode="contain"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 20,
                    width: 19,
                    height: 22
                  }}
                />
                <TextInput
                  editable={false}
                  placeholder="Terms and Conditions"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
                <Image
                  source={require("../../../assets/img/nextIcon.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 20,
                    width: 19,
                    height: 22
                  }}
                />
              </View>
              <View style={[CommonStyles.squareTextInputField,{marginBottom:20}]}>
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
                  editable={false}
                  placeholder="Privacy Policy"
                  style={CommonStyles.textInput}
                  underlineColorAndroid="transparent"
                />
                <Image
                  source={require("../../../assets/img/nextIcon.png")}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 20,
                    width: 19,
                    height: 22
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={[CommonStyles.buttonBox]}>
          <LinearGradientButton
            colorOne={"#3D88A7"}
            colorTwo={"#3972A0"}
            colorThree={"#355F9A"}
            buttonText={"SIGN OUT"}
            height={48}
            width={55}
            borderRadius={60}
            textPaddingTop={13}
            textColor={"#FFFFFF"}
            onPress={this._signOutButtonPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}
const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 30,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  formBox: {
    height: 250,
    alignItems: "center",
    marginBottom: spaceHeight * 0.05
  }
});

const mapStateToProps = ({ user }) => {
  const { userSettingsData} = user;
  return { userSettingsData };
};

export default connect(
  mapStateToProps,
  {
    getUserSettingsInfo
  }
)(UserProfileSetting);
