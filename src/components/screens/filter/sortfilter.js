import React from 'React';
import { View , Text,ScrollView, KeyboardAvoidingView, StyleSheet,TouchableOpacity } from 'react-native';
import CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import { Button } from '../../common';
import { Slider } from "react-native-elements";
export default class SortFilter extends React.Component{

    state={
        value:120
    }
    _handleClickSignUpButton() {
        
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <KeyboardAvoidingView style={CommonStyles.keyboardAvoidingViewContainer} >
            <View>
            <View>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Sort By
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceBetween]}>
            <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"Newest"}</Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"Low to High"}</Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"High to Low"}</Text>
             </TouchableOpacity>
           </View>
            </View>    
            <View>
            <View>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Distance
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
            <View>
            <View>
            <Text style={[CommonStyles.headerText, CommonStyles.blackColor,CommonStyles.extraBold]}>
              Posted Within
            </Text>
            </View>
            <View style={[CommonStyles.row,CommonStyles.spaceBetween]}>
            <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"24 hours"}</Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"7 days"}</Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity style={styles.filterButtonStyle}>
            <Text style={styles.filterButtonTextStyle} >{"30 days"}</Text>
             </TouchableOpacity>
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