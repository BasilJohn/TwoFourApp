import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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

  render(props) {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Rate"
        />
        <View style={styles.clapContainerStyle}>
          <View style={[CommonStyles.paddingTen, CommonStyles.alignCenter]}>
            <Image
              resizeMode="cover"
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
                CommonStyles.normalText,
                CommonStyles.softBlueColor,
                CommonStyles.semiBold
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
                    CommonStyles.headerText,
                    CommonStyles.greyColor,
                    CommonStyles.extraBold
                  ]}
                >
                  Sold it somewhere else
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.lightgreyColor,
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
                    CommonStyles.headerText,
                    CommonStyles.greyColor,
                    CommonStyles.extraBold
                  ]}
                >
                  I'll do this later
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.lightgreyColor,
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
    width: 90
  },
  clapContainerStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 5
  },
  finalContainerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#7B7B7B",
    backgroundColor: "#FFFFFF"
  },
  arrowStyle: {
    justifyContent: "center",
    flex: 0.1,
    alignSelf: "center"
  },
});
