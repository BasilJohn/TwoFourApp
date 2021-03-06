import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
  blueGradient
} from "../../styles/commonStyles";
import LinearGradient from "react-native-linear-gradient";

export default class Footer extends React.Component {
  handlePress = text => {
    this.props.screenProps.props.navigator.push({
      screen: "TwoFourApp." + text,
      title: text
    });
  };

  render(props) {
    //const { image } = this.props.userDetails;

    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          onPress={this.handlePress.bind(this, "Home")}
          style={styles.buttonStyle}
        >
          <Ionicons
            style={styles.footerImageStyle}
            name={"ios-home-outline"}
            color={"black"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlePress.bind(this, "Chats")}
          style={styles.buttonStyle}
        >
          <Ionicons
            style={styles.footerImageStyle}
            name={"ios-chatbubbles-outline"}
            color={"black"}
            size={50}
          />
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          colors={blueGradient.colors}
          style={{
            position: "absolute",
            bottom: 9,
            left: (deviceWidth - 60) / 2,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            elevation: 25,
            borderRadius: 200
          }}
        >
          <TouchableOpacity
            onPress={this.handlePress.bind(this, "PostAd")}
            style={styles.buttonStyle}
          >
            <Ionicons
              style={styles.footerImageStyle}
              name={"ios-camera-outline"}
              color={"black"}
              size={50}
            />
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          onPress={this.handlePress.bind(this, "RealEstateFilter")}
          style={styles.buttonStyle}
        >
          <Ionicons
            style={styles.footerImageStyle}
            name={"ios-notifications-outline"}
            color={"black"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlePress.bind(this, "UserProfile")}
          style={styles.buttonStyle}
        >
          <Ionicons
            style={styles.footerImageStyle}
            name={"ios-contact-outline"}
            color={"black"}
            size={50}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    paddingBottom: 1,
    justifyContent: "space-around",
    backgroundColor: "rgb(243,246,254)",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(229,229,229,0.4)",
    width: deviceWidth,
    alignItems: "center"
  },
  buttonStyle: {
    width: 100,
    height: 50,
    paddingTop: 3
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  footerImageStyle: {
    height: 20,
    flex: 1,
    width: 50,
    alignSelf: "center",
    color: "#7F7C7C"
  }
});

export { Footer };
