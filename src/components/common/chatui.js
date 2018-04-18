import React, { Component } from "react";
import {
  GiftedChat,
  Actions,
  Bubble,
  SystemMessage
} from "react-native-gifted-chat";
import CustomActions from "../common/chat/customchatactions";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import { View,StyleSheet,Text,Platform } from "react-native";
//window.navigator.userAgent = "react-native";
var io = require("socket.io-client/dist/socket.io");

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    //this.socket.on("userId", this.getUserId);
  }
  static navigatorStyle = noNavTabbarNavigation;

  state = {
    messages: [],
    loadEarlier: true,
    typingText: null,
    isLoadingEarlier: false
  };

  componentDidMount() {
    this.socket = io.connect("http://68.66.233.230:3000/");
    this.socket.on("chat message", this.onReceivedMessage.bind(this));
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://facebook.github.io/react/img/logo_og.png"
          }
        }
      ]
    });
  }
  onReceivedMessage(mes) {
    const arrMes = [{ ...mes.messages }];
    //console.log(mes)
    // newMessage: [
    //   {
    //     _id: 1,
    //     text:arrMes.text,
    //     createdAt: arrMes.createdAt,
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://facebook.github.io/react/img/logo_og.png"
    //     }
    //   }
    // ]
    messages: [];
    this.setState(previousState => ({
      //console.log('s');
      messages: GiftedChat.append(previousState.messages, mes)
    }));
  }

  renderCustomActions(props) {
    if (Platform.OS === "ios") {
      return <CustomActions {...props} />;
    }
    const options = {
      "Action 1": props => {
        alert("option 1");
      },
      "Action 2": props => {
        alert("option 2");
      },
      Cancel: () => {}
    };
    return <Actions {...props} options={options} />;
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{this.state.typingText}</Text>
        </View>
      );
    }
    return null;
  }

  onSend(messages = []) {
    const mes = messages[0];
    // const { username } = this.state;
    // mes['username'] = username;
    //this.socket.emit("messages", mes);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    this.socket.emit("chat message", mes);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        {/* <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Chats"
        /> */}
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          renderActions={this.renderCustomActions}
          renderFooter={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  footerText: {
    fontSize: 14,
    color: "#aaa"
  }
});
