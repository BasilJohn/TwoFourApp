import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import CommonStyles, { deviceHeight,deviceWidth } from '../../styles/commonStyles';

import LinearGradient from 'react-native-linear-gradient';

const LinearGradientButton = (props) => {

    return (
        <LinearGradient 
            colors={[props.colorOne, props.colorTwo, props.colorThree]}
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            style={[styles.LinearGradientStyle,{height:props.height,
                width:deviceWidth-props.width,borderRadius:props.borderRadius}]}
            locations={[0,0.5,1]} >
        <TouchableOpacity onPress={props.onPress} 
        style={[styles.buttonStyle,{height:props.height,
        width:deviceWidth-props.width,borderRadius:props.borderRadius}]}>
        <Text style={styles.textStyle} >{props.buttonText}</Text>
        </TouchableOpacity>
        </LinearGradient>
    );
};



const styles = StyleSheet.create({
   
    textStyle: {
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color: '#F1F1F2',
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    paddingTop:20
    }
    ,LinearGradientStyle: {
        backgroundColor: '#7B7B7B',
     },

});


 export { LinearGradientButton };