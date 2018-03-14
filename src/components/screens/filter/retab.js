import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Slider } from "react-native-elements";
import { Button, LinearGradientButton } from "../../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../../styles/commonStyles";
import { Dropdown } from "react-native-material-dropdown";
import RadioButton from "react-native-radio-button";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default class RETab extends React.Component {
  state = {
    value: 120,
    multiSliderValue: [3, 7]
  };

  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values
    });
  };

  _handleClickSignUpButton() {}
  doSomething(value) {
    // this.setState({
    //   //
    // })
  }

  render() {
    let propertyType = [
      {
        value: "Apartment & Unit"
      },
      {
        value: "Individual Unit"
      },
      {
        value: "Guest House"
      }
    ];

    let minMax = [
      {
        value: "Min"
      },
      {
        value: "Max"
      }
    ];

    let brNumber = [
      {
        value: "All"
      },
      {
        value: "1"
      },
      {
        value: "2"
      },
      {
        value: "3"
      },
      {
        value: "4"
      }
    ];

    let radio_props = [{ label: "Include Surrounding Suburbs", value: 0 }];
    return (
      <ScrollView style={[{ flexGrow: 1 }]}>
        <View style={[CommonStyles.spaceAround, { flex: 1 }]}>
          <View>
            <View style={CommonStyles.paddingTenLeft}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                Property Type
              </Text>
            </View>
            <View style={CommonStyles.paddingTenLeftRight}>
              <Dropdown
                label=""
                data={propertyType}
                value={"Apartment & Unit"}
                animation={10}
                itemTextStyle={[
                  CommonStyles.regularBold,
                  CommonStyles.greyColor
                ]}
                style={[CommonStyles.regularBold, CommonStyles.greyColor]}
              />
            </View>
          </View>
          <View>
            <View style={CommonStyles.paddingTenLeft}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                Price Range
              </Text>
            </View>
            <View
              style={[
                CommonStyles.paddingTen,
                {
                  flex: 1,
                  paddingTop: 40,
                  alignItems: "stretch",
                  justifyContent: "center"
                }
              ]}
            >
              <MultiSlider
                values={[
                  this.state.multiSliderValue[0],
                  this.state.multiSliderValue[1]
                ]}
                sliderLength={deviceWidth - 30}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={10}
                step={1}
                trackStyle={{ backgroundColor: "#345A99", height: 3 }}
                selectedStyle={{ backgroundColor: "#345A99" }}
                markerStyle={CommonStyles.markerStyle}
                markerContainerStyle={[CommonStyles.markerContainerStyle]}
              />
            </View>
          </View>
          <View>
            <View style={CommonStyles.paddingTenLeft}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                Bed Rooms
              </Text>
            </View>
            <View style={[CommonStyles.row, CommonStyles.spaceAround]}>
              <View style={[CommonStyles.paddingTenLeft, { flex: 1 }]}>
                <Dropdown
                  label=""
                  data={minMax}
                  value={"Min"}
                  animation={10}
                  itemTextStyle={[
                    CommonStyles.regularBold,
                    CommonStyles.greyColor
                  ]}
                  style={[CommonStyles.regularBold, CommonStyles.greyColor]}
                />
              </View>
              <View style={[CommonStyles.paddingTenLeftRight, { flex: 1 }]}>
                <Dropdown
                  label=""
                  data={minMax}
                  value={"Max"}
                  animation={10}
                  itemTextStyle={[
                    CommonStyles.regularBold,
                    CommonStyles.greyColor
                  ]}
                  style={[CommonStyles.regularBold, CommonStyles.greyColor]}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={CommonStyles.paddingTenLeft}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                Bath Rooms
              </Text>
            </View>
            <View style={[CommonStyles.paddingTenLeftRight, { flex: 0.5 }]}>
              <Dropdown
                label=""
                data={brNumber}
                value={"All"}
                animation={10}
                itemTextStyle={[
                  CommonStyles.regularBold,
                  CommonStyles.greyColor
                ]}
                style={[CommonStyles.regularBold, CommonStyles.greyColor]}
              />
            </View>
          </View>
          <View>
            <View style={CommonStyles.paddingTenLeft}>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}
              >
                Square Feet
              </Text>
            </View>
            <View style={[CommonStyles.paddingTenLeftRight, { flex: 0.5 }]}>
              <Dropdown
                label=""
                data={brNumber}
                value={"All"}
                animation={10}
                itemTextStyle={[
                  CommonStyles.regularBold,
                  CommonStyles.greyColor
                ]}
                style={[CommonStyles.regularBold, CommonStyles.greyColor]}
              />
            </View>
          </View>
          <View style={[CommonStyles.row, CommonStyles.paddingTen]}>
            <View>
              <RadioButton
                animation={"bounceIn"}
                isSelected={true}
                onPress={() => this.doSomething("hello")}
              />
            </View>
            <View style={[CommonStyles.paddingTen]}>
              <Text style={[CommonStyles.regularBold, CommonStyles.greyColor]}>
                Include Surrounding Suburbs
              </Text>
            </View>
          </View>
        </View>
        <View style={[CommonStyles.buttonBox]}>
          <LinearGradientButton
            colorOne={"#3D88A7"}
            colorTwo={"#3972A0"}
            colorThree={"#355F9A"}
            buttonText={"Search"}
            height={60}
            width={20}
            borderRadius={60}
            textPaddingTop={20}
            onPress={this._handleClickSignUpButton.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}
