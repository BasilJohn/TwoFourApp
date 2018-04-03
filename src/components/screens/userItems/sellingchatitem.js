import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";

export default class ChatItem extends React.Component {
  render(props) {
    return (
      <View style={[styles.containerStyle]}>
        <View
          style={[
            CommonStyles.row,
            CommonStyles.paddingTen,
            CommonStyles.spaceBetween
          ]}
        >
          <View stlyle={[CommonStyles.paddingTenTop]}>
            <Image
              style={styles.productStyle}
              borderRadius={50}
              source={{ uri: "http://lorempixel.com/400/200/" }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text
              style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.extraBold,
                { marginLeft: -60,marginTop:-6 }
              ]}
            >
              John Mike
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
              30 mins ago
            </Text>
          </View>
        </View>
        <View style={[styles.chatDescriptionStyle]}>
          <Text
            style={[
              CommonStyles.normalPage,
              CommonStyles.greyColor,
              CommonStyles.regularBold
            ]}
          >
            Choosing the best audio players software for your computer
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: "#7B7B7B",
    backgroundColor: "#FFFFFF",
    elevation: 6
  },
  imageStyle: {
    height: 70,
    width: 70
  },
  productStyle: {
    height: 50,
    width: 50
  },
  socialStyle: {
    height: 40,
    width: 40
  },
  chatDescriptionStyle: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    position: "absolute",
    marginLeft:85,
    marginTop:40
  }
});
