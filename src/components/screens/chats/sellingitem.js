import React from 'React';
import { StyleSheet,Text,View,Image,Dimensions, TouchableOpacity } from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class SellingItem extends React.Component {
  
  _openChatWindow() {
    this.props.navigatorProps.navigator.push({
      screen: "TwoFourApp.Chat",
      title: "Chat"
    });
  }
  
  render(props){
   // const { type } = this.props.type;
   
    return(
      <TouchableOpacity onPress={this._openChatWindow.bind(this)}>
      <View style={styles.containerStyle}>
      <View style={CommonStyles.row}>
     <Image style={styles.productStyle} borderRadius={50} source={{ uri: 'http://lorempixel.com/400/200/' }} resizeMode='cover' />
     <View style={{flexDirection:'column',justifyContent:'flex-start',paddingLeft:20}}>
      <View >
      <Text style={[CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold]}>Macbook Pro Retina</Text>
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
      </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({

    containerStyle: {
       flex:0.3,
       flexDirection:'row',
       marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation: 6,
       alignItems:'center',
       justifyContent:'space-between',
       borderBottomWidth:2,
       borderColor:'#EDEDED'
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