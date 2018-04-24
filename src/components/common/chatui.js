import React, { Component } from "react";
import { GiftedChat,Actions,Bubble,SystemMessage } from "react-native-gifted-chat";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import CustomActions from '../chatcomponents/customactions';
import CustomView  from '../chatcomponents/customview'
import DefaultMessageList from '../chatcomponents/defaultmessagelist';

import { View,Text,Image,StyleSheet,Platform,TouchableOpacity } from "react-native";
//window.navigator.userAgent = "react-native";
var io = require("socket.io-client/dist/socket.io");

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };
   
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSend=this.renderSend.bind(this);
    this.renderChatFooter=this.renderChatFooter.bind(this)

  }
  static navigatorStyle = noNavTabbarNavigation;

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
            avatar: "https://picsum.photos/200/300"
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

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }
  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
            // shadowOffset: {width: 0, height: 0},
            // shadowColor: '#000000', 
            // shadowOpacity: 0.2, 
            // shadowRadius: 3,
            borderRadius:10,
            borderTopLeftRadius:0,
            borderBottomRightRadius:10
          },
          right:{
            borderRadius:10,
            borderTopRightRadius:0,
            borderBottomRightRadius:10
          }

        }}
        containerStyle={{
          
        }}
        //style={{marginBottom:20}}
      />
    );
  }
  renderSend (sendProps){
    return(
      <View style={[CommonStyles.alignCenter,{marginRight:10}]}>
      <View style={[CommonStyles.row,CommonStyles.alignCenter]}>
      {/* <View style={{alignSelf:'center'}}>
    <TouchableOpacity>
    <Image resizeMode={'cover'} style={{height:50,width:50}} source={require('../../assets/img/locate.png')} />
      
    </TouchableOpacity>
    </View> */}
    <View style={{alignSelf:'center'}}>
    <TouchableOpacity>
    
      <Image resizeMode={'cover'} style={{height:19,width:22}} source={require('../../assets/img/chatsend.png')} />
    </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}
renderChatFooter(){
  return(
    <DefaultMessageList/>
  );
}
  
  render() {
    return (
      <View style={CommonStyles.normalPage}>
        {/* <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Chats"
        /> */}
        <View style={styles.itemContainerStyle}>
        <View style={{marginLeft:10}}>
              <Image
                style={styles.productStyle}
                //borderRadius={24}
                //source={{ uri: "http://lorempixel.com/400/200/" }}
                source={require('../../assets/img/d2.jpg')}
                resizeMode="cover"
              />
              </View>
              <View style={{marginLeft:40}}>
                <View>
              <Text
                style={[
                  CommonStyles.mediumText,
                  CommonStyles.titleGreyColor,
                  CommonStyles.mediumBold
                ]}
              >
                  Touch Mobile for Sale
                </Text>
                </View>
                <View>
                <Text
                style={[
                  CommonStyles.appText,
                  CommonStyles.priceTextColor,
                  CommonStyles.regularBold
                ]}
              >
                  $1149
                </Text>
                  </View>
                </View>
         </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          //renderActions={this.renderCustomActions}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
          renderSystemMessage={this.renderSystemMessage}
          renderBubble={this.renderBubble}
          renderSend={this.renderSend}
          renderChatFooter={this.renderChatFooter}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

   itemContainerStyle:{
    height:81,
    //width:deviceWidth-30,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth:0.3,
    borderBottomColor:'#7B7B7B',
    alignItems:'center'
   },
   productStyle: {
     height: 52,
     width: 56,
     //borderRadius:30
   }, footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  
});

