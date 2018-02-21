import React from 'react';
import { View,Text,TouchableOpacity,ScrollView } from 'react-native';
import { Slider } from "react-native-elements";
import { Button } from '../../common';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class RETab extends React.Component{

    state={
        value:120,
        includeSuburbs:-1
    }
    
    _handleClickSignUpButton() {
        
    }
    render(){
        let propertyType = [{
            value: 'Apartment & Unit',
          }, {
            value: 'Individual Unit',
          }, {
            value: 'Guest House',
          }];

          let minMax = [{
            value: 'Min',
          }, {
            value: 'Max',
          }];

          let brNumber = [{
            value: 'All',
          }, {
            value: '1',
          }, {
            value: '2',
          }, {
            value: '3',
          }, {
            value: '4',
          }];
          
          let radio_props = [
            {label: 'Include Surrounding Suburbs', value: 0 },
          
          ];
        return(
            <ScrollView style={[{flexGrow:1}]}>
            <View style={[CommonStyles.spaceAround,{flex:1}]}>
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Property Type
            </Text>
            </View>
            <View style={CommonStyles.paddingTenLeftRight}>
            <Dropdown
             label=''
             data={propertyType}
              />
           </View>
            </View>
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Price Range
            </Text>
            </View>
            <View style={[CommonStyles.paddingTen, {flex: 1, alignItems: 'stretch', justifyContent: 'center'}]}>
            <Slider
             value={this.state.value}
             onValueChange={(value) => this.setState({value})} 
             minimumValue={120}
             maximumValue={1200}/>
            </View>
            </View>
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Bed Rooms
            </Text>
            </View> 
            <View style={[CommonStyles.row,CommonStyles.spaceAround]}>
             <View style={[CommonStyles.paddingTen, {flex:1}]}>
             <Dropdown
             label=''
             data={minMax}
              />
             </View>
             <View style={[CommonStyles.paddingTen, {flex:1}]}>
             <Dropdown
             label=''
             data={minMax}
              />
             </View>        
            </View>    
            </View> 
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Bath Rooms
            </Text>
            </View> 
            <View style={[CommonStyles.paddingTen, {flex:0.5}]}>
            <Dropdown
             label=''
             data={brNumber}
              />
             </View>   
            </View>  
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Square Feet
            </Text>
            </View> 
            <View style={[CommonStyles.paddingTen, {flex:0.5}]}>
            <Dropdown
             label=''
             data={brNumber}
              />
             </View>   
            </View>     
            <View>
             <View>
             <RadioForm
                radio_props={radio_props}
                 initial={this.state.includeSuburbs}
                onPress={(value) => {this.setState({includeSuburbs:!value})}}
                /> 
             </View>   
            </View>   
            </View> 
            <View style={[CommonStyles.buttonBox ]}>
            <Button
            onPress={this._handleClickSignUpButton.bind(this)}
            buttonText={"Search"}
            />
             </View>
            </ScrollView>  
        )
    }
}