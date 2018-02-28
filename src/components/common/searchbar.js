import React from 'react';
import { View ,Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonStyles,  { deviceHeight,shadowOpt,deviceWidth } from '../../styles/commonStyles';

export default class NavBars extends React.Component{

    
    handlePress = (text) => {
        this.props.navigator.push({
            screen: "TwoFourApp.SortFilter",
            title:'Sort and Filter'
          });
    }

    render(){
        return(
            <View>
                <View style={{width:null}}>
                <SearchBar
                    round
                    // onChangeText={someMethod}
                    // onClearText={someMethod}
                    clearIcon
                    containerStyle={styles.seachBarContainerStyle}
                    inputStyle={styles.textInputStyle}
                    placeholder='Search' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    footerImageStyle: {
        height: 50,
        flex: 1,
        width: 50,

    },buttonStyle: {
        width: 50,
        height: 50,
        backgroundColor:'red'
    },
    seachBarContainerStyle:{
        backgroundColor:'#59A99C'
    },
    textInputStyle:{
        backgroundColor:'#FAFAFA',
        fontFamily:'Poppins-Regular'
    }
});