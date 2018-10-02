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
import { deviceWidth } from "../notify/notificationitem";
import _ from "lodash";
const RATING_IMAGE = require("../../../assets/img/star.svg");
import { connect } from "react-redux";
import { followUnFollow } from "../../../store/actions/user";

class ProfileTile extends React.Component {
  _profileTileIconPress() {
    this.props.mainPageProps.navigator.push({
      screen: "TwoFourApp.UserProfile",
      title: "User Profile"
    });
  }

  state = { isFollowing: false };


  followUnFollow() {

    //this.props.followUnFollow();
    this.setState({ isFollowing: !this.state.isFollowing })
  }

  state = { profileImage: "." };

  render() {
    let supplierDetail =
      Object.keys(this.props.mainPageProps.postedAdDetails).length != 0
        ? this.props.mainPageProps.postedAdDetails.product.supplierDetail
        : {};

    let friendUnFriendText = this.state.isFollowing ? "Following" : "Follow";

    return (
      <View style={styles.mainStyle}>
        <View style={styles.containerStyle}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={this._profileTileIconPress.bind(this)}>
              <Image
                resizeMode="cover"
                style={styles.profileImageStyle}
                borderRadius={30}
                source={require("../../../assets/img/profileimage.jpg")}
              />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <View style={{ paddingBottom: 10 }}>
                <TouchableOpacity
                  onPress={this._profileTileIconPress.bind(this)}
                >
                  <Text
                    style={[
                      CommonStyles.headerText,
                      CommonStyles.blackColor,
                      CommonStyles.mediumBold
                    ]}
                  >
                    Tony Stark
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Rating
                  type="star"
                  //ratingImage={RATING_IMAGE}
                  ratingColor="#099DAE"
                  ratingBackgroundColor="white"
                  readonly={true}
                  ratingCount={5}
                  imageSize={15}
                  startingValue={supplierDetail.rating}
                />
              </View>
            </View>
          </View>
          <View style={styles.followButtonContainer}>
            <TouchableOpacity
              onPress={this.followUnFollow.bind(this)}
              style={styles.followButtonStyle}
            >
              <Text style={styles.followButtonTextStyle}>{friendUnFriendText}</Text>
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
                  CommonStyles.appText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}
              >
                {supplierDetail.likes} Like
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
                  CommonStyles.appText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}
              >
                {supplierDetail.dislikes} Dislike
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
                  CommonStyles.appText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}
              >
                {supplierDetail.followers} Followers
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
    width: "95%",
    height: 150,
    marginTop: 2,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    padding: 5
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row"
  },
  profileImageStyle: {
    marginLeft: 10,
    marginTop: 10,
    height: 60,
    width: 60
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
    marginTop: 15,
    marginRight: 10,
    flex: 0.7,
    alignItems: "flex-end"
  },
  followButtonStyle: {
    width: deviceWidth - 280,
    backgroundColor: "#7B7B7B",
    height: 32,
    borderRadius: 40,
    padding: 0
  },
  followButtonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 15,
    paddingTop: 5,
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

const mapStateToProps = ({ user }) => {
  const { isSuccess } = user;
  return { isSuccess };
};

export default connect(
  mapStateToProps,
  {
    followUnFollow
  }
)(ProfileTile);
