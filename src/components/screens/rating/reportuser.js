import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  LinearGradientButton,
  GradientNavigationBar,
  Button
} from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
  spaceHeight
} from "../../../styles/commonStyles";

import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import UserImageTile from "../../common/userimagetile";
import { Rating } from "react-native-elements";

export default class ReportUser extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  _reportUserButtonPress() {}

  render(props) {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Rate"
        />
        <View>
          <View>
            <UserImageTile />
          </View>
          <View style={[styles.titleBox]}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.greyColor,
                  CommonStyles.semiBold,
                  CommonStyles.paddingTen
                ]}
              >
                What you want to report
              </Text>
            </View>
            <View style={[CommonStyles.row, CommonStyles.spaceBetween]}>
              <View>
                <LinearGradientButton
                  colorOne={"#FFFF"}
                  colorTwo={"#FFFF"}
                  colorThree={"#FFFF"}
                  buttonText={"Scammer"}
                  height={50}
                  width={250}
                  borderRadius={10}
                  textPaddingTop={10}
                  textColor={'#A5A5A5'}
                  onPress={this._reportUserButtonPress.bind(this)}
                />
              </View>
              <View>
                <LinearGradientButton
                  colorOne={"#FFFF"}
                  colorTwo={"#FFFF"}
                  colorThree={"#FFFF"}
                  buttonText={"Stolen"}
                  height={50}
                  width={250}
                  borderRadius={10}
                  textPaddingTop={10}
                  textColor={'#A5A5A5'}
                  onPress={this._reportUserButtonPress.bind(this)}
                />
              </View>
            </View>
          </View>
          <View
            style={[
              CommonStyles.buttonBox,
              {
                bottom: 0
              }
            ]}
          >
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"REPORT"}
              height={60}
              width={20}
              borderRadius={60}
              textPaddingTop={20}
              textColor={'#FFFFFF'}
              onPress={this._reportUserButtonPress.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileImageStyle: {
    height: 40,
    width: 40
  },
  titleBox: {
    height: 52,
    marginTop: spaceHeight * 0.1,
    justifyContent: "center",
    alignItems: "center"
  }
});
