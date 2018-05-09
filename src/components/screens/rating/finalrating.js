import React from "react";
import { View, Text, Image, StyleSheet,Alert } from "react-native";
import { LinearGradientButton, GradientNavigationBar } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import ChatUserList from "../../screens/rating/chatuserlist";

export default class FinalRating extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  _handleCancelButton = () => {
    Alert.alert(
  "Skip",
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

openHomeScreen(){
this.props.navigator.push({
  screen: "TwoFourApp.Home"
});

}

  render(props) {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Rate"
          rightButtons={[
            {
              key: 1,
              //buttonIcon: require("../../assets/img/settings.png"),
              buttonAction: this._handleCancelButton.bind(this),
              //buttonWidth: 22,
              buttonHeight: 22,
              textButton:'Skip'
            }
          ]}
        />
        <View style={styles.clapContainerStyle}>
          <View style={[CommonStyles.paddingTen, CommonStyles.alignCenter]}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              borderRadius={50}
              source={require("../../../assets/img/clap.png")}
            />
          </View>
          <View
            style={[CommonStyles.paddingTenLeftRight, CommonStyles.alignCenter]}
          >
            <Text
              style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.semiBold
              ]}
            >
              CONGRATULATIONS
            </Text>
          </View>
          <View style={[CommonStyles.paddingTen, CommonStyles.alignCenter]}>
            <Text
              style={[
                CommonStyles.mediumText,
                CommonStyles.blackColor,
                CommonStyles.regularBold
              ]}
            >
              Rate your experience
            </Text>
          </View>
        </View>
        <View style={{ height: 200 }}>
          <ChatUserList navigatorProps={this.props.navigator} />
        </View>
        <View style={[CommonStyles.paddingTen]}>
          <View>
            <Text
              style={[
                CommonStyles.extraSmallText,
                CommonStyles.softBlueColor,
                CommonStyles.regularBold
              ]}
            >
              {"Show More"}
            </Text>
          </View>
          <View style={[styles.finalContainerStyle,CommonStyles.row]}>
            <View style={[{flex:0.9},CommonStyles.paddingTen]}>
              <View>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.titleGreyColor,
                    CommonStyles.mediumBold
                  ]}
                >
                  Sold it somewhere else
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.extraSmallText,
                    CommonStyles.smallTextGreyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  I didn't sell this on 2Four
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <Ionicons
                style={styles.button}
                color={"#7B7B7B"}
                name="ios-arrow-forward-outline"
                size={30}
              />
            </View>  
          </View>
          <View style={[styles.finalContainerStyle,CommonStyles.row,CommonStyles.paddingTen]}>
            <View style={{flex:0.9}}>
              <View>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.titleGreyColor,
                    CommonStyles.mediumBold
                  ]}
                >
                  I'll do this later
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.extraSmallText,
                    CommonStyles.smallTextGreyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  Rate the buyer later
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <Ionicons
                style={styles.button}
                color={"#7B7B7B"}
                name="ios-arrow-forward-outline"
                size={30}
              />
            </View>  
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 90,
    width: 150
  },
  clapContainerStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 5,
    borderBottomWidth:0.3,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000000', 
    shadowOpacity: 0.4, 
    shadowRadius: 3
  },
  finalContainerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#7B7B7B",
    backgroundColor: "#FFFFFF"
  },
  arrowStyle: {
    justifyContent: "flex-end",
    flex: 0.1,
    alignSelf: "flex-end"
  },
});
