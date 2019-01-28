import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import CommonStyles, {
  deviceHeight,
  deviceWidth
} from "../../styles/commonStyles";

import LinearGradient from "react-native-linear-gradient";

const LinearGradientButton = props => {
  return (
    <LinearGradient
      colors={[props.colorOne, props.colorTwo,props.colorThree]}
      start={{x: 0.1, y: 0.1}} end={{x: 1.0, y: 1.0}}
      style={[
        styles.LinearGradientStyle,
        {
          height: props.height,
          width: deviceWidth,
          borderRadius: props.borderRadius
        }
      ]}
      //locations={[0,0.75,1]}
    >
      <TouchableOpacity
        onPress={props.onPress}
        underlayColor={'transparent'}
        style={[
          styles.buttonStyle,
          {
            height: props.height,
            width: deviceWidth,
            borderRadius: props.borderRadius
          }
        ]}
      >
        <Text style={[styles.textStyle, { paddingTop: props.textPaddingTop,color:props.textColor }]}>
          {props.buttonText}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold"
  },
  LinearGradientStyle: {
    //backgroundColor: "#7B7B7B"
  }
});

export { LinearGradientButton };
