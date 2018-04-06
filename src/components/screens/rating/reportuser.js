import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  LinearGradientButton,
  GradientNavigationBar,
  WhiteButton
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
      <View style={[CommonStyles.normalPage]}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Rate"
        />
        <View >
          <View >
            <UserImageTile />
          </View>
          <View >
            <View>
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
            <View>
              <View style={[CommonStyles.row,CommonStyles.spaceAround]}>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Scammer"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Stolen"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
              </View>
              <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Counterfiet"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Inactive"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
              </View>
              <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Suspicious"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Spammer"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
              </View>
              <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                <View  style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Offensive "}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
                <View style={[CommonStyles.paddingTenBottom]}>
                  <WhiteButton
                    buttonText={"Other"}
                    onPress={this._reportUserButtonPress.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[CommonStyles.buttonBox,{bottom:0}]}>
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"REPORT"}
              height={50}
              width={20}
              borderRadius={60}
              textPaddingTop={15}
              textColor={"#FFFFFF"}
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
