import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  ScrollView,
  Alert
} from "react-native";
import {
  GradientNavigationBar,
  LinearGradientButton
} from "../common";
import CommonStyles, {
  deviceHeight
} from "../../styles/commonStyles";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import {
  priceChanged,
  isNegotiableChanged,
  isFreeChanged,
  descriptionChanged,
  postAd
} from "../../store/actions/ad";
import { connect } from "react-redux";

class PostAd extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor() {
    super();
    this.onIsNegotiableChange = this.onIsNegotiableChange.bind(this);
    this.onIsFreeChange = this.onIsFreeChange.bind(this);
  }

  onPriceChanged(text) {
    this.props.priceChanged(text);
  }

  onIsNegotiableChange(value) {
    this.props.isNegotiableChanged(value);
  }

  onIsFreeChange(value) {
    this.props.isFreeChanged(value);
  }

  onDescriptionChange(text) {
    this.props.descriptionChanged(text);
  }

  _handleClickPostAdButton() {

    this.props.postAd(this.props);
  }

  _handleCancelButton = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "Yes",
          onPress: this.openHomeScreen.bind(this),
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );

  }

  openHomeScreen() {
    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });

  }

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
              buttonAction: this._handleCancelButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22,
              textButton: 'Cancel'
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
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    Price USD
                  </Text>
                </View>
                <View style={[CommonStyles.postAddPriceextInputField, CommonStyles.alignCenter]}>
                  <TextInput
                    style={CommonStyles.textInputNoLeftImage}
                    placeholder="Price"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onPriceChanged.bind(this)}
                  />
                </View>
              </View>
              <View style={[CommonStyles.switchBoxStyle]}>
                <View style={{ marginRight: 30 }}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    Negotiable
                </Text>
                </View>
                <View>
                  <Switch
                    onValueChange={this.onIsNegotiableChange}
                    value={this.props.isNegotiable}
                  />
                </View>
              </View>
              <View style={[CommonStyles.switchBoxStyle]}>
                <View style={{ marginRight: 85 }}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    Free
                </Text>
                </View>
                <View>
                  <Switch
                    onValueChange={this.onIsFreeChange}
                    value={this.props.isFree}
                  />
                </View>
              </View>
              <View >
                <View style={[CommonStyles.paddingTen]}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
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
                    onChangeText={this.onDescriptionChange.bind(this)}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[CommonStyles.buttonBox]}>
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"POST AD"}
              height={50}
              width={20}
              borderRadius={60}
              textPaddingTop={15}
              textColor={"#FFFFFF"}
              onPress={this._handleClickPostAdButton.bind(this)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}



const mapStateToProps = ({ ad, auth }) => {
  const { price, isNegotiable, isFree, description, title, categoryId, selectedImageArray } = ad;
  const { deviceInfo } = auth;
  return { price, isNegotiable, isFree, description, title, categoryId, selectedImageArray, deviceInfo };
};

export default connect(mapStateToProps, {
  priceChanged,
  isNegotiableChanged,
  isFreeChanged,
  descriptionChanged,
  postAd
})(PostAd);
