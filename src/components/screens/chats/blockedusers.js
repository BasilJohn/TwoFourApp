import React from 'react';
import { View ,Text,StyleSheet,FlatList } from 'react-native';
import ChatItem from '../chats/chatitem';

const fav = [ { name:'Nora Brady',profileImage:''},
              { name:'Kate Diaz',profileImage:''},
              { name:'Sarah Austin',profileImage:''}];                

export default class BlockedUsers extends React.Component {

    state = {  buyingList: [] };

     componentWillMount() {
        this.setState({buyingList:fav})
      }
      
      render(props) {
    
        return (
          <FlatList
            data={this.state.buyingList}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
            <ChatItem type={'block'} details={item}/>
              }>
          </FlatList>
        );
      }
    }



