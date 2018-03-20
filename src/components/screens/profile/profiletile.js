import React from "React";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import CommonStyles from "../../../styles/commonStyles";
import { Rating } from "react-native-elements";
const RATING_IMAGE = require("../../../assets/img/star.svg");

export default class ProfileTile extends React.Component {
  state = { profileImage: "." };

  render() {
    return (
      <View style={styles.mainStyle}>
        <View style={styles.containerStyle}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.profileImageStyle}
              borderRadius={50}
              source={require("../../../assets/img/profileimage.jpg")}
            />
            <View style={styles.nameContainer}>
              <View style={{ paddingBottom: 10 }}>
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
              <View>
                <Rating
                  type="star"
                  //ratingImage={RATING_IMAGE}
                  ratingColor="#099DAE"
                  ratingBackgroundColor="white"
                  readonly={true}
                  ratingCount={5}
                  imageSize={20}
                  startingValue={2.5}
                />
              </View>
            </View>
          </View>
          <View style={styles.followButtonContainer}>
            <TouchableOpacity style={styles.followButtonStyle}>
              <Text style={styles.followButtonTextStyle}>{"Follow"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileWeightStyle}>
          <View>
            <View style={{ paddingBottom: 5 }}>
              <Image
                resizeMode="cover"
                style={styles.socialStyle}
                borderRadius={5}
                source={require("../../../assets/img/thumbs-up.png")}
              />
            </View>
            <View>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.mediumBold
                ]}
              >
                298 Like
              </Text>
            </View>
          </View>
          <View style={styles.leftRightBorder}>
            <View style={{ paddingBottom: 5 }}>
              <Image
                resizeMode="cover"
                style={styles.socialStyle}
                borderRadius={5}
                source={require("../../../assets/img/thumb-down.png")}
              />
            </View>
            <View>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.mediumBold
                ]}
              >
                196 Dislike
              </Text>
            </View>
          </View>
          <View elevation={5}>
            <View style={{ paddingBottom: 5 }}>
              <Image
                resizeMode="cover"
                style={styles.socialStyle}
                borderRadius={5}
                source={require("../../../assets/img/follower.png")}
              />
            </View>
            <View>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.mediumBold
                ]}
              >
                97 Followers
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    width: "97%",
    height: 150,
    marginTop: 2,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 6,
    padding: 5
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row"
  },
  profileImageStyle: {
    height: 70,
    width: 70
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  nameContainer: {
    flexDirection: "column",
    paddingLeft: 20
  },
  nameTextStyle: {
    fontWeight: "bold",
    fontSize: 20
  },
  followButtonContainer: {
    flex: 0.7,
    alignItems: "flex-end"
  },
  followButtonStyle: {
    width: "80%",
    backgroundColor: "#7B7B7B",
    height: 45,
    borderRadius: 40,
    padding: 0
  },
  followButtonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 15,
    paddingTop: 10,
    fontFamily: "Poppins-SemiBold"
  },
  profileWeightStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10
  },
  socialStyle: {
    height: 20,
    width: 20
  },
  leftRightBorder: {
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: "#F0F0F0",
    paddingLeft: 20,
    paddingRight: 20
  }
});
