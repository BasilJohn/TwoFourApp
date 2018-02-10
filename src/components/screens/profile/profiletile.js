import React from 'React';
import { StyleSheet,Text,View,Image,FlatList,Dimensions } from 'react-native';

export default class ProfileTile extends React.Component {

    state = {  profileImage: '.' };

   render(){
     return(
         <View style={styles.containerStyle}>
              <View>
              <Image resizeMode="cover"  borderRadius={30} style={styles.profileImageStyle} source={require('../../../assets/img/profileimage.jpg')} />
               </View>   
         </View>
     )
 }
}

const styles = StyleSheet.create({

    containerStyle: {
       flex:1,
      },
      profileImageStyle: {
        height: 100,
        width: 100,
       

    }
});
