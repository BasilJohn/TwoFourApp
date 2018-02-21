import React from 'react';
import { View ,Text,StyleSheet,FlatList } from 'react-native';
import SellingItem from '../chats/sellingitem';
 
const fav = [ { name:'Nora Brady',profileImage:'',productImage:''},
              { name:'Kate Diaz',profileImage:'',productImage:''},
              { name:'Sarah Austin',profileImage:'',productImage:''}];                

export default class Selling extends React.Component {

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
            <SellingItem type={'selling'} details={item}/>
              }>
          </FlatList>
        );
      }
    }


