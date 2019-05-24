/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Friends from './screens/friendsScreen';
import First from './screens/firstScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer/index';
import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen';
import SettingsScreen from './screens/settingsScreen';
// import { Ionicons } from '@expo/vector-icons';



const store = createStore(rootReducer);

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-options${focused ? '' : '-outline'}`;
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <view></view>;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));


// const AppNavigator = createStackNavigator({
//   Home: First,
//   Friends: Friends
// },
//   {
//     initialRouteName: "Home"
//   });

//const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     possibleFriends: [
  //       'Allie',
  //       'Gator',
  //       'Lizzie',
  //     ],
  //     currentFriends: [],
  //   }
  // }

  // addFriend = (index) => {
  //   const {
  //     currentFriends,
  //     possibleFriends,
  //   } = this.state

  //   // Pull friend out of possibleFriends
  //   const addedFriend = possibleFriends.splice(index, 1)

  //   // And put friend in currentFriends
  //   currentFriends.push(addedFriend)

  //   // Finally, update our app state
  //   this.setState({
  //     currentFriends,
  //     possibleFriends,
  //   })
  // }

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

