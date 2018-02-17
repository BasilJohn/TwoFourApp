import React from 'React';
import { StyleSheet,Text,View,Image,Dimensions } from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export default class ProfileTile extends React.Component {
  
  render(){
    return(
      <View style={styles.containerStyle}>
      <View style={{flexDirection:'row'}}>
     <Image style={styles.imageStyle} borderRadius={50} source={{ uri: 'http://lorempixel.com/400/200/' }} resizeMode='cover' />
     <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
      <View >
      <Text style={[CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.extraBold]}>Nora Brady</Text>
      </View>
      <View >
      <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>IPhone 7 Plus</Text>
      </View>
      </View>
      </View>
      
      <View>
     <Image style={styles.imageStyle} borderRadius={50} source={{ uri: 'http://lorempixel.com/400/200/' }} resizeMode='cover' />
      </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({

    containerStyle: {
       flex:0.2,
       flexDirection:'row',
       elevation:2,
       padding:10,
       width:deviceWidth,
       elevation:6,
       alignItems:'center',
       justifyContent:'space-between'
      },
      imageStyle:{
         height:70,
         width: 70
      }
     
});