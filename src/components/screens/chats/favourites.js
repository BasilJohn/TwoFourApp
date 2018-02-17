import React from 'react';
import { View ,Text,StyleSheet,FlatList } from 'react-native';
import ChatItem from '../chats/chatitem';
 
const fav = [ { name:'Nora Brady',profileImage:'',productImage:''},
              { name:'Kate Diaz',profileImage:'',productImage:''},
              { name:'Sarah Austin',profileImage:'',productImage:''}];                

export default class Favourites extends React.Component {

    state = {  favouriteList: [] };

     componentWillMount() {
        this.setState({favouriteList:fav})
      }
      
      render(props) {
    
        return (
          <FlatList
            data={this.state.favouriteList}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
            <ChatItem  details={item}/>
              }>
          </FlatList>
        );
      }
    }



