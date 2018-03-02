import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions,ScrollView, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
import ProfileTile  from './profile/profiletile';
import CommonStyles, { deviceHeight } from '../../styles/commonStyles';
import { DetailItem } from '../common';
import { SocialIcon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class App extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >
         {imageArray}
        </ScrollView>
        <View
          style={styles.barContainer}>
          {barArray}
        </View>
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
    height:deviceHeight/3,
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
 },
})