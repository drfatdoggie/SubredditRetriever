import React, { Component } from "react";
import {
    View,
    Text
} from "react-native";
import SubredditPicker from './containers/SubredditPicker';

class RedditApp extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 50}}>
        <SubredditPicker />

        <Text style={{padding: 200}}>Retrieved Posts</Text>
      </View>
    )
  }
}

export default RedditApp;