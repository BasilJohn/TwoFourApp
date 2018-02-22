import React from 'react';
import { View,Text,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Slider } from "react-native-elements";
import { Button } from '../../common';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { Dropdown } from 'react-native-material-dropdown';
import RadioButton from 'react-native-radio-button'

export default class AMTab extends React.Component{

    state={
        value:120,
        includeSuburbs:-1
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
               <Text>New</Text>
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
               <Text>Used</Text>
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
               <Text>Certified</Text>
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
               <Text>All</Text>
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
              />
             </View>
             <View style={[CommonStyles.paddingTen, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
              />
             </View>        
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
            <View style={CommonStyles.paddingTenLeft}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
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
              />
             </View>
             <View style={[CommonStyles.paddingTenLeftRight, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
              />
             </View>        
            </View> 
             </View>
             <View>
            <View style={CommonStyles.paddingTenLeft}>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
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
              />
             </View>
             <View style={[CommonStyles.paddingTenLeftRight, {flex:1}]}>
             <Dropdown
             label=''
             data={model}
             value={"1998"}
             animation={10}
              />
             </View>        
            </View> 
             </View>
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/convertible.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Convertible</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/wagon.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Wagon</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/all-terrain-vehicle.png')}
                  style={{width: 50, height:50}}/>
                  <Text>SUV</Text>
                 </View> 
                 </View>    
             </View>  
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/truck.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Truck</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/minivan.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Minivan</Text>
                 </View> 
                 <View>
                 <Image  source={require('../../../assets/img/coupe-car.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Coupe</Text>
                 </View> 
                 </View>    
             </View>  
             <View>
                 <View style={[CommonStyles.row,CommonStyles.paddingTen,CommonStyles.spaceAround]}>
                 <View>
                 <Image source={require('../../../assets/img/sedan-car-model.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Sedan</Text>
                 </View> 
                 <View>
                 <Image source={require('../../../assets/img/car.png')}
                  style={{width: 50, height:50}}/>
                  <Text>Hatchback</Text>
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
            <Button
            onPress={this._handleClickSignUpButton.bind(this)}
            buttonText={"Search"}
            />
             </View>
            </ScrollView>    
        )
    }
}