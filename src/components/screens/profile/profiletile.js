import React from 'React';
import { StyleSheet,Text,View,TouchableOpacity,Image, ScrollView } from 'react-native';
import CommonStyles from '../../../styles/commonStyles';

export default class ProfileTile extends React.Component {

    state = {  profileImage: '.' };

   render(){
     return(
        <View style={styles.mainStyle}>
        <View style={styles.containerStyle}>
            <View style={styles.imageContainer}>
            <Image resizeMode="cover" style={styles.profileImageStyle}  borderRadius={50} source={require('../../../assets/img/profileimage.jpg')} />
            <View style={styles.nameContainer}>
            <View  style={{paddingBottom:10}}>
             <Text style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold
              ]}>Tony Stark</Text>
            </View>
            <View>
             <View style={{backgroundColor:'#0B9EAF',height:20,paddingTop:20}}></View>
            </View>
            </View>
            </View> 
            <View style={styles.followButtonContainer}>
            <TouchableOpacity style={styles.followButtonStyle}>
            <Text style={styles.followButtonTextStyle} >{"Follow"}</Text>
            </TouchableOpacity>
            </View>
         </View>
         <View style={styles.profileWeightStyle}>
           <View>
               <View>
               <Image resizeMode="cover" style={styles.socialStyle}  borderRadius={5} source={require('../../../assets/img/like.png')} />
               </View>
               <View >
                 <Text  style={[
            CommonStyles.normalText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
          ]}>298 Like</Text>
               </View>    
            </View>
           <View style={styles.leftRightBorder}>
               <View>
               <Image resizeMode="cover" style={styles.socialStyle}  borderRadius={5} source={require('../../../assets/img/dislike.png')} />
               </View>
               <View>
                 <Text  style={[
            CommonStyles.normalText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
          ]}>196 Dislike</Text>
               </View> 
            </View>
           <View elevation={5}>
               <View>
               <Image resizeMode="cover" style={styles.socialStyle}  borderRadius={5} source={require('../../../assets/img/user.png')} />
               </View>
               <View>
                 <Text  style={[
            CommonStyles.normalText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
          ]}>97 Followers</Text>
               </View>
            </View>
         </View>
         </View>
     )
 }
}

const styles = StyleSheet.create({

    mainStyle:{
        width:'97%',
        height:150,
        marginTop: 2,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation:6,
        padding:5
     },
    containerStyle: {
        flex:1,
        flexDirection:'row',
        
     },
     profileImageStyle: {
         height:70,
         width: 70,
     },
     imageContainer:{
     flex: 1,
      flexDirection: 'row',
      alignItems:'flex-start',
     },
     nameContainer:{
       flexDirection: 'column',
       paddingLeft:20
     },
     nameTextStyle:{
       fontWeight:'bold',
       fontSize:20
     },
     followButtonContainer:{
       flex:0.7,  
       alignItems:'flex-end'
      
     },
     followButtonStyle:{
        width:'100%',
        backgroundColor: '#7B7B7B',
        height:45,
        borderRadius: 40,
        padding:0,
        
     },
     followButtonTextStyle:{
        alignSelf: 'center',
        textAlign:'center',
        color: '#F1F1F2',
        fontSize: 15,
        paddingTop: 10,
        fontFamily:'Poppins-SemiBold'
     },
     profileWeightStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        padding:10
     },
     socialStyle:{
        height:25,
        width: 25,
     },
     leftRightBorder:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingLeft:20,
        paddingRight:20
     }

});
