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
    // console.log('https://image.tmdb.org/t/p/w500'+itemData.item.poster_path)
    return (
      <TouchableOpacity style={styles.imageContainerStyle} onPress={this._openadDetails.bind(this)}>
        <Image style={styles.imageStyle} source={{ uri: 'https://image.tmdb.org/t/p/w500'+itemData.item.poster_path }} resizeMode='cover' />
        {/* <Text>{itemData.item.original_title}</Text> */}
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

  // async  getMoviesFromApi() {
  //   try {
  //     let response = await fetch(
  //       'https://api.themoviedb.org/3/movie/popular?api_key=e248a915f47615796d83a0de440f6755&language=en-US&page=1'
  //     );
  //     let responseJson = await response.json();
  //     this.setState({ moviesList: json.parse(responseJson.results) });
  //     return responseJson.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  getMoviesFromApiAsync = () => {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=e248a915f47615796d83a0de440f6755&language=en-US&page=1')
      .then(response =>{
        if (response.ok) {
          return response.json();
        } else {
          // handle error 
        }
      }).then((responseJson) => {
        this.setState({ moviesList: responseJson.results })
        return responseJson.results;
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