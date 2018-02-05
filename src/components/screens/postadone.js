import React, { Component } from 'react';
import { View,Text,StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ImageButton } from '../common';
import CommonStyles from '../../styles/commonStyles';
import {  SearchBar  } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

var data = [
    {"id":1,"Category":"Cars & Vehicles","Image":"ios-car-outline"},
    {"id":2,"Category":"Electronics & Gadgets","Image":"ios-cash-outline"},
    {"id":3,"Category":"Real Estate","Image":"ios-home-outline"},
    {"id":4,"Category":"Sports","Image":"ios-football-outline"},
    {"id":5,"Category":"Fashion & Beauty","Image":"ios-basket-outline"},
    {"id":6,"Category":"Pets & Animals","Image":"ios-paw-outline"},
    {"id":7,"Category":"Job Openings","Image":"ios-briefcase-outline"},
  ];

export default class PostAd extends Component {

    state = {  categoryList: [] };
    
    _keyExtractor = (item, index) => item.id;

    renderRowItem = (itemData) => {

      
        return (
            <TouchableOpacity>
            <View style={styles.categoryItem}>
            <Ionicons style={styles.categoryItemAvatarStyle} name={itemData.item.Image} color={"#696969"} size={25} />
            <Text style={[ CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.mediumText,styles.categoryTextStyle]}>{itemData.item.Category}</Text>
            </View>
             </TouchableOpacity>
            )
        }
        componentWillMount(){
            {this.getCategoryList()}
        }

        getCategoryList = () => {
            this.setState({ categoryList: data })
        }
    render(){
        return(
            <View style={CommonStyles.normalSinglePage}>
                <View>
                <SearchBar
                containerStyle={styles.searchBarContainerStyle}
                inputStyle={styles.searchBarInputStyle}
                placeholder='Search Category' />
                </View>
                <View style={styles.middleControlStyle}>
                <FlatList 
                data={this.state.categoryList} 
                keyExtractor={this._keyExtractor}  
                renderItem={this.renderRowItem}
                />
                </View>
                <View style={[CommonStyles.introPageButtonBox]}>
                <View style={CommonStyles.introPageButton}>
                    <ImageButton
                    style={CommonStyles.backButton}
                    styleImage={CommonStyles.backButton}
                    appearance={{
                     normal: require("../../assets/img/esclipCopy2.png"),
                    highlight: require("../../assets/img/esclipCopy2.png")
                     }}
                    onPress={this._prevScreenApp.bind(this)}
                />
                </View>
                <View style={CommonStyles.introPageButton}>
                <ImageButton
                    style={CommonStyles.nextButton}
                    styleImage={CommonStyles.nextButton}
                    appearance={{
                    normal: require("../../assets/img/next.png"),
                    highlight: require("../../assets/img/next.png")
                        }}
                    onPress={this._handleClickNextButton.bind(this)}
                />
                </View>
                </View>
          </View>
        )
    }
    
    // Go to IntroThreeScreen
  _handleClickNextButton() {
    this.props.navigator.push({
      title: "Post Ad",
      screen: "TwoFourApp.PostAdTwo"
    });
  }

  // Back the previous screen 
  _prevScreenApp() {
    this.props.navigator.pop({});
  }
}

const styles = StyleSheet.create({
    searchBarContainerStyle: {
      backgroundColor:"#FFF",
      borderBottomWidth:0
    },
    searchBarInputStyle: {
        backgroundColor:"#FFF",
        borderWidth:1,
        borderColor:'black',
        borderRadius:50
      },
      categoryItem:{

        flex: 1,
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        height: 60,
        borderBottomWidth:0.5,
        borderColor:'black',
      },
      footerControlStyle:{
       
        alignItems:"flex-end",
        justifyContent:"flex-end",
        borderColor:'black'
        
    },
    middleControlStyle:{
        flex:2,
        justifyContent:"center",
        padding:10
    },
    categoryTextStyle:{

        paddingLeft:50,
        fontWeight:"bold",
        color: '#696969',
        // fontColor:'#696969'
    },
    categoryItemAvatarStyle:{
        position:'absolute',
         bottom: 18,
         left: 5, 
         width: 25, 
         height: 25
    }
  });