import React from 'react';
import { View,StyleSheet,Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { deviceWidth, deviceHeight } = Dimensions.get('window');

export default class GradientNavBar extends React.Component{

    render(){
        return (
            <LinearGradient 
                colors={['#3D88A7','#3972A0', '#355F9A']}
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                style={styles.LinearGradientStyle}
                locations={[0,0.5,1]} >
            <View></View>
            </LinearGradient>
        );
    }
}
   



const styles = StyleSheet.create({

    buttonStyle: {
        width:deviceWidth,
        height:60,
    }
    ,LinearGradientStyle: {
        width:deviceWidth,
        height:60,
     },

});


