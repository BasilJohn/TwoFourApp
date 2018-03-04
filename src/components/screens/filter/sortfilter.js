import React from 'React';
import { View , Text,ScrollView, KeyboardAvoidingView, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { Button,LinearGradientButton } from '../../common';
import { Slider } from "react-native-elements";
export default class SortFilter extends React.Component{

    state={
        value:120
    }
    _handleClickSignUpButton() {
        
    }
    handlePress = () => {
    
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <KeyboardAvoidingView style={CommonStyles.keyboardAvoidingViewContainer} >
            <View style={[CommonStyles.spaceAround,{flex:1}]}>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.greyColor,CommonStyles.extraBold]}>
              Sort By
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceBetween]}>
            <View>
            <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'Newest'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
           <View>
           <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'Low to High'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
           <View>
           <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'High to Low'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
            </View>    
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.greyColor,CommonStyles.extraBold]}>
              Distance
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
            <Text style={[CommonStyles.headerText, CommonStyles.greyColor,CommonStyles.extraBold]}>
              Location
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceBetween]}>
            <View style={[CommonStyles.textInputField,{flex:0.80}]}>
            <TextInput style={CommonStyles.textInput}
              placeholder='Location to set'
              underlineColorAndroid='transparent'
            />
            </View>
            <View >
             <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'Set'} 
              height={60} 
              width={195}
              borderRadius={60}
              onPress={this.handlePress.bind(this)} />
            </View>      
            </View>
            </View>
            <View>
            <View style={CommonStyles.paddingTen}>
            <Text style={[CommonStyles.headerText, CommonStyles.greyColor,CommonStyles.extraBold]}>
              Posted Within
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceBetween]}>
            <View>
            <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'24 Hrs'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
           <View>
           <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'7 Days'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
           <View>
           <LinearGradientButton 
              colorOne={'#3D88A7'}
              colorTwo={'#3972A0'}
              colorThree={'#355F9A'}
              buttonText={'30 Days'} 
              height={60} 
              width={250}
              borderRadius={10}
              onPress={this.handlePress.bind(this)} />
           </View>
            </View> 
            </View>
            </View>
            </KeyboardAvoidingView>
            <View style={[CommonStyles.buttonBox ]}>
            <Button
            onPress={this._handleClickSignUpButton.bind(this)}
            buttonText={"Apply"}
            />
             </View>
            </ScrollView>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    filterButtonStyle:{
        width:deviceWidth-250,
        backgroundColor: '#36629B',
        height:60,
        borderRadius: 10,
      },
      filterButtonTextStyle:{
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          color: '#F1F1F2',
          fontSize: 16,
          fontWeight: '600',
          paddingTop:20
       },
  });