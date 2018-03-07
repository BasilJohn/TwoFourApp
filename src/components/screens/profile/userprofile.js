import React from 'react';
import { View ,Text,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import ProfileTile from '../profile/profiletile';
import { LinearGradientButton,GradientNavigationBar } from '../../common';
import  CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import UserItemList from '../userItems/useritemlist';
import { noNavTabbarNavigation } from '../../../styles/navigatorstyle';
export default class UserProfile extends React.Component {
    static navigatorStyle = noNavTabbarNavigation;
    handlePress = () => {
    
    }
    componentDidMount(){
        this.props.navigator.setButtons({
          rightButtons: [
            {
              title: 'Edit', // if you want a textual button
              icon: require('../../../assets/img/settings.png'), // if you want an image button
              //component: 'example.CustomButton', // if you want a custom button
              passProps: {}, // Object that will be passed as props to custom components (optional)
              id: 'filter', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
              //testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
              disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
              disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
              buttonColor: 'white', // Set color for the button (can also be used in setButtons function to set different button style programatically)
              buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
              buttonFontWeight: '600'
            }
          ],
          animated: true
        });
      }
      constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            priceType: { type: 'selling'},
        };
      }
    
      onNavigatorEvent(event) {
    
        if (event.type == 'NavBarButtonPress') {
          if (event.id == 'filter') {
             this.props.navigator.push({
              screen: "TwoFourApp.AutoMobileFilter",
              title:'Sort and Filter'
            });
          }
    
        }
      }

 render(){
    let priceType = this.state.priceType.type;

    return(
        <View style={CommonStyles.normalPage}>
             <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='User Profille'
        />
         <View style={[CommonStyles.paddingTenTop, {alignItems:'center'}]} >   
        <ProfileTile/>
        </View>
        <View style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.parentCircle}>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'selling'}})}>
                {
                  (() => {
                    if (priceType == 'selling') {
                      return (
                        
                        <LinearGradientButton 
                        colorOne={'#3D88A7'}
                        colorTwo={'#3972A0'}
                        colorThree={'#355F9A'}
                        buttonText={'Selling'} 
                        height={40} 
                        width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        onPress={this.handlePress.bind(this)} />
                        
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                           <Text style={[
                        CommonStyles.mediumText,       
                        CommonStyles.greyColor,
                        CommonStyles.semiBold,
                        ]}>Selling</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'sold'}})}>
                {
                  (() => {
                    if (priceType == 'sold') {
                      return (
                        <LinearGradientButton 
                        colorOne={'#3D88A7'}
                        colorTwo={'#3972A0'}
                        colorThree={'#355F9A'}
                        buttonText={'Sold'} 
                        height={40} 
                        width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        onPress={this.handlePress.bind(this)} />
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                           <Text style={[
                        CommonStyles.mediumText,
                        CommonStyles.greyColor,
                        CommonStyles.semiBold,
                        ]}>Sold</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'reviews'}})}>
                {
                  (() => {
                    if (priceType == 'reviews') {
                      return (
                        <LinearGradientButton 
                        colorOne={'#3D88A7'}
                        colorTwo={'#3972A0'}
                        colorThree={'#355F9A'}
                        buttonText={'Reviews'} 
                        height={40} 
                        width={250}
                        borderRadius={60}
                        textPaddingTop={10}
                        onPress={this.handlePress.bind(this)} />
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={[
                        CommonStyles.mediumText,
                        CommonStyles.greyColor,
                        CommonStyles.semiBold,
                        ]}>Reviews</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
            </View>
           </View>
           
        </View>
        <View style={[CommonStyles.paddingTenLeftRight,{height:300}]}>
         <UserItemList/>
         </View>
         {/* <View><Text>Hi</Text></View> */}
        </View>
    )
 }
}

const spaceHeight = 70;


const styles = StyleSheet.create({
    parentCircle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 49,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgb(229,229,229)',
        borderRadius: 50 
      },
      childCircle: {
        height: 39,
        width: (deviceWidth - 40)/3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      activeChildCircle: {
        height: 39,
        width: (deviceWidth - 40)/3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 8,
      },
      btnText: {
        color: 'rgb(150,150,150)',
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
      },
      activeBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
      },
      bottomBtn: {
        position: 'absolute',
        left: 77.5,
        bottom: spaceHeight - 45, 
      }
});