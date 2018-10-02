import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableHighlight,
  Platform,
  TouchableOpacity
} from "react-native";
import ProfileTile from "./profile/profiletile";
import CommonStyles, { deviceHeight } from "../../styles/commonStyles";
import {
  DetailItem,
  ImageSlider,
  LinearGradientButton,
  GradientNavigationBar,
  Spinner
} from "../common";
import { renderif } from "../../common/renderif";
import { SocialIcon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { getProductDetails, isFavourite } from "../../store/actions/ad";
const deviceWidth = Dimensions.get("window").width;

class AdDetails extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  handlePress = () => { };
  _reportUserButtonPress() {
    this.props.navigator.push({
      screen: "TwoFourApp.ReportUser",
      title: "Rate"
    });

  }
  state = { isFavourite: false };


  isFavourite() {

    // this.props.isFavourite();
    this.setState({ isFavourite: !this.state.isFavourite })
  }

  componentWillMount() {
    this.props.getProductDetails(this.props.productId);
  }

  renderContent() {

    let isFavourite = this.state.isFavourite ? "md-heart" : "md-heart-outline";

    switch (Object.keys(this.props.postedAdDetails).length > 0) {
      case false:
        return <Spinner />;
      case true:
        return (
          <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <ImageSlider
                imageArray={this.props.postedAdDetails.product.images}
              />
            </View>
            <View style={styles.productNameContainer}>
              <LinearGradient
                start={{ x: 0.2, y: 0.4 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={["#3D88A7", "#3972A0", "#355F9A"]}
                style={{
                  position: "absolute",
                  left: 10,
                  top: -15,
                  height: 32,
                  width: 100,
                  borderWidth: 0,
                  borderColor: "black",
                  borderRadius: 20
                }}
              >
                <Text
                  style={[
                    CommonStyles.appText,
                    CommonStyles.whiteColor,
                    CommonStyles.semiBold,
                    {
                      textAlign: "center",
                      paddingTop: 5,
                      backgroundColor: "transparent"
                    }
                  ]}
                >
                  {"$ " + this.props.postedAdDetails.product.price}
                </Text>
              </LinearGradient>
              <View style={[CommonStyles.row]}>
                <View style={{ flex: 0.9 }}>
                  <Text
                    style={[
                      CommonStyles.headerText,
                      CommonStyles.titleGreyColor,
                      CommonStyles.mediumBold
                    ]}
                  >
                    {this.props.postedAdDetails.product.title}
                  </Text>
                </View>
                <View style={{ flex: 0.1 }}>
                  <TouchableOpacity onPress={this.isFavourite.bind(this)}>
                    <Ionicons
                      style={[CommonStyles.horizontalRight]}
                      name={isFavourite}
                      color={"#6D6C6C"}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[CommonStyles.row]}>
                <View>
                  <Text
                    style={[
                      CommonStyles.appText,
                      CommonStyles.smallTextGreyColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    {"Posted" +
                      " " +
                      this.props.postedAdDetails.product.lastUpdated}
                  </Text>
                </View>
                <View style={{ paddingLeft: 20 }}>
                  <Text
                    style={[
                      CommonStyles.appText,
                      CommonStyles.smallTextGreyColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    {this.props.postedAdDetails.product.views + " " + "views"}
                  </Text>
                </View>
              </View>
              <View style={[CommonStyles.row]}>
                <View>
                  <Text
                    style={[
                      CommonStyles.appText,
                      CommonStyles.smallTextGreyColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    {this.props.postedAdDetails.product.city}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <ProfileTile mainPageProps={this.props} />

              <View style={CommonStyles.wrapperBox}>
                <DetailItem
                  headerText="Description"
                  detailText={this.props.postedAdDetails.product.description}
                />
              </View>
              <View style={[styles.headerContainer, CommonStyles.row]}>
                <View style={{ flex: 0.7 }}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.titleGreyColor,
                      CommonStyles.semiBold,
                      { marginBottom: 2, alignSelf: "flex-start" }
                    ]}
                  >
                    {"Share Ad"}
                  </Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Image
                    resizeMode={"cover"}
                    source={require("../../assets/img/Danger.png")}
                    style={{
                      position: "absolute",
                      top: 8,
                      left: Platform.OS === "ios" ? 8 : 0,
                      width: 25,
                      height: 20
                    }}
                  />
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={this._reportUserButtonPress.bind(this)}
                    style={styles.reportButtonStyle}
                  >
                    <Text style={styles.reportButtonTextStyle}>{"Report"}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View
                style={[
                  styles.socialIconContainer,
                  CommonStyles.paddingTenLeft
                ]}
              >
                <View style={CommonStyles.row}>
                  <View>
                    <SocialIcon
                      button
                      style={styles.socialIconStyle}
                      type="facebook"
                    />
                  </View>
                  <View>
                    <SocialIcon
                      button
                      style={styles.socialIconStyle}
                      type="google-plus-official"
                    />
                  </View>
                  <View>
                    <SocialIcon
                      button
                      style={styles.socialIconStyle}
                      type="instagram"
                    />
                  </View>
                  <View>
                    <SocialIcon
                      button
                      style={styles.socialIconStyle}
                      type="twitter"
                    />
                  </View>
                </View>
                <View
                  style={[CommonStyles.paddingTenLeftRight, styles.reportView]}
                />
              </View>
            </View>
          </ScrollView>
        );
      default:
        return <Spinner />;
    }
  }

  render() {

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Post Ad"
          rightButtons={[
            {
              key: 1,
              buttonIcon: require("../../assets/img/share1.png"),
              //buttonAction: this._handleClickSettingsButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />
        {this.renderContent()}
        <View
          style={[
            styles.footerElevation,
            CommonStyles.spaceAround,
            CommonStyles.row,
            { justifyContent: "space-between", padding: 10 }
          ]}
        >
          <View>
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"Message"}
              height={42}
              width={210}
              borderRadius={60}
              textPaddingTop={9}
              textColor={"#FFFF"}
              onPress={this.handlePress.bind(this)}
            />
          </View>
          <View style={styles.offerButtonStyle}>
            <TouchableHighlight underlayColor={"transparent"}>
              <Text style={styles.offerButtonTextStyle}>{"Make Offer"}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerElevation: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    //borderWidth:0.5,
    //borderColor:'#4A4A4A',
    elevation: 5
  },
  container: {
    height: deviceHeight / 2.2,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#E9E9E9",
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 5
    //elevation: 16
  },
  reportView: {
    marginLeft: deviceWidth - 300
    //justifyContent:'flex-end'
  },
  headerContainer: {
    alignSelf: "flex-start",
    marginBottom: 2,
    paddingLeft: 10
    //justifyContent:'flex-start'
  },
  socialIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    padding: 0
  },
  productNameContainer: {
    padding: 10,
    paddingTop: 25
  },
  offerButtonStyle: {
    width: deviceWidth - 210,
    backgroundColor: "#7B7B7B",
    height: 42,
    borderRadius: 30
  },
  priceButtonStyle: {
    height: 20,
    backgroundColor: "#355F9A",
    borderRadius: 30,
    width: 180,
    //flex:1,
    margin: 5
  },
  reportButtonStyle: {
    width: 90,
    //backgroundColor: "white",
    height: 32,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#7A7A7A"
  },
  reportButtonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
    color: "#7A7A7A",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    paddingTop: 3,
    right: 10
  },
  offerButtonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    paddingTop: 10
  },
  socialIconStyle: {
    height: 32,
    width: 32,
    borderRadius: 60,
    margin: 3,
    padding: 0
  }
});

const mapStateToProps = ({ ad }) => {
  const { postedAdDetails, isFavouriteSuccess } = ad;
  return { postedAdDetails, isFavouriteSuccess };
};

export default connect(
  mapStateToProps,
  {
    getProductDetails, isFavourite
  }
)(AdDetails);
