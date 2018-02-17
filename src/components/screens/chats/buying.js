import React from 'react';
import { View ,Text,StyleSheet,FlatList } from 'react-native';
import ChatItem from '../chats/chatitem';
 
const fav = [ { name:'Nora Brady',profileImage:'',productImage:'',time:'60 min ago'},
              { name:'Kate Diaz',profileImage:'',productImage:'',time:'60 min ago'},
              { name:'Sarah Austin',profileImage:'',productImage:'',time:'60 min ago'}];                

export default class Buying extends React.Component {

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
            <ChatItem type={'buying'} details={item}/>
              }>
          </FlatList>
        );
      }
    }



