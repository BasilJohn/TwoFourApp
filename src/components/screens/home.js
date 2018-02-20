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
   
  componentDidMount(){
    this.props.navigator.setButtons({
      rightButtons: [
        {
          title: 'Edit', // if you want a textual button
          icon: require('../../assets/img/filter.png'), // if you want an image button
          //component: 'example.CustomButton', // if you want a custom button
          passProps: {}, // Object that will be passed as props to custom components (optional)
          id: 'filter', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
          //testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
          disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
          disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
          buttonColor: 'white', // Set color for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: '600'
        }
      ],
      animated: true
    });

    //this.props.setNavigationProps(this.props.navigator);

  }
  
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
  
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {

    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'filter') {
        console.log(event.id)
        this.props.navigator.push({
          screen: "TwoFourApp.SortFilter",
          title:'Sort and Filter'
        });
      }

    }
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