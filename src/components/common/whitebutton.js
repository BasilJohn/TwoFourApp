import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View
} from "react-native";
const deviceWidth = Dimensions.get("window").width;

const WhiteButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: deviceWidth/2.2,
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 5,
    borderWidth:1,
    borderColor: "rgb(150,150,150)",
    padding: 10
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "rgb(105,105,105)",
    fontSize: 16,
    fontWeight: "600",
    //paddingTop: 3,
    //paddingBottom: 5,
    fontFamily: "Poppins-SemiBold"
  }
});

export { WhiteButton };
