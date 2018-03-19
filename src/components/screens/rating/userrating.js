import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradientButton, GradientNavigationBar } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";

import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import UserImageTile from "../../common/userimagetile";
import { Rating } from "react-native-elements";

export default class UserRating extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  _publishReviewButtonPress() {}

  render(props) {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Rate"
        />
        <View >
          <View>
            <UserImageTile />
          </View>
          <View
            style={[
              CommonStyles.alignCenter,
              CommonStyles.paddingTen,
              {
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                elevation: 6
              }
            ]}
          >
            <View>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}
              >
                Please rate your experience with Tony Stark
              </Text>
            </View>
            <View style={[CommonStyles.alignCenter]}>
              <Rating
                type="star"
                ratingColor="#EE8A1A"
                ratingBackgroundColor="red"
                readonly={false}
                ratingCount={5}
                imageSize={30}
                startingValue={2.5}
              />
            </View>
          </View>
          <View
            style={[
              CommonStyles.alignCenter,
              CommonStyles.paddingTen,
              {
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                elevation: 6
              }
            ]}
          >
            <View>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}
              >
                Please rate your experience with Tony Stark
              </Text>
            </View>
            <View style={[CommonStyles.alignCenter, CommonStyles.row]}>
              <TouchableOpacity>
                <View>
                  <Image
                    resizeMode="cover"
                    style={styles.profileImageStyle}
                    source={require("../../../assets/img/userLike.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[CommonStyles.paddingTen]}>
                <View>
                  <Image
                    resizeMode="cover"
                    style={styles.profileImageStyle}
                    source={require("../../../assets/img/userDislike.png")}
                  />
                </View>
              </TouchableOpacity>
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
              buttonText={"PUBLISH REVIEW"}
              height={60}
              width={20}
              borderRadius={60}
              textPaddingTop={20}
              textColor={'#FFFFFF'}
              onPress={this._publishReviewButtonPress.bind(this)}
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
  }
});
