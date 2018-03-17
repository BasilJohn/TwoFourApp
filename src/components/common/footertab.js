import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Navigation } from "react-native-navigation";

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient
} from "../../styles/commonStyles";
import PrimeTabBar from "../../components/common/primtetab";

export default class CustomTabBar extends Component {
  handlePress = text => {
    this.props.navigator.push({
      screen: "TwoFourApp." + text,
      title: text
    });
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimeTabBar
        navigator={this.props.navigator}
        isActive={this.props.isActive}
        tabBtn0={{
          activeBtn: require("../../assets/img/cameraActive.png"),
          inactiveBtn: require("../../assets/img/camera.png"),
          width: 30,
          height: 30,
          onPressButton: this.handlePress.bind(this, "PostAd")
          //onPressButton: this._onPostAdIconClick.bind(this),
        }}
        tabBtn1={{
          activeBtn: require("../../assets/img/homeActive.png"),
          inactiveBtn: require("../../assets/img/home.png"),
          width: 30,
          height: 30,
          buttonAction: this.handlePress.bind(this, "Home")
          //buttonAction: this._onHomeIconClick.bind(this),
        }}
        tabBtn2={{
          activeBtn: require("../../assets/img/chatActive.png"),
          inactiveBtn: require("../../assets/img/chat.png"),
          width: 30,
          height: 30,
          buttonAction: this.handlePress.bind(this, "Chats")
          //buttonAction: this._onChatsIconClick.bind(this),
        }}
        tabBtn3={{
          activeBtn: require("../../assets/img/notificationActive.png"),
          inactiveBtn: require("../../assets/img/notificationBell.png"),
          width: 30,
          height: 30,
          buttonAction: this.handlePress.bind(this, "Notification")
          //buttonAction: this._onNotificationIconClick.bind(this),
        }}
        tabBtn4={{
          activeBtn: require("../../assets/img/profileActive.png"),
          inactiveBtn: require("../../assets/img/profile.png"),
          width: 21,
          height: 25,
          buttonAction: this.handlePress.bind(this, "UserProfile")
          //buttonAction: this._onProfileIconClick.bind(this),
        }}
      />
    );
  }

  // Handle click buttons of tabbar
  _onHomeIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }

  _onChatsIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 1
    });
  }

  _onPostAdIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 2
    });
  }

  _onNotificationIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 3
    });
  }

  _onProfileIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 4
    });
  }
}

export { CustomTabBar };
