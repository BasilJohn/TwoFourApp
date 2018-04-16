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
import {
  ImageButton,
  GradientNavigationBar,
  Button,
  LinearGradientButton
} from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import { SearchBar } from "react-native-elements";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import {
  priceChanged,
  isNegotiableChanged,
  isFreeChanged,
  descriptionChanged
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
                      CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                    ]}
                  >
                    Price USD
                  </Text>
                </View>
                <View style={[CommonStyles.squareTextInputField,CommonStyles.alignCenter]}>
                  <TextInput
                    style={CommonStyles.textInputNoLeftImage}
                    placeholder="Price"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onPriceChanged.bind(this)}
                  />
                </View>
              </View>
              <View style={CommonStyles.switchBoxStyle}>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                  ]}
                >
                  Negotiable
                </Text>
                <Switch
                  onValueChange={this.onIsNegotiableChange}
                  value={this.props.isNegotiable}
                />
              </View>
              <View style={CommonStyles.switchBoxStyle}>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                  ]}
                >
                  Free
                </Text>
                <Switch
                  onValueChange={this.onIsFreeChange}
                  value={this.props.isFree}
                />
              </View>
              <View>
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
              onPress={this._handleClickSignUpButton.bind(this)}
            />
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

const mapStateToProps = ({ ad }) => {
  const { price, isNegotiable, isFree, description } = ad;
  return { price, isNegotiable, isFree, description };
};

export default connect(mapStateToProps, {
  priceChanged,
  isNegotiableChanged,
  isFreeChanged,
  descriptionChanged
})(PostAd);
