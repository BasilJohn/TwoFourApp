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
      <Text style={[
                    CommonStyles.itemHeaderText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold,
                    {marginTop: -6}
                  ]}>Macbook Pro Retina</Text>
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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 8,
        flex:0.3,
        backgroundColor: '#FFFFFF',
        elevation: 6,
             
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