import React from "react"

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation"
import { Ionicons } from "@expo/vector-icons"

import MainScreen from "./screens/MainScreen"
import QuoteDetail from "./screens/QuoteDetail"
import Favorites from "./screens/Favorites"
import DropDownDemo from "./screens/DropDownDemoScreen"
import AddQuoteForm from "./screens/AddQuoteForm"

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
  },
  AddQuoteForm: {
    screen: AddQuoteForm,
    navigationOptions: {
      headerTitle: "Add Quote",
      headerStyle: {
        backgroundColor: "#f5f5f5"
      }
    }
  }
})

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
})

const DropDownDemoNavigator = createStackNavigator({
  DropDownDemo
})

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
    },
    DropDown: DropDownDemoNavigator
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
)

export default createAppContainer(TabNavigator)
