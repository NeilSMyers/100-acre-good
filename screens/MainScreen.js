import React, { useState, useEffect } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { baseEndpoint } from "../secrets"
import Quote from "../components/Quote"
import images, { QuoteModel } from "../models"
import { TouchableOpacity } from "react-native-gesture-handler"

const App = props => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    loadQuotes()
  }, [])

  const loadQuotes = () => {
    fetch(`${baseEndpoint}/quotes.json`)
      .then(res => res.json())
      .then(data => {
        const quoteArray = []
        for (const id in data) {
          quoteArray.push(
            new QuoteModel(
              id,
              data[id].quote,
              data[id].author,
              images[data[id].author],
              data[id].favorite
            )
          )
        }
        setQuotes(quoteArray)
      })
  }

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={loadQuotes}
        refreshing={false}
        keyExtractor={item => String(item.id)}
        data={quotes}
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
          onPress={() => navData.navigation.navigate("AddQuoteForm")}
        >
          <Ionicons name="ios-add" color="black" size={34} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  plus: {
    paddingRight: 15
  }
})

export default App
