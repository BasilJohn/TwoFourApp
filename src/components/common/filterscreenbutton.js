import React from "react";
import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native";
import CommonStyles, {
  deviceHeight,
  deviceWidth
} from "../../styles/commonStyles";

import LinearGradient from "react-native-linear-gradient";

const FilterButton = props => {
  return (
    <LinearGradient
      colors={[props.colorOne, props.colorTwo]}
      start={{ x: 1 ,y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={[
        styles.LinearGradientStyle,
        {
          height: props.height,
          width: deviceWidth - props.width,
          borderRadius: props.borderRadius
        }
      ]}
      locations={[0, 0.5]}
    >
      <TouchableHighlight
        onPress={props.onPress}
        underlayColor={'transparent'}
        style={[
          styles.buttonStyle,
          {
            height: props.height,
            width: deviceWidth - props.width,
            borderRadius: props.borderRadius
          }
        ]}
      >
        <Text style={[styles.textStyle, { paddingTop: props.textPaddingTop,color:props.textColor }]}>
          {props.buttonText}
        </Text>
      </TouchableHighlight>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#2C272D",
    fontSize: 15,
    fontFamily: "Poppins-Regular"
  },
  LinearGradientStyle: {
    //backgroundColor: "#7B7B7B"
  }
});

export { FilterButton };
