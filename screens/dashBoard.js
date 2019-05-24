// DashboardComponent.js

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class DashboardComponent extends Component {
  render() {
    const { navigation } = this.props;
    const passProps = navigation.getParam('passProps', 'Some props');
    const title = navigation.getParam('title', 'some default title');
    
    return (
      <View style={styles.container}>
        <Image source={{uri: passProps.userInfo.avatar_url}} style={styles.image} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  }
});