import React from 'React';
import { StyleSheet,Text,View,Image,Dimensions } from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export default class ProfileTile extends React.Component {
  
  render(){
    return(
      <View style={styles.containerStyle}>
      <View style={{flexDirection:'row',alignself:'center'}}>
     <Image style={styles.imageStyle} borderRadius={50} source={{ uri: 'http://lorempixel.com/400/200/' }} resizeMode='cover' />
     <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
      <View style={{padding:5}}>
      <Text>Nora Brady</Text>
      </View>
      <View style={{padding:5}}>
      <Text>IPhone 7 Plus</Text>
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
       borderWidth:1,
       borderColor:'red',
       padding:10,
       width:deviceWidth,
       alignItems:'center',
       justifyContent:'space-between'
      },
      imageStyle:{
         height:70,
         width: 70
      }
     
});