import React from 'react';
import { View,Text } from 'react-native';
import { Slider } from "react-native-elements";
import { Button } from '../../common';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';

export default class RETab extends React.Component{

    state={
        value:120
    }
    
    _handleClickSignUpButton() {
        
    }
    render(){
        return(
            <View style={[CommonStyles.spaceBetween,{flex:1}]}>
             <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Price Range
            </Text>
            </View>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
            <Slider
             value={this.state.value}
             onValueChange={(value) => this.setState({value})} 
             minimumValue={120}
             maximumValue={1200}/>
            </View>
            </View>
            <View style={[CommonStyles.buttonBox ]}>
            <Button
            onPress={this._handleClickSignUpButton.bind(this)}
            buttonText={"Search"}
            />
             </View>
            </View>    
        )
    }
}