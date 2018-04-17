import React from "React";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import { LinearGradientButton, GradientNavigationBar } from "../../common";
import { Slider } from "react-native-elements";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";

export default class SortFilter extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  state = {
    value: 120,
    multiSliderValue: [3, 7]
  };
  _handleClickSignUpButton() {}
  handlePress = () => {};
  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values
    });
  };

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Sort and Filter"
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <KeyboardAvoidingView
            style={CommonStyles.keyboardAvoidingViewContainer}
          >
            <View style={[CommonStyles.spaceAround, { flex: 1 }]}>
              <View style={{padding:2}}>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                  ]}
                >
                  Sort By
                </Text>
              </View>
              <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                <View>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"Newest"}
                    height={46}
                    width={270}
                    borderRadius={10}
                    textPaddingTop={10}
                    textColor={'#FFFFFF'}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
                <View>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"Low to High"}
                    height={46}
                    width={270}
                    borderRadius={10}
                    textPaddingTop={10}
                    textColor={'#FFFFFF'}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
                <View>
                  <LinearGradientButton
                    colorOne={"#3D88A7"}
                    colorTwo={"#3972A0"}
                    colorThree={"#355F9A"}
                    buttonText={"High to Low"}
                    height={46}
                    width={270}
                    borderRadius={10}
                    textPaddingTop={10}
                    textColor={'#FFFFFF'}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
              </View>
              <View>
                <View style={CommonStyles.paddingTen}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    Distance
                  </Text>
                </View>
                <View
                  style={[
                    CommonStyles.paddingTen,
                    {
                      flex: 1,
                      paddingTop: 20,
                      alignItems: "center",
                      justifyContent: "center"
                    }
                  ]}
                >
                  <MultiSlider
                    values={[
                      this.state.multiSliderValue[0],
                      this.state.multiSliderValue[1]
                    ]}
                    sliderLength={deviceWidth - 50}
                    onValuesChange={this.multiSliderValuesChange}
                    min={0}
                    max={10}
                    step={1}
                    trackStyle={{ backgroundColor: "#345A99", height: 3 }}
                    selectedStyle={{ backgroundColor: "#345A99" }}
                    markerStyle={CommonStyles.markerStyle}
                    //markerContainerStyle={[CommonStyles.markerContainerStyle]}
                  />
                </View>
              </View>
              <View style={{marginTop:-50}}>
                <View style={CommonStyles.paddingTen}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                      CommonStyles.postAdTitleColor,
                      CommonStyles.semiBold
                    ]}
                  >
                    Location
                  </Text>
                </View>
                <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                  <View style={[styles.textInputField, { flex: 0.7 }]}>
                    <TextInput
                      style={styles.textInputNoLeftImage}
                      placeholder=""
                      underlineColorAndroid="transparent"
                    />
                  </View>
                  <View style={{alignSelf:'center'}}>
                    <LinearGradientButton
                      colorOne={"#3D88A7"}
                      colorTwo={"#3972A0"}
                      colorThree={"#355F9A"}
                      buttonText={"Set"}
                      height={32}
                      width={240}
                      borderRadius={60}
                      textPaddingTop={5}
                      textColor={'#FFFFFF'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={CommonStyles.paddingTen}>
                  <Text
                    style={[
                      CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                    ]}
                  >
                    Posted Within
                  </Text>
                </View>
                <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
                  <View>
                    <LinearGradientButton
                      colorOne={"#3D88A7"}
                      colorTwo={"#3972A0"}
                      colorThree={"#355F9A"}
                      buttonText={"24 Hrs"}
                      height={46}
                      width={270}
                      borderRadius={10}
                      textPaddingTop={10}
                      textColor={'#FFFFFF'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                  <View>
                    <LinearGradientButton
                      colorOne={"#3D88A7"}
                      colorTwo={"#3972A0"}
                      colorThree={"#355F9A"}
                      buttonText={"7 Days"}
                      height={46}
                      width={270}
                      borderRadius={10}
                      textPaddingTop={10}
                      textColor={'#FFFFFF'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                  <View>
                    <LinearGradientButton
                      colorOne={"#3D88A7"}
                      colorTwo={"#3972A0"}
                      colorThree={"#355F9A"}
                      buttonText={"30 Days"}
                      height={46}
                      width={270}
                      borderRadius={10}
                      textPaddingTop={10}
                      textColor={'#FFFFFF'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[CommonStyles.buttonBox]}>
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"Apply"}
              height={48}
              width={50}
              borderRadius={60}
              textPaddingTop={15}
              textColor={'#FFFFFF'}
              onPress={this._handleClickSignUpButton.bind(this)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filterButtonStyle: {
    width: deviceWidth - 250,
    backgroundColor: "#36629B",
    height: 60,
    borderRadius: 10
  },
  filterButtonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F1F1F2",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 20
  },
  textInputNoLeftImage: {
    width: deviceWidth,
    height: 45,
    paddingLeft: 0,
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
  textInputField: {
    flexDirection: "row",
    width: deviceWidth - 15,
    height: 46,
    //marginBottom: 25,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "#FFFFFF"
  }
});
