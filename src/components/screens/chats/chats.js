import React from 'react';
import { View , StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar,SceneMap } from 'react-native-tab-view';
import Favourites from '../chats/favourites';
import Selling from '../chats/selling';
import Buying from '../chats/buying';
import BlockedUsers from '../chats/blockedusers';
import { deviceWidth } from '../../common/index';
import CommonStyles from '../../../styles/commonStyles';
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };
  
  const SellingRoute = () => <Selling/>;;
  const FavouritesRoute = () => <Favourites/>;
  const BuyingRoute = () => <Buying/>;
  const BlockedUsersRoute = () => <BlockedUsers/>;
  
  export default class TabViewExample extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'selling', title: 'Selling' },
        { key: 'buying', title: 'Buying' },
        { key: 'favourites', title: 'Fav' },
        { key: 'blockedusers', title: 'Blocked' }
      ],
    };
  
    _handleIndexChange = index => this.setState({ index });
  
    _renderHeader = props => <TabBar 
    labelStyle={CommonStyles.tabBarLabelStyle}
    style={CommonStyles.tabBarStyle}
    indicatorStyle={CommonStyles.chatTabIndicatorStyle} 
    tabStyle={CommonStyles.chatTabStyle}  {...props} />;
  
    _renderScene = SceneMap({
      selling: SellingRoute,
      buying: BuyingRoute,
      favourites: FavouritesRoute,
      blockedusers: BlockedUsersRoute
    });
  
    render() {
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
