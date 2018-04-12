import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import { View } from "react-native";
//window.navigator.userAgent = "react-native";
var io = require("socket.io-client/dist/socket.io");

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
   
    //this.socket.on("userId", this.getUserId);
  }
  static navigatorStyle = noNavTabbarNavigation;

  state = {
    messages: []
  };

  componentDidMount(){
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
    messages:[]
    this.setState(previousState => ({
      //console.log('s');
      messages: GiftedChat.append(previousState.messages, mes)
    }));
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
        />
      </View>
    );
  }
}
