import React from "react";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./MainScreen";
import QuoteDetail from "./QuoteDetail";
import Favorites from "./Favorites";

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: "Quotes"
    }
  },
  QuoteDetail: {
    screen: QuoteDetail,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const FavoriteNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      headerTitle: "Favorites"
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  All: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons
          name={tabInfo.focused ? "ios-list-box" : "ios-list"}
          size={28}
        />
      ),
      tabBarOptions: {
        activeTintColor: "black"
      }
    }
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons
          name={tabInfo.focused ? "ios-heart" : "ios-heart-empty"}
          size={28}
        />
      ),
      tabBarOptions: {
        activeTintColor: "black"
      }
    }
  }
});

export default createAppContainer(TabNavigator);
