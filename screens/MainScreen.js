import React from "react"
import { StyleSheet, Alert, View, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import Quote from "../components/Quote"

import data from "../mockData"
import { TouchableOpacity } from "react-native-gesture-handler"

const App = props => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={data}
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Quote
              quote={item.quote}
              author={item.author}
              image={item.image}
              navigation={props.navigation}
            />
          )
        }}
      />
    </View>
  )
}

App.navigationOptions = navData => {
  return {
    headerTitle: "Quotes",
    headerRight: (
      <View style={styles.plus}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("WOOHOOO", "You did it!", [{ text: "Yes I Did" }])
          }
        >
          <Ionicons name="ios-add" color="black" size={34} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  plus: {
    paddingRight: 15
  }
})

export default App
