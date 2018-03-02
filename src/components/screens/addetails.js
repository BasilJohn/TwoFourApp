import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions,ScrollView, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
import ProfileTile  from './profile/profiletile';
import CommonStyles, { deviceHeight } from '../../styles/commonStyles';
import { DetailItem } from '../common';
import { SocialIcon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class App extends Component {

  state = {  entries: [],activeSlide:0 };

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  _renderItem ({item, index}) {
    
    return (
      <View style={styles.slide}>
      <Image
          style={{width: deviceWidth-100, height:  deviceHeight/2.6}}
          source={{uri: item}}
        />
        </View>
      )
}
componentWillMount(){
 this.setState({entries:images})
}
get pagination () {
  const { entries, activeSlide } = this.state;
  return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );
}
  render() {
    const itemWidth = deviceWidth - 85;

    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
      <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={deviceWidth}
              itemWidth={itemWidth}
            />
          {/* { this.pagination } */}
        </View>
        <View style={CommonStyles.priceButtonContainer}>
        <TouchableHighlight style={CommonStyles.priceButtonStyle}>
        <Text style={styles.reportButtonTextStyle} >{"$999.00"}</Text>
         </TouchableHighlight>
        </View>
        <View style={styles.productNameContainer}>
          <View style={[CommonStyles.row]}>
            <View style={{flex:0.8}}>
          <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.semiBold]}>
            {'Samsung Galaxy S8-256GB'}
          </Text>
          </View>
          <View style={{flex:0.2}}>
          <Ionicons style={CommonStyles.horizontalRight} name={'md-heart-outline'} color={"black"} size={40} />
          </View>
          </View>
          <View>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.light,
          ]}>
            {'Posted 2 hours ago'}
          </Text>
        </View>
         </View>
        <View style={{alignItems:'center'}}>
        <ProfileTile/>
        <View style={CommonStyles.wrapperBox}>
            <DetailItem 
              headerText='Description'
              detailText='Apple iPhone 6 used phone recently bought 32 gb internal condition urgent sale low price are not be entertained please!'
            />
          </View>
          <View style={styles.headerContainer}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
            {marginBottom: 2,alignSelf:'flex-start'}
          ]}>
            {'Share Ad'}
          </Text>
          </View>
          <View style={styles.socialIconContainer}>
          <View style={CommonStyles.row}>
            <View>
            <SocialIcon  type='facebook'/>
            </View>
            <View>
            <SocialIcon  type='google-plus-official'/>
            </View>
            <View>
            <SocialIcon  type='instagram'/>
            </View>
            <View>
            <SocialIcon  type='twitter'/>
            </View>
            <View>
            <SocialIcon  type='pinterest'/>
            </View>
          </View>
          <View>
          {/* <TouchableOpacity style={styles.reportButtonStyle}>
            <Text style={styles.reportButtonTextStyle} >{"Report"}</Text>
          </TouchableOpacity> */}
          </View>  
          </View>  
          </View>
          <View style={[CommonStyles.row, {justifyContent:'space-between',padding:10}]}>
           <View>
             <TouchableOpacity style={styles.messageButtonStyle}>
            <Text style={styles.reportButtonTextStyle} >{"Message"}</Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity style={styles.offerButtonStyle}>
            <Text style={styles.reportButtonTextStyle} >{"Make Offer"}</Text>
             </TouchableOpacity>
           </View>  
          </View>  
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:deviceHeight/2.5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
    borderColor:'red'
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
   headerContainer: {
    alignSelf: 'flex-start',
    marginBottom: 2,
    paddingLeft:10
  },
  socialIconContainer:{
    flexDirection:'row',
    
  },
  productNameContainer:{
    padding:10,
    paddingTop:25
  },
  offerButtonStyle:{
    width:deviceWidth-195,
    backgroundColor: '#7B7B7B',
    height:60,
    borderRadius: 30,
 },
 messageButtonStyle:{
  width:deviceWidth-195,
  backgroundColor: '#36629B',
  height:60,
  borderRadius: 30,
  
},
 reportButtonTextStyle:{
   
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color: '#F1F1F2',
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    paddingTop:20
 },slide: {
  alignItems: 'center',
  width: deviceWidth - 85,
  height: deviceHeight/2.5,
  borderRadius: 8,
  backgroundColor: 'rgb(105,105,105)'
},
})