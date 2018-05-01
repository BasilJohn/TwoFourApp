import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { LinearGradientButton, GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
  NAV_HEIGHT
} from "../../styles/commonStyles";

export default class UserImageTile extends React.Component {
  render(props) {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.profileImageStyle}
            borderRadius={32}
            source={require("../../assets/img/profileimage.jpg")}
          />
        </View>
        <View style={[CommonStyles.alignCenter]}>
          <Text
            style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.mediumBold
            ]}
          >
            Tony Stark
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  profileImageStyle: {
    height: 64,
    width: 64
  }
});
