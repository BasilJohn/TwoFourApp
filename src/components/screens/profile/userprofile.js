import React from 'react';
import { View ,Text,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import ProfileTile from '../profile/profiletile';
import { LinearGradientButton,GradientNavigationBar } from '../../common';
import  CommonStyles ,{ deviceHeight,shadowOpt,deviceWidth } from '../../../styles/commonStyles';
import UserItemList from '../userItems/useritemlist';
import { noNavTabbarNavigation } from '../../../styles/navigatorstyle';
export default class UserProfile extends React.Component {
    static navigatorStyle = noNavTabbarNavigation;

    constructor(props) {
        super(props);
        this.state = {
            priceType: { type: 'selling'},
        };
      }


    handlePress = () => {
    
    }
   
      _handleClickSettingsButton() {
        this.props.navigator.push({
            screen: "TwoFourApp.UserProfileSetting"
          });
      }
 render(){
    let priceType = this.state.priceType.type;

    return(
        <View style={CommonStyles.normalPage}>
             <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='User Profile'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../../assets/img/settings.png'),
                buttonAction: this._handleClickSettingsButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              }
            ]
          }
        />
         
         <View style={[{alignItems:'center',marginTop:50}]} >   
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