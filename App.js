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
      headerTitle: "Quotes",
      headerStyle: {
        backgroundColor: "#f5f5f5"
      }
    }
  },
  QuoteDetail: {
    screen: QuoteDetail,
    navigationOptions: {
      headerTitle: "Details",
      headerStyle: {
        backgroundColor: "#f5f5f5"
      }
    }
  }
});

const FavoriteNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      headerTitle: "Favorites",
      headerStyle: {
        backgroundColor: "#f5f5f5"
      }
    }
  },
  QuoteDetail: {
    screen: QuoteDetail,
    navigationOptions: {
      headerTitle: "Detail",
      headerStyle: {
        backgroundColor: "#f5f5f5"
      }
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons
            name={tabInfo.focused ? "ios-list-box" : "ios-list"}
            size={28}
          />
        )
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
        )
      }
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: "black",
        style: {
          backgroundColor: "#f5f5f5"
        }
      }
    }
  }
);

export default createAppContainer(TabNavigator);
