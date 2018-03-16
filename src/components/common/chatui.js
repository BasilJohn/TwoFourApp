import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { GradientNavigationBar } from "../common";
import CommonStyles,  { deviceHeight,shadowOpt,deviceWidth } from '../../styles/commonStyles';
import { View } from 'react-native';
export default class Chat extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  state = {
    messages: []
  };

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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Chats"
        />
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
