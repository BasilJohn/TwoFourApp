import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,Platform
} from "react-native";
import RadioButton from "react-native-radio-button";
import { LinearGradientButton, Spinner } from "../../common";
import CommonStyles, {
  deviceHeight,
  deviceWidth
} from "../../../styles/commonStyles";
import renderIf from '../../../common/renderif';
import { getDeviceInfo, checkIsUserLoggedIn, userNameChanged, passwordChanged, signInUser } from "../../../store/actions/auth";
import DeviceInfo from "react-native-device-info";
import { connect } from "react-redux";

class SignInScreen extends Component {
  state = {
    deviceId: "",
    macAddress: "",
    phoneNumber: "",
    ipv6: "",
    isUserPreValidated: false,
    isUserPreValidated: false,
    hidePassword: true,
    usernameErrorStatus:false,
    passwordErrorStatus:false,
    usernameErrorMsg:"",
    passwordErrorMsg:""
  };

  userNameChanged(value) {
       this.props.userNameChanged(value);
     }
  passwordChanged(value) {
       this.props.passwordChanged(value);
     }

  componentDidMount() {
    this.setState({ deviceId: DeviceInfo.getDeviceId() });
    this.setState({ phoneNumber: DeviceInfo.getPhoneNumber() });

    DeviceInfo.getMACAddress().then(mac => {
      this.setState({ macAddress: mac });
    });

    DeviceInfo.getIPAddress().then(ip => {
      this.setState({ ipv6: ip });
      let deviceInfo = {
        deviceId: this.state.deviceId,
        phoneNumber: this.state.phoneNumber,
        macAddress: this.state.macAddress,
        ipv6: this.state.ipv6
      };
      //set value in props in the last promise.
      this.props.getDeviceInfo(deviceInfo);
      this.props.checkIsUserLoggedIn(deviceInfo);
    });
  }
  
managePasswordVisibility = () =>
{
  this.setState({ hidePassword: !this.state.hidePassword });
}
validate(text, type)
{
  if(type == "username")
  {
    if(text.trim() != 0){
      this.setState({ usernameErrorStatus : true, usernameErrorMsg:""}) ;
      this.userNameChanged(text);
    }else{
        this.setState({ usernameErrorStatus : false,usernameErrorMsg:"* Please enter a username."}) ;

    }
  }

  if(type == "password")
  {
    if(text.trim() != 0){
      this.setState({ passwordErrorStatus : true, passwordErrorMsg:""}) ;
      this.passwordChanged(text);
    }else{
        this.setState({ passwordErrorStatus : false,passwordErrorMsg:"* Please enter a password."}) ;

    }
  }

}

  doSomething() { }
  handlePress = () => { };
  constructor(props) {
    super(props);
  }
  static navigatorStyle = {
    navBarHidden: true // make the nav bar hidden
  };

  renderContent() {
   
    switch (this.props.isUserAlreadyLoggedIn) {
      case false:
        return <Spinner />;
      case true:
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
                    SIGN IN
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
                      underlineColorAndroid="transparent"onChangeText={(text) => this.validate(text,"username") }
                    />
                  </View>
                  { this.state.usernameErrorStatus == false ? (
                          <Text style={styles.errorMessage}>
                            {this.state.usernameErrorMsg}
                          </Text>
                          ) : null  }
                  <View style = { styles.container }>
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
                        style={CommonStyles.textInput}  secureTextEntry = { this.state.hidePassword }
                        underlineColorAndroid="transparent"  onChangeText={(text) => this.validate(text,"password") }
                      />
                      <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                              <Image source = { ( this.state.hidePassword ) ? require('../../../assets/img/hide.png') : require('../../../assets/img/view.png') } style = { styles.btnImage } />
                      </TouchableOpacity>
                    </View>
                  </View>
                  { this.state.passwordErrorStatus == false ? (
                      <Text style={styles.errorMessage}>
                        {this.state.passwordErrorMsg}
                      </Text>
                      ) : null  }
                  <View
                    style={[
                      CommonStyles.row,
                      CommonStyles.paddingTenLeft,
                      { justifyContent: "flex-start", alignSelf: "flex-start" }
                    ]}
                  >
                    <View>
                      <RadioButton
                        animation={"bounceIn"}
                        isSelected={true}
                        onPress={() => this.doSomething("hello")}
                      />
                    </View>
                    <View style={[CommonStyles.paddingTenLeftRight]}>
                      <Text
                        style={[
                          CommonStyles.regularBold,
                          CommonStyles.greyColor,
                          CommonStyles.mediumText
                        ]}
                      >
                        Remember Me
                  </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => this._handleClickFortgotPass()}
                      >
                        <Image
                          source={require("../../../assets/img/icForgotPass.png")}
                          style={{ width: 40, height: 40 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={[CommonStyles.buttonBox]}>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"SIGN IN"}
                    height={48}
                    width={55}
                    borderRadius={60}
                    textPaddingTop={13}
                    textColor={"#FFFF"}
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
                      borderRadius={60}
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
                      borderRadius={60}
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
      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      this.renderContent()
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "TwoFourApp.SignUp"
    });
  }

  _signInButtonPress() {
    // const createTabs = () => {
    //   let tabs = [
    //     {
    //       screen: "TwoFourApp.Home",
    //       icon: require("../../../assets/img/home.png"),
    //       navigatorStyle: noNavTabbarNavigation
    //     },
    //     {
    //       screen: "TwoFourApp.Chats",
    //       icon: require("../../../assets/img/chat.png"),
    //       navigatorStyle: noNavTabbarNavigation
    //     },
    //     {
    //       screen: "TwoFourApp.PostAd",
    //       icon: require("../../../assets/img/camera.png"),
    //       navigatorStyle: noNavTabbarNavigation
    //     },
    //     {
    //       screen: "TwoFourApp.RealEstateFilter",
    //       icon: require("../../../assets/img/notification.png"),
    //       navigatorStyle: noNavTabbarNavigation
    //     },
    //     {
    //       screen: "TwoFourApp.UserProfile",
    //       icon: require("../../../assets/img/profile.png"),
    //       navigatorStyle: noNavTabbarNavigation
    //     }
    //   ];
    //   return tabs;
    // };
    // Navigation.startTabBasedApp({
    //   tabs: createTabs(),
    //   appStyle: {
    //     orientation: 'portrait',
    //     tabBarHidden: true,
    //   },
    //   animationType: 'slide-down'
    // });
  //  console.log("this.props - Before",this.props)

    this.props.signInUser(this.props);

  //  console.log("this.props - after",this.props)
  //  console.log("this.props.isUserAuthenticated",this.props.isUserAuthenticated)

    if(this.props.isUserAuthenticated)
    {

      this.props.navigator.puzzz({
        screen: "TwoFourApp.Home"
      });
    }
    else{
      this.setState({ passwordErrorStatus : false,passwordErrorMsg:"* Incorrect username/password."}) ;
    }
  }
  _handleClickFortgotPass() {
    this.props.navigator.push({
      screen: "TwoFourApp.ForgotPassword"
    });
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 52,
    marginTop: spaceHeight * 0.1,
    marginBottom: spaceHeight * 0.18,
    justifyContent: "center",
    alignItems: "center"
  },
  formBox: {
    height: 190,
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
  },
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
 
  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
 
  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5
  },
 
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  errorMessage: {
    fontSize: 14,
    color:"red",
    marginLeft:-150,
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }
});

const mapStateToProps = ({ auth }) => {
  const { userName, password, isUserAuthenticated,deviceInfo, isUserAlreadyLoggedIn } = auth;
  return { userName, password, isUserAuthenticated,deviceInfo, isUserAlreadyLoggedIn };
};

export default connect(
  mapStateToProps,
  {
    userNameChanged, passwordChanged, signInUser,getDeviceInfo, checkIsUserLoggedIn
  }
)(SignInScreen);
