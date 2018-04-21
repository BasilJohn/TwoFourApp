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
import { FilterButton, GradientNavigationBar,LinearGradientButton } from "../../common";
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
        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
          <KeyboardAvoidingView
            style={CommonStyles.keyboardAvoidingViewContainer}
          >
            <View style={[ { flex: 1 }]}>
              <View style={[ { height: 95 },CommonStyles.paddingTenTop]}>
              <View style={[CommonStyles.paddingTenLeftRight]}>
              <Text
                    style={[
                      CommonStyles.mediumText,
                    CommonStyles.appFontColor,
                    CommonStyles.semiBold
                    ]}
                  >
                  Sort By
                </Text>
                </View>
                <View style={[CommonStyles.row, CommonStyles.paddingTen,CommonStyles.spaceBetween,]}>
                <View>
                  <FilterButton
                    colorOne={"#FFFFFF"}
                    colorTwo={"#FFFFFF"}
                    colorThree={"#FFFFFF"}
                    buttonText={"Newest"}
                    height={46}
                    width={270}
                    borderRadius={10}
                    textPaddingTop={10}
                    textColor={'#2C272D'}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
                <View>
                  <FilterButton
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
                  <FilterButton
                    colorOne={"#FFFFFF"}
                    colorTwo={"#FFFFFF"}
                    colorThree={"#FFFFFF"}
                    buttonText={"High to Low"}
                    height={46}
                    width={270}
                    borderRadius={10}
                    textPaddingTop={10}
                    textColor={'#2C272D'}
                    onPress={this.handlePress.bind(this)}
                  />
                </View>
              </View>
              </View>
             
              <View style={[ styles.filterBlockStyle,CommonStyles.paddingTenLeftRight]}>
                <View >
                <Text
                    style={[
                      CommonStyles.mediumText,
                    CommonStyles.appFontColor,
                    CommonStyles.semiBold
                    ]}
                  >
                    Distance
                  </Text>
                </View>
                <View
                  style={[
                    {
                      //flex: 1,
                      paddingTop: 20,
                      alignItems: "center",
                      justifyContent: "center"
                    }
                  ]}
                >
                <View style={[CommonStyles.row,{position:'absolute',top:35,left:0,width:'100%'}]}>
                  <View >
                  <Text
                style={[
                  CommonStyles.appText,
                  CommonStyles.smallTextGreyColor,
                  CommonStyles.regularBold
                ]}
              >120 km</Text>
                    </View>
                    <View style={{position:'absolute',right:0}}>
                    <Text
                style={[
                  CommonStyles.appText,
                  CommonStyles.smallTextGreyColor,
                  CommonStyles.regularBold
                ]}
              >1200 km</Text>
                    </View>
                  </View>
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
                    trackStyle={{ backgroundColor: "#345A99", height: 5 }}
                    selectedStyle={{ backgroundColor: "#345A99" }}
                    markerStyle={CommonStyles.markerStyle}
                    //markerContainerStyle={[CommonStyles.markerContainerStyle]}
                  />
                  
                </View>
              </View>
              <View style={[ styles.filterBlockStyle,CommonStyles.paddingTenLeftRight]}>
                <View >
                <Text
                    style={[
                      CommonStyles.mediumText,
                    CommonStyles.appFontColor,
                    CommonStyles.semiBold
                    ]}
                  >
                    Location
                  </Text>
                </View>
                <View style={[CommonStyles.row, CommonStyles.spaceAround,{paddingTop:10}]}>
                  <View style={[{height:48,width:156,borderWidth:0.3,borderColor:'#696969',borderRadius:10,margin:0,padding:0}]}>
                    <TextInput
                      //style={styles.textInputNoLeftImage}
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
              <View style={[ styles.filterBlockStyle,CommonStyles.paddingTenLeftRight]}>
                <View >
                  <Text
                    style={[
                      CommonStyles.mediumText,
                    CommonStyles.appFontColor,
                    CommonStyles.semiBold
                    ]}
                  >
                    Posted Within
                  </Text>
                </View>
                <View style={[CommonStyles.row, CommonStyles.spaceAround,{paddingTop:10}]}>
                  <View>
                    <FilterButton
                      colorOne={"#FFFFFF"}
                      colorTwo={"#FFFFFF"}
                      colorThree={"#FFFFFF"}
                      buttonText={"24 Hrs"}
                      height={46}
                      width={270}
                      borderRadius={10}
                      textPaddingTop={10}
                      textColor={'#2C272D'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                  <View>
                    <FilterButton
                      colorOne={"#FFFFFF"}
                      colorTwo={"#FFFFFF"}
                      colorThree={"#FFFFFF"}
                      buttonText={"7 Days"}
                      height={46}
                      width={270}
                      borderRadius={10}
                      textPaddingTop={10}
                      textColor={'#2C272D'}
                      onPress={this.handlePress.bind(this)}
                    />
                  </View>
                  <View>
                    <FilterButton
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
  },
  filterBlockStyle:{
     height: 95,
     marginTop:20,
     //borderWidth:1,
     borderColor:'red'
  }
});
