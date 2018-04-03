import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight
} from "react-native";
import { LinearGradientButton, GradientNavigationBar } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import ChatItemList from "../userItems/chatitemlist";

export default class SellingItem extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.navigator.push({
      screen: "TwoFourApp.AdDetails"
    });
  };

  _openAdEditScreen = () => {
    this.props.navigator.push({
      screen: "TwoFourApp.AdDetails"
    });
  };

  render(props) {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Selling Item"
        />
        <View style={styles.containerStyle}>
          <View style={[CommonStyles.row, CommonStyles.paddingTen]}>
            <View stlyle={[CommonStyles.paddingTenTop]}>
              <Image
                style={styles.productStyle}
                borderRadius={50}
                source={{ uri: "http://lorempixel.com/400/200/" }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingLeft: 20
              }}
            >
              <View style={[CommonStyles.paddingTenBottom]}>
                <Text
                  style={[
                    CommonStyles.itemHeaderText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold,
                    { marginTop: -6 }
                  ]}
                >
                  Macbook Pro Retina
                </Text>
              </View>
              <View style={[CommonStyles.row, CommonStyles.paddingTenBottom]}>
                <View>
                  <Text
                    style={[
                      CommonStyles.normalText,
                      CommonStyles.darkSkyBlueColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    {"$ 999.00"}
                  </Text>
                </View>
                <View style={[CommonStyles.paddingTenLeft]}>
                  <Text
                    style={[
                      CommonStyles.normalText,
                      CommonStyles.greyColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    30 views
                  </Text>
                </View>
              </View>
              <View style={[CommonStyles.row]}>
                <View>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"Mark As Sold"}
                    height={40}
                    width={195}
                    borderRadius={60}
                    textPaddingTop={10}
                    textColor={"#FFFF"}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
                <View style={{ paddingLeft: 20 }}>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={this._openAdEditScreen.bind(this)}
                  >
                    <Image
                      resizeMode="cover"
                      style={styles.socialStyle}
                      borderRadius={5}
                      source={require("../../../assets/img/pencil.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <ChatItemList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    //flex: 0.5,
    backgroundColor: "#FFFFFF",
    elevation: 6
  },
  imageStyle: {
    height: 70,
    width: 70
  },
  productStyle: {
    height: 90,
    width: 90
  },
  socialStyle: {
    height: 40,
    width: 40
  }
});
