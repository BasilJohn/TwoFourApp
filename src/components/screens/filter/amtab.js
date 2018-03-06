import React from 'react';
import { View,Text,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Slider } from "react-native-elements";
import { Button,LinearGradientButton } from '../../common';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { Dropdown } from 'react-native-material-dropdown';
import RadioButton from 'react-native-radio-button'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class AMTab extends React.Component{

    state={
        value:120,
        multiSliderValue: [3, 7]
    }

    doSomething(value){
        // this.setState({
        //   //
        // })
      }
      _handleClickSignUpButton() {
        
    }
    render(){

        let make = [{
            value: 'Ford',
          }, {
            value: 'Chevy',
          }];

          let model = [{
            value: '1998',
          }, {
            value: '2000',
          }];
        return(
            <ScrollView style={[{flexGrow:1}]}>
            <View style={[CommonStyles.spaceAround,{flex:1}]}>
            <View style={[CommonStyles.row]}>
            <View style={[CommonStyles.row,{flex:0.5}]}>
            <View style={CommonStyles.paddingTen}>
            <RadioButton
                animation={'bounceIn'}
                isSelected={true}
                onPress={() => this.doSomething('hello')}
                />
            </View>
             <View  style={[CommonStyles.paddingTen]}>
               <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>New</Text>
             </View>
            </View>
            <View style={[CommonStyles.row,{flex:0.5}]}>
            <View style={CommonStyles.paddingTen}>
            <RadioButton
                animation={'bounceIn'}
                isSelected={false}
                onPress={() => this.doSomething('hello')}
                />
            </View>
             <View  style={[CommonStyles.paddingTen]}>
               <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Used</Text>
             </View>
            </View>
            </View>
            <View style={[CommonStyles.row]}>
            <View style={[CommonStyles.row,{flex:0.5}]}>
            <View style={CommonStyles.paddingTen}>
            <RadioButton
                animation={'bounceIn'}
                isSelected={false}
                onPress={() => this.doSomething('hello')}
                />
            </View>
             <View  style={[CommonStyles.paddingTen]}>
               <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Certified</Text>
             </View>
            </View>
            <View style={[CommonStyles.row,{flex:0.5}]}>
            <View style={CommonStyles.paddingTen}>
            <RadioButton
                animation={'bounceIn'}
                isSelected={false}
                onPress={() => this.doSomething('hello')}
                />
            </View>
             <View  style={[CommonStyles.paddingTen]}>
               <Text tyle={[CommonStyles.regularBold,CommonStyles.greyColor]}>All</Text>
             </View>
            </View>
            </View>
            <View>
            <View style={[CommonStyles.row,CommonStyles.spaceAround]}>
             <View style={[CommonStyles.paddingTen, {flex:1}]}>
             <Dropdown
             label=''
             data={make}
             value={"Ford"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>
             <View style={[CommonStyles.paddingTen, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>        
            </View> 
            </View>
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.greyColor]}>
              Price Range
            </Text>
            </View>
            <View style={[CommonStyles.paddingTen, {flex: 1,paddingTop:40, alignItems: 'stretch', justifyContent: 'center'}]}>
            <MultiSlider
            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
            sliderLength={deviceWidth-30}
            onValuesChange={this.multiSliderValuesChange}
            min={0}
            max={10}
            step={1}
            trackStyle={{backgroundColor:'#345A99',height:3}}
            selectedStyle={{backgroundColor:'#345A99'}}
             markerStyle={CommonStyles.markerStyle}
             markerContainerStyle={[CommonStyles.markerContainerStyle]}
            />
            </View>
            </View>
            <View>
            <View style={CommonStyles.paddingTenLeft}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.greyColor]}>
              Year
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceAround]}>
             <View style={[CommonStyles.paddingTenLeft, {flex:1}]}>
             <Dropdown
             label=''
             data={make}
             value={"Ford"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>
             <View style={[CommonStyles.paddingTenLeftRight, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>        
            </View> 
             </View>
             <View>
            <View style={CommonStyles.paddingTenLeft}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold,CommonStyles.greyColor]}>
              Mileage
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceAround]}>
             <View style={[CommonStyles.paddingTenLeft, {flex:1}]}>
             <Dropdown
             label=''
             data={make}
             value={"Ford"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>
             <View style={[CommonStyles.paddingTenLeftRight, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
             itemTextStyle={[CommonStyles.regularBold,CommonStyles.greyColor]}
             style={[CommonStyles.regularBold,CommonStyles.greyColor]}
              />
             </View>        
            </View> 
             </View>
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/convertible.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Convertible</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/wagon.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Wagon</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/all-terrain-vehicle.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>SUV</Text>
                 </View> 
                 </View>    
             </View>  
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/truck.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Truck</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/minivan.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Minivan</Text>
                 </View> 
                 <View>
                 <Image  source={require('../../../assets/img/coupe-car.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Coupe</Text>
                 </View> 
                 </View>    
             </View>  
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/sedan-car-model.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Sedan</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/car.png')}
                  style={{width: 50, height:50}}/>
                  <Text style={[CommonStyles.regularBold,CommonStyles.greyColor]}>Hatchback</Text>
                 </View> 
                 <View>
                 <Image  source={require('../../../assets/img/All.png')}
                  style={{width: 70, height:70}}/>
                  {/* <Text>All</Text> */}
                 </View> 
                 </View>    
             </View>             
            </View>
            <View style={[CommonStyles.buttonBox ]}>
            <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'Search'} 
              height={60} 
              width={20}
              borderRadius={60}
              textPaddingTop={20}
              onPress={this._handleClickSignUpButton.bind(this)} />
             </View>
            </ScrollView>    
        )
    }
}