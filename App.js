import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchComponent from "./screens/searchComponent";
import DashboardComponent from "./screens/dashBoard";

const AppNavigator = createStackNavigator(
  {
    SearchComponent: SearchComponent,
    DashboardComponent: DashboardComponent
  },
  {
    initialRouteName: "SearchComponent"
  }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}