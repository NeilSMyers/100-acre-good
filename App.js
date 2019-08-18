import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from "./MainScreen";
import QuoteDetail from "./QuoteDetail";

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

export default createAppContainer(AppNavigator);
