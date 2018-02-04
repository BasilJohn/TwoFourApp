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

// Only for FindDoctors, FindHospital, Appointment screens
export const spaceHeight = deviceHeight -  375 - 45;

// Only for post screens
export const postSpaceHeight = deviceHeight - 364;

export default CommonStyles = StyleSheet.create({

    postPageButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
      },
      nextButton: {
        flex: 1,
        alignItems: 'center',
        width: 60,
        height: 60 
      },
      addFirstImageStyle:{
        height: 20,
        flex: 1,
        width: 50,
        alignSelf: 'center'
      },
      normalSinglePage: {
        flex: 1,
        backgroundColor: "#FFFFFF",
     
      },
      // post pages styles
  postPageImageBox: {
    alignItems: 'center',
    marginTop: postSpaceHeight * 0.33,
  },
  postPageTextBox: {
    alignItems: 'center',
    marginTop: postSpaceHeight * 0.27,
  },
  postPageSubText: {
    width: deviceWidth - 75,
    height: 60,
    marginTop: 15,
    color: 'rgb(105,105,105)',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  // Text 
  extraLargeText: {
    height: 52,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  titleText: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight:"bold",
    paddingBottom:20
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30
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
    fontFamily: 'Poppins-Bold',
  },
  // Color
  whiteColor: {
    color: '#FFFFFF',
  },
  greyColor: {
    color: 'rgb(105,105,105)',
  },
  lightgreyColor: {
    color: 'rgb(150,150,150)',
  },
  blackColor: {
    color: 'rgb(19,19,19)',
  },
  softBlueColor: {
    color: 'rgb(75,102,234)',
  },
  darkSkyBlueColor: {
    color: 'rgb(63,103,230)',
  },
  periBlueColor: {
    color: 'rgb(79,109,230)',
  },

  //Textinput
  textInput: {
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 50,
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },textInputField: {
    flexDirection: 'row',
    width: deviceWidth-20,
    height: 45,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    backgroundColor:'#FFFFFF',
  },

  footerControlStyle:{

    flexDirection: 'row',
    paddingBottom: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width:'100%',
    height:'12%',
    alignItems:'flex-end'
  }
});

