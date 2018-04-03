import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ChatItem from "../userItems/sellingchatitem";

const fav = [
  { name: "Nora Brady", profileImage: "", productImage: "" }
];

export default class ChatItemList extends React.PureComponent {
  state = { chatList: [] };

  componentWillMount() {
    this.setState({ chatList: fav });
  }

  componentDidMount() {}

  render(props) {
    return (
      <FlatList
        data={this.state.chatList}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => (
          <ChatItem
            type={"selling"}
            navigatorProps={this.props.navigator}
            details={item}
          />
        )}
      />
    );
  }
}
