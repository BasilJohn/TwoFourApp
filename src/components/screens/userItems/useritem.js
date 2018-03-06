import React from 'React';
import { StyleSheet,Text,View,Image,Dimensions, TouchableHighlight } from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class SellinngItem extends React.Component {
  
   

  render(props){
   // const { type } = this.props.type;
    return(
      <View style={styles.containerStyle}>
      <View style={CommonStyles.row}>
     <Image style={styles.productStyle} borderRadius={50} source={{ uri: 'http://lorempixel.com/400/200/' }} resizeMode='cover' />
     <View style={{flexDirection:'column',justifyContent:'flex-start',paddingLeft:20}}>
      <View >
      <Text style={[CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.extraBold]}>Macbook Pro Retina</Text>
      </View>
       <View>
       
        <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>30 views</Text>
       </View> 
       <View style={[CommonStyles.row]}>
       <View style={{paddingRight:5}}>
          <Ionicons name={'ios-timer-outline'} color={"#696969"} size={25} />
          </View> 
           <View>
         <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>3 hours ago</Text>
          </View>
       </View>
      </View>
      </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({

    containerStyle: {
       flex:0.3,
       flexDirection:'row',
       padding:10,
       width:deviceWidth-20,
       alignItems:'center',
       justifyContent:'space-between',
       borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
       
       
      },
      imageStyle:{
         height:70,
         width: 70
      },
      productStyle:{
        height:90,
        width: 90
     }
     
});