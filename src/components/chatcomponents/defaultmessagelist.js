import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import CommonStyles, { deviceWidth } from "../../styles/commonStyles";
import { _ } from "lodash";

var data = [
    {
      id: 1,
      message: "Item still avaialble?"
    },
    {
        id: 2,
        message: "Price negotiable?"
    },
    {
        id: 3,
        message: "Is it new?"
    },
  ];

  export default class DefaultMessage extends Component {


    state = { messageList: [] };


    _keyExtractor = (item, index) => item.id;


    renderRowItem = itemData => {
        
        return (
            <View stye={styles.defaultMessageContainerStyle}>
            <TouchableOpacity style={styles.defaultMessageButton}>
           <Text style={styles.defaultMessageTextStyle}>{itemData.item.message}</Text>   
           </TouchableOpacity>
            </View>
        );
      };
      componentWillMount() {
        {
          this.getMessageList();
        }
      }
    
      getMessageList = () => {
        this.setState({ messageList: data });
       
      };

      render(){
       
    return (
        <View style={styles.containerStyle}>
        <FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
          data={this.state.messageList}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />
      </View>
    )};
}

const styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: "transparent",
      shadowOffset: {width: 0, height: 0},
      shadowColor: '#000000', 
      shadowOpacity: 0.5, 
      shadowRadius: 5,
    
    
    },defaultMessageButton:{
        height:32,
        backgroundColor:'#5B6473',
        borderRadius:50,
        width:180,
        //flex:1,
        margin:5,
    
      },
      defaultMessageTextStyle:{
        fontFamily:"Poppins-Regular",
        alignSelf: "center",
        textAlign: "center",
        color: "#F1F1F2",
        fontSize: 15,
        paddingTop: 5,
        //fontFamily: "Poppins-SemiBold"
        //textAlign:'center'
      },
      defaultMessageContainerStyle:{
       // flex:1,
        alignSelf: 'flex-start'
        //height:200
        
      }
});