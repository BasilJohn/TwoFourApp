import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native'
export const deviceWidth = Dimensions.get('window').width;

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle} >{props.buttonText}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    buttonStyle: {

        width:deviceWidth-10,
        backgroundColor: '#345A99',
        height:60,
        borderRadius: 40,
        padding:10

    },
    textStyle: {
        alignSelf: 'center',
        textAlign:'center',
        color: '#F1F1F2',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }

});


 export { Button };