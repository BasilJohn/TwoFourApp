import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Alert
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

  openUserRatingScreen(){
   // console.log('text')
    this.props.navigator.push({
      screen: "TwoFourApp.FinalRating",
      title:"Rate"
    });
  }

  handlePress = () => {
    Alert.alert(
      "Mark as sold",
      "This item cant be undone once marked as sold.Confirm?",
      [
        {
          text: "Yes",
          onPress: this.openUserRatingScreen.bind(this),
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );
  };

  

  _openAdEditScreen = () => {
    this.props.navigator.push({
      screen: "TwoFourApp.PostAd"
    });
  };

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
          titleText="Selling Item"
          rightButtons={[
            {
              key: 1,
              //buttonIcon: require("../../assets/img/settings.png"),
              buttonAction: this._handleCancelButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22,
              textButton:'Cancel'
            }
          ]}
          
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
                    CommonStyles.mediumText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold,
                    { marginTop: -6 }
                  ]}
                >
                  Macbook Pro Retina
                </Text>
              </View>
              <View style={[CommonStyles.row, CommonStyles.spaceBetween,{marginTop:5}]}>
                <View>
                  <Text
                    style={[
                      CommonStyles.normalText,
                      CommonStyles.darkSkyBlueColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    {"$ 9999999.00"}
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
                <View style={{marginTop:10}}>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"Mark As Sold"}
                    height={32}
                    width={250}
                    borderRadius={60}
                    textPaddingTop={5}
                    textColor={"#FFFF"}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
                <View style={{ paddingLeft: 20 ,marginTop:10}}>
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
        <View style={{marginTop:10}}>
          <ChatItemList navigatorProps={this.props.navigator} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    //marginTop: 2,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    elevation: 6,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000000', 
    shadowOpacity: 0.4, 
    shadowRadius: 5,
    padding: 5,
    height:120
    //padding: 5
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
    height: 30,
    width: 30
  }
});
