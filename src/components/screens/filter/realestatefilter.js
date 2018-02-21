import React from 'React';
import { Text,View,Dimensions,StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar,SceneMap } from 'react-native-tab-view';
import CommonStyles from '../../../styles/commonStyles';
import Buy from '../filter/retab';
import Rent from '../filter/retab';
import Sell from '../filter/retab';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

  const BuyRoute = () => <Buy/>;;
  const RentRoute = () => <Rent/>;
  const SellRoute = () => <Sell/>;  

export default class RealEstateFilter extends React.Component{

    state = {
        index: 0,
        routes: [
          { key: 'buy', title: 'Buy' },
          { key: 'rent', title: 'Rent' },
          { key: 'sell', title: 'Sell' }
        ],
      };

    _handleIndexChange = index => this.setState({ index });
  
    _renderHeader = props => <TabBar 
    labelStyle={CommonStyles.tabBarLabelStyle}
    style={CommonStyles.tabBarStyle}
    indicatorStyle={CommonStyles.chatTabIndicatorStyle} 
    tabStyle={CommonStyles.chatTabStyle}  {...props} />;
  
    _renderScene = SceneMap({
      buy: BuyRoute,
      rent: RentRoute,
      sell: SellRoute
    });


    render(){
        return(
            <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });