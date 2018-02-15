import React from 'react';
import { View ,Text,StyleSheet,FlatList } from 'react-native';
import ChatItem from '../chats/chatitem';

export default class Favourites extends React.Component {

    render(){
        return(
        //     <FlatList
        // data={this.props.tripList}
        // keyExtractor={(x, i) => i}
        // renderItem={({ item }) =>
        // <ChatItem  trip={item}/>
        //   }>
        //    </FlatList>
        <View>
            <Text>Favourites</Text>
        </View>
        )
    }
}


