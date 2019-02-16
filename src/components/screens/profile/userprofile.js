import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { connect } from "react-redux";
import ProfileTile from "../profile/profiletile";
import {
  LinearGradientButton,
  GradientNavigationBar,
  CustomTabBar
} from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import UserItemList from "../userItems/useritemlist";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import { getProfileTileData } from "../../../store/actions/auth";

class UserProfile extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {
      priceType: { type: "selling" },
      profileData:{}
    };
  }

  handlePress = () => {};

  _handleClickSettingsButton() {
    this.props.navigator.push({
      screen: "TwoFourApp.UserProfileSetting"
    });
  }

  componentDidUpdate(prevProps) {

    if(this.props.profileTileData!==prevProps.profileTileData){
      this.setState({profileData:this.props.profileTileData})
    }
  }

  componentDidMount(){
    this.props.getProfileTileData(1);
  }


  render() {
    let priceType = this.state.priceType.type;

    return (
      <View style={[CommonStyles.normalPage, styles.mainContainer]}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="User Profile"
          rightButtons={[
            {
              key: 1,
              buttonIcon: require("../../../assets/img/settings.png"),
              buttonAction: this._handleClickSettingsButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />

        <View style={[{ alignItems: "center" ,marginTop:15}]}>
        <ProfileTile mainPageProps={this.props} pageName={"userProfile"}/>
        </View>
        <View style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.parentCircle}>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({ priceType: { type: "selling" } })
                }
              >
                {(() => {
                  if (priceType == "selling") {
                    return (
                      <View style={{width:(deviceWidth/3)-5}}>
                      <LinearGradientButton
                        colorOne={"#3D88A7"}
                        colorTwo={"#3972A0"}
                        colorThree={"#355F9A"}
                        buttonText={"Selling"}
                        height={40}
                        //width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        textColor={"#FFFFFF"}
                        onPress={this.handlePress.bind(this)}
                      />
                      </View>
                    );
                  } else {
                    return (
                      <View style={styles.childCircle}>
                        <Text
                          style={[
                            CommonStyles.normalText,
                            CommonStyles.greyColor,
                            CommonStyles.semiBold
                          ]}
                        >
                          Selling
                        </Text>
                      </View>
                    );
                  }
                })()}
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.setState({ priceType: { type: "sold" } })}
              >
                {(() => {
                  if (priceType == "sold") {
                    return (
                      <View style={{width:(deviceWidth/3)-5}}>
                      <LinearGradientButton
                        colorOne={"#3D88A7"}
                        colorTwo={"#3972A0"}
                        colorThree={"#355F9A"}
                        buttonText={"Sold"}
                        height={40}
                        //width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        textColor={"#FFFFFF"}
                        onPress={this.handlePress.bind(this)}
                      />
                      </View>
                    );
                  } else {
                    return (
                      <View style={styles.childCircle}>
                        <Text
                          style={[
                            CommonStyles.normalText,
                            CommonStyles.greyColor,
                            CommonStyles.semiBold
                          ]}
                        >
                          Sold
                        </Text>
                      </View>
                    );
                  }
                })()}
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({ priceType: { type: "favourites" } })
                }
              >
                {(() => {
                  if (priceType == "favourites") {
                    return (
                      <View style={{width:(deviceWidth/3)-5}}>
                      <LinearGradientButton
                        colorOne={"#3D88A7"}
                        colorTwo={"#3972A0"}
                        colorThree={"#355F9A"}
                        buttonText={"Favourites"}
                        height={40}
                        //width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        textColor={"#FFFFFF"}
                        onPress={this.handlePress.bind(this)}
                      />
                      </View>
                    );
                  } else {
                    return (
                      <View style={styles.childCircle}>
                        <Text
                          style={[
                            CommonStyles.normalText,
                            CommonStyles.greyColor,
                            CommonStyles.semiBold
                          ]}
                        >
                          Favourites
                        </Text>
                      </View>
                    );
                  }
                })()}
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View
          style={[
            CommonStyles.paddingTenLeftRight,
            { flex:  1 }
          ]}
        >
          <UserItemList controlProps={this.props} />
        </View>
        <View>
          <CustomTabBar navigator={this.props.navigator} isActive="tab4" />
        </View>
      </View>
    );
  }
}

const spaceHeight = 70;

const styles = StyleSheet.create({
  parentCircle: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgb(229,229,229)",
    borderRadius: 50
  },
  childCircle: {
    height: 39,
    width: (deviceWidth - 40) / 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  activeChildCircle: {
    height: 39,
    width: (deviceWidth - 40) / 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 8
  },
  btnText: {
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Medium"
  },
  activeBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Medium"
  },
  bottomBtn: {
    position: "absolute",
    left: 77.5,
    bottom: spaceHeight - 45
  },
  mainContainer: {
    flex: 1
  }
});

const mapStateToProps = ({ auth }) => {
  const { profileTileData} = auth;
  return { profileTileData };
};

export default connect(
  mapStateToProps,
  {
    getProfileTileData
  }
)(UserProfile);
