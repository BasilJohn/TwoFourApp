import { StyleSheet, Dimensions } from "react-native";

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
export const shadowOpt = { btnWidth: deviceWidth - 55, btnHeight: 45 };

const window = Dimensions.get("window");

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;
// Only for FindDoctors, FindHospital, Appointment screens
export const spaceHeight = deviceHeight - 375 - 45;

// Only for post screens
export const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
export const blueGradient = {
  colors: ["#3D88A7", "#3972A0", "#355F9A"],
  colorsStart: { x: 0.0, y: 0.25 },
  colorsEnd: { x: 0.5, y: 1.0 }
};

export default (CommonStyles = StyleSheet.create({
  normalPage: {
    position: "relative",
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  keyboardAvoidingViewContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 5
  },
  addImageContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  addedImageContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  normalSinglePage: {
    backgroundColor: "#fff",
    flex: 1
  },
  wrapperBox: {
    marginTop: 10,
    marginBottom: 10
  },
  noTabScrollView: {
    marginTop: 10
  },
  // Color
  whiteColor: {
    color: "#FFFFFF"
  },
  greyColor: {
    color: "rgb(105,105,105)"
  },
  lightgreyColor: {
    color: "rgb(150,150,150)"
  },
  mediumGreyColor: {
    color: "#878787"
  },
  blackColor: {
    color: "rgb(19,19,19)"
  },
  softBlueColor: {
    color: "rgb(75,102,234)"
  },
  darkSkyBlueColor: {
    color: "rgb(63,103,230)"
  },
  periBlueColor: {
    color: "rgb(79,109,230)"
  },
  // Item box
  itemWhiteBox: {
    marginTop: 2,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 0,
    backgroundColor: "#FFFFFF",
    elevation: 0
  },
  //// Text
  extraLargeText: {
    height: 52,
    fontSize: 32,
    fontFamily: "Poppins-Bold"
  },
  titleText: {
    fontSize: 30,
    lineHeight: 38
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30
  },
  itemHeaderText: {
    fontSize: 17,
    lineHeight: 29
  },
  mediumText: {
    fontSize: 16
  },
  normalText: {
    fontSize: 15,
    lineHeight: 23
  },
  smallText: {
    fontSize: 13,
    lineHeight: 30
  },
  shortSmallText: {
    fontSize: 13,
    lineHeight: 23
  },
  light: {
    fontFamily: "Poppins-Light"
  },
  regularBold: {
    fontFamily: "Poppins-Regular"
  },
  mediumBold: {
    fontFamily: "Poppins-Medium"
  },
  semiBold: {
    fontFamily: "Poppins-SemiBold"
  },
  extraBold: {
    fontWeight: "bold"
  },
  appFontColor: {
    color: "#696969"
  },
  //Form Styles
  textInputField: {
    flexDirection: "row",
    width: deviceWidth - 15,
    height: 45,
    //marginBottom: 25,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  signInTextInputField: {
    flexDirection: "row",
    width: deviceWidth - 15,
    height: 45,
    //marginBottom: 25,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 60,
    backgroundColor: "#FFFFFF"
  },
  squareTextInputField: {
    flexDirection: "row",
    width: deviceWidth - 15,
    height: 45,
    //marginBottom: 25,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  textInput: {
    width: deviceWidth,
    height: 45,
    paddingLeft: 50,
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
  textInputNoLeftImage: {
    width: deviceWidth,
    height: 45,
    paddingLeft: 10,
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
  multiLinetextInputField: {
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  },
  multiLinetextInput: {
    width: deviceWidth - 55,
    paddingLeft: 10,
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlignVertical: "top"
  },
  buttonBox: {
    padding: 10,
    alignItems: "center"
  },
  //Post Ad Page
  introPageButtonBox: {
    flexDirection: "row",
    justifyContent: "space-between"
    //marginTop: introSpaceHeight * 0.27,
    //marginBottom: 20,
  },
  introPageButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60
    //height: 60,
  },

  // Button Styles
  backButton: {
    flex: 1,
    alignItems: "center",
    width: 41,
    height: 41
  },
  nextButton: {
    flex: 1,
    alignItems: "center",
    width: 60,
    height: 60
  },

  switchBoxStyle: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceButtonContainer: {
    position: "absolute",
    //zIndex:1,
    top: deviceHeight / 2.6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    left: 10
  },
  priceButtonStyle: {
    position: "absolute",
    width: 100,
    backgroundColor: "#36629B",
    height: 40,
    borderRadius: 30
  },
  //common
  row: {
    flexDirection: "row"
  },
  horizontalRight: {
    alignSelf: "flex-end"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  paddingTen: {
    padding: 10
  },
  paddingTenLeft: {
    paddingLeft: 10
  },
  paddingTenLeftRight: {
    paddingLeft: 10,
    paddingRight: 10
  },
  paddingTenTop: {
    paddingTop: 10
  },
  paddingTenBottom: {
    paddingBottom: 10
  },
  //Button Styles
  //Small button style
  smallButtonStyle: {
    width: "100%",
    backgroundColor: "#36659C",
    height: 60,
    borderRadius: 25,
    padding: 10
  },
  smallButtonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 15,
    fontWeight: "600",
    paddingTop: 10
  },
  //chatsPage
  chatTabStyle: {
    justifyContent: "space-between",
    height: 60,
    borderWidth: 0,
    padding: 0,
    backgroundColor: "#FFFFFF"
  },
  chatTabIndicatorStyle: {
    backgroundColor: "#355D9A"
  },
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 2
  },
  tabBarLabelStyle: {
    color: "#6F6F6F",
    paddingTop: 10,
    fontFamily: "Poppins-SemiBold"
  },
  //Mutislider
  markerStyle: {
    width: 25,
    height: 25,
    // borderRadius:50,
    //backgroundColor:'#345A99'
    backgroundColor: "#345A99"
  },
  markerContainerStyle: {
    // width:30,
    // height:30,
    //  borderRadius:50,
    //backgroundColor:'#345A99',
  },
  alignCenter: {
    justifyContent: "center",
    alignSelf: "center"
  }
}));
