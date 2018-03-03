import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import CommonStyles, { deviceHeight,deviceWidth } from '../../styles/commonStyles';

import LinearGradient from 'react-native-linear-gradient';

const LinearGradientButton = (props) => {

    return (
        <LinearGradient 
            colors={[props.colorOne, props.colorTwo, props.colorThree]}
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            style={styles.LinearGradientStyle}
            locations={[0,0.5,1]} >
        <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle,{height:props.height}]}>
            <Text style={styles.textStyle} >{props.buttonText}</Text>
        </TouchableOpacity>
        </LinearGradient>
    );
};



const styles = StyleSheet.create({

    buttonStyle: {
        width:deviceWidth-195,
        height:60,
        borderRadius: 30,
    },
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
        width:deviceWidth-195,
        backgroundColor: '#7B7B7B',
        height:60,
        borderRadius: 30,
     },

});


 export { LinearGradientButton };