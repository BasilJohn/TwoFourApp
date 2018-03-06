import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions,ScrollView, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
import ProfileTile  from './profile/profiletile';
import CommonStyles, { deviceHeight } from '../../styles/commonStyles';
import { DetailItem,PrimeButton,ImageSlider,LinearGradientButton } from '../common';
import { SocialIcon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10


export default class App extends Component {

  handlePress = () => {
    
    }
    
    componentDidMount(){
    this.props.navigator.setStyle({
     // navBarCustomView: 'TwoFourApp.NavBar',
     // drawUnderNavBar: true,
      navBarHidden:false,
//navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
     // navBarTransparent: true, // make the nav bar transparent, works best with drawUnderNavBar:true,
    
    });
  }
  render() {
   
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.container}>
       <ImageSlider/>
       <View style={CommonStyles.priceButtonContainer}>
        <TouchableHighlight style={CommonStyles.priceButtonStyle}>
        <Text style={styles.reportButtonTextStyle} >{"$999.00"}</Text>
         </TouchableHighlight>
           </View>
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
          </View>
          <View>
          {/* <TouchableOpacity style={styles.reportButtonStyle}>
            <Text style={styles.reportButtonTextStyle} >{"Report"}</Text>
          </TouchableOpacity> */}
          </View>  
          </View>  
          </View>
          <View style={[CommonStyles.row, {justifyContent:'space-between',padding:10}]}>
          <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'Message'} 
              height={60} 
              width={195}
              borderRadius={60}
              textPaddingTop={20}
              onPress={this.handlePress.bind(this)} />
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
const spaceHeight = 70;

const styles = StyleSheet.create({
  container: {
    height:deviceHeight/2.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderColor:'#E9E9E9',
    elevation:3

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
 }
})