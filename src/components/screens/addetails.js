import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import ProfileTile from "./profile/profiletile";
import CommonStyles, { deviceHeight } from "../../styles/commonStyles";
import {
  DetailItem,
  PrimeButton,
  ImageSlider,
  LinearGradientButton,
  GradientNavigationBar
} from "../common";
import { SocialIcon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";

const deviceWidth = Dimensions.get("window").width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

export default class App extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  handlePress = () => {};
  _reportUserButtonPress() {
    this.props.navigator.push({
      screen: "TwoFourApp.ReportUser",
      title: "Rate"
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
              //buttonAction: this._handleClickSettingsButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <ImageSlider />
          </View>
          <View style={styles.productNameContainer}>
            <View style={{ flex: 0.8 }}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.darkSkyBlueColor,
                  CommonStyles.semiBold
                ]}
              >
                {"$ 999.00"}
              </Text>
            </View>
            <View style={[CommonStyles.row]}>
              <View style={{ flex: 0.8 }}>
                <Text
                  style={[
                    CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.semiBold
                  ]}
                >
                  {"Samsung Galaxy S8-256GB"}
                </Text>
              </View>
              <View style={{ flex: 0.2 }}>
                <Ionicons
                  style={CommonStyles.horizontalRight}
                  name={"md-heart-outline"}
                  color={"black"}
                  size={40}
                />
              </View>
            </View>
            <View>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.light
                ]}
              >
                {"Posted 2 hours ago"}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <ProfileTile />
            <View style={CommonStyles.wrapperBox}>
              <DetailItem
                headerText="Description"
                detailText="Apple iPhone 6 used phone recently bought 32 gb internal condition urgent sale low price are not be entertained please!"
              />
            </View>
            <View style={styles.headerContainer}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold,
                  { marginBottom: 2, alignSelf: "flex-start" }
                ]}
              >
                {"Share Ad"}
              </Text>
            </View>
            <View style={styles.socialIconContainer}>
              <View style={CommonStyles.row}>
                <View>
                  <SocialIcon
                    button
                    style={styles.socialIconStyle}
                    type="facebook"
                  />
                </View>
                <View>
                  <SocialIcon
                    button
                    style={styles.socialIconStyle}
                    type="google-plus-official"
                  />
                </View>
                <View>
                  <SocialIcon
                    button
                    style={styles.socialIconStyle}
                    type="instagram"
                  />
                </View>
                <View>
                  <SocialIcon
                    button
                    style={styles.socialIconStyle}
                    type="twitter"
                  />
                </View>
              </View>
              <View style={CommonStyles.paddingTenLeftRight}>
                <TouchableOpacity
                  onPress={this._reportUserButtonPress.bind(this)}
                  style={styles.reportButtonStyle}
                >
                  <Image resizeMode={'cover'}
                    source={require("../../assets/img/danger.png")}
                    style={{
                      position: "absolute",
                      top: 13,
                      left: 15,
                      width: 20,
                      height: 17
                    }}
                  />
                  <Text style={styles.reportButtonTextStyle}>{"Report"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={[
            CommonStyles.row,
            { justifyContent: "space-between", padding: 10 }
          ]}
        >
          <LinearGradientButton
            colorOne={"#3D88A7"}
            colorTwo={"#3972A0"}
            colorThree={"#355F9A"}
            buttonText={"Message"}
            height={50}
            width={195}
            borderRadius={60}
            textPaddingTop={15}
            textColor={"#FFFF"}
            onPress={this.handlePress.bind(this)}
          />
          <View>
            <TouchableOpacity style={styles.offerButtonStyle}>
              <Text style={styles.offerButtonTextStyle}>{"Make Offer"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const spaceHeight = 70;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight / 2.2,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#E9E9E9",
    elevation: 3
  },
  headerContainer: {
    alignSelf: "flex-start",
    marginBottom: 2,
    paddingLeft: 10
  },
  socialIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    padding: 0
  },
  productNameContainer: {
    padding: 10,
    paddingTop: 25
  },
  offerButtonStyle: {
    width: deviceWidth - 195,
    backgroundColor: "#7B7B7B",
    height: 50,
    borderRadius: 30
  },
  reportButtonStyle: {
    width: deviceWidth - 210,
    backgroundColor: "white",
    height: 45,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#7A7A7A"
  },
  reportButtonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#7A7A7A",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    paddingTop: 10
  },
  offerButtonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    paddingTop: 15
  },
  socialIconStyle: {
    height: 40,
    width: 40,
    borderRadius: 60,
    margin: 3,
    padding: 0
  }
});
