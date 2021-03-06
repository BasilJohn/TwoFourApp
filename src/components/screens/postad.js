import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { ImageButton, GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { titleChanged } from "../../store/actions/ad";
import { connect } from "react-redux";
import { _ } from "lodash";
import ImagePicker from "react-native-image-crop-picker";

const window = Dimensions.get("window");

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;
class PostAd extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      writeTempFile:false
    }).then(image => {
      console.log(image);
    });
  }

  openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      multiple:true,
      writeTempFile:false
    }).then(images => {
      console.log(images);
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
              buttonIcon: require("../../assets/img/settings.png"),
              buttonAction: this._handleClickNextButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 50 }}>
          <KeyboardAvoidingView
            style={CommonStyles.keyboardAvoidingViewContainer}
          >
            <View>
              <View style={CommonStyles.addImageContainer}>
                <View style={[CommonStyles.row]}>
                  <View >
                    <TouchableWithoutFeedback onPress={this.openCamera.bind(this)}>
                      <Image
                        source={require("../../assets/img/postAdCamera.png")}
                        style={{ width: 50, height: 50 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{paddingLeft:30}}>
                    <TouchableWithoutFeedback onPress={this.openPicker.bind(this)}>
                      <Image
                        source={require("../../assets/img/postAdGallery.png")}
                        style={{ width: 50, height: 50 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
                <View style={CommonStyles.addedImageContainer}>
                  <Image
                    source={require("../../assets/img/photo.png")}
                    style={{ width: 40, height: 40 }}
                  />
                  <Image
                    source={require("../../assets/img/photo.png")}
                    style={{ width: 40, height: 40 }}
                  />
                  <Image
                    source={require("../../assets/img/photo.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.semiBold
                  ]}
                >
                  TITLE
                </Text>
              </View>
              <View style={[CommonStyles.textInputField]}>
                <TextInput
                  style={[CommonStyles.textInputNoLeftImage]}
                  placeholder="Sell somethings"
                  underlineColorAndroid="transparent"
                  onChangeText={this.onTitleChanged.bind(this)}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[styles.footerControl, CommonStyles.introPageButtonBox]}>
            <View style={CommonStyles.introPageButton} />
            <View style={CommonStyles.introPageButton}>
              <ImageButton
                style={[CommonStyles.nextButton]}
                styleImage={CommonStyles.nextButton}
                appearance={{
                  normal: require("../../assets/img/next.png"),
                  highlight: require("../../assets/img/next.png")
                }}
                onPress={this._handleClickNextButton.bind(this)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickNextButton() {
    this.props.navigator.push({
      screen: "TwoFourApp.PostAdOne"
    });
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  middleControl: {
    flex: 1
  },
  footerControl: {
    alignItems: "flex-end"
  }
});

const mapStateToProps = ({ ad }) => {
  const { title } = ad;
  return { title };
};

export default connect(mapStateToProps, { titleChanged })(PostAd);
