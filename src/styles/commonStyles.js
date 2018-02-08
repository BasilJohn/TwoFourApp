import {
    StyleSheet,
    Dimensions,
  } from 'react-native';

 export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const shadowOpt = {btnWidth: deviceWidth - 55, btnHeight: 45}

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;
// Only for FindDoctors, FindHospital, Appointment screens
export const spaceHeight = deviceHeight -  375 - 45;

// Only for post screens
export const introSpaceHeight = deviceHeight - 364;

export default CommonStyles = StyleSheet.create({

  keyboardAvoidingViewContainer :{

    backgroundColor: '#fff',
        flex: 1,
        padding:5,
    
  },addImageContainer:{
    
    height:200,
    alignItems:'center',
    justifyContent:'flex-start'
},
addedImageContainer:{
   flex:1,
   flexDirection:'row',
   padding:10,

},
normalSinglePage:{
  backgroundColor: '#fff',
  flex: 1,
},

//// Text 
extraLargeText: {
  height: 52,
  fontSize: 32,
  fontFamily: 'Poppins-Bold',
},
titleText: {
  fontSize: 30,
  lineHeight: 38
},
headerText: {
  fontSize: 18,
  lineHeight: 30,
  paddingBottom:20
},
itemHeaderText: {
  fontSize: 17,
  lineHeight: 29 
},
mediumText: {
  fontSize: 16,
},
normalText: {
  fontSize: 15,
  lineHeight: 23
},
smallText: {
  fontSize: 13,
  lineHeight: 30 
},
shortSmallText: {
  fontSize: 13,
  lineHeight: 23 
},
light: {
  fontFamily: 'Poppins-Light',
}, 
regularBold: {
  fontFamily: 'Poppins-Regular',
}, 
mediumBold: {
  fontFamily: 'Poppins-Medium',
}, 
semiBold: {
  fontFamily: 'Poppins-SemiBold',
}, 
extraBold: {
  fontWeight: 'bold',
}, 
appFontColor:{
  color:"#696969"
},
//Form Styles
  textInputField: {
    flexDirection: 'row',
    width: deviceWidth -15,
    height: 45,
    //marginBottom: 25,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    
  },
  textInput: {
    width: deviceWidth ,
    height: 45,
    paddingLeft: 50,
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    
  },
   multiLinetextInputField:{
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  multiLinetextInput:{
    width: deviceWidth - 55,
    paddingLeft: 50,
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: "top"
  },
  buttonBox: {
    padding:10,
    alignItems: 'center',
  
  },
  //Post Ad Page
  introPageButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: introSpaceHeight * 0.27,
    //marginBottom: 20,
  },
  introPageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    //height: 60,
  },

  // Button Styles
  backButton: {
    flex: 1,
    alignItems: 'center',
    width: 41,
    height: 41 
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    width: 60,
    height: 60 
  },

switchBoxStyle:{
  padding:10,
  flexDirection:'row',justifyContent:'space-between' 
}
});

