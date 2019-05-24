import React, {Component} from 'react';
import {Button, Platform, Text, View} from 'react-native';
import LogoTitle from './logoTitle';

export default class HomeScreen extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //       headerTitle: <LogoTitle />,
    //       headerRight: (
    //         <Button
    //           onPress={navigation.getParam('increaseCount')}
    //           title="+1"
    //           color={Platform.OS === 'ios' ? '#fff' : null}
    //         />
    //       ),
    //     };
    //   };
    
    //   componentWillMount() {
    //     this.props.navigation.setParams({ increaseCount: this._increaseCount });
    //   }
    
    //   state = {
    //     count: 0,
    //   };
    
    //   _increaseCount = () => {
    //     this.setState({ count: this.state.count + 1 });
    //   };

    render() {
      return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Text>Home Screen</Text>
        //   <Text>{this.state.count}</Text>
        //   <Button
        //     title="Go to Details"
        //     onPress={() => {
        //       /* 1. Navigate to the Details route with params */
        //       this.props.navigation.navigate('Details', {
        //         itemId: 86,
        //         otherParam: 'anything you want here',
        //       });
        //     }}
        //   />
        // </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
      );
    }
  }