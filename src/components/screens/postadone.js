import React, { Component } from 'react';
import { View,Text,StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ImageButton } from '../common';
import CommonStyles from '../../styles/commonStyles';
import {  SearchBar  } from "react-native-elements";


var data = [
    {"id":1,"Category":"Cars & Vehicles"},
    {"id":2,"Category":"Electronics & Gadgets"},
    {"id":3,"Category":"Real Estate"},
    {"id":4,"Category":"Sports"},
    {"id":5,"Category":"Fashion & Beauty"},
    {"id":6,"Category":"Pets & Animals"},
    {"id":7,"Category":"Job Openings"},
  ];

export default class PostAd extends Component {

    state = {  categoryList: [] };
    
    _keyExtractor = (item, index) => item.id;

    renderRowItem = (itemData) => {

      
        return (
            <TouchableOpacity>
            <View style={styles.categoryItem}>
                <Text style={[ CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.mediumText]}>{itemData.item.Category}</Text>
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
      backgroundColor:"#FFF"
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
        borderBottomWidth:1,
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
    }
  });