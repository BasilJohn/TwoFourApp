import React, { Component } from 'React';
import { StyleSheet,Text,View,Image,FlatList,Dimensions,TouchableOpacity } from 'react-native'; 
import {Footer , SlidingMenu } from '../common' 
import { Card , Header, SearchBar  } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 3 ) 

export  default class Home extends Component {

   state = {  moviesList: [] };

  _keyExtractor = (item, index) => item.id;

  renderRowItem = (itemData) => {

    return (
      <TouchableOpacity style={styles.imageContainerStyle} onPress={this._openadDetails.bind(this)}>
        <Image style={styles.imageStyle} source={{ uri: itemData.item.imageUrl }} resizeMode='cover' />
      </TouchableOpacity>
    )
  }

  _openadDetails=()=>{

    this.props.navigator.push({
      screen: "TwoFourApp.AdDetails"
    });
  }

  componentWillMount(){
    {this.getMoviesFromApiAsync()}
  }
  getMoviesFromApiAsync = () => {
    return fetch('http://droidtute.com/reactexample/sample_api/getMovieList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ moviesList: responseJson.movieList })
        return responseJson.movieList;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderCenterComponent=()=>{
     return (
      <SearchBar
  showLoading
  platform="android"
  placeholder='Search' />
     )
  }
  
  
    render(props){
        return(
            <View style={styles.container}>
            <SlidingMenu/>
            <FlatList 
            data={this.state.moviesList} 
            numColumns={3} 
            keyExtractor={this._keyExtractor}  
            renderItem={this.renderRowItem}
            />
            <Footer screenProps={this}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },flatlist: {
        flexDirection: 'column',
     },
     headerStyle:{
       width:width,
       backgroundColor:'#549A91'
     },
     imageStyle:{
      height: 150,  
      width : equalWidth,  
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10
      
     },
     imageContainerStyle:{
       padding:1

     }
  });