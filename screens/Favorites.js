import React, { useState, useEffect } from "react"
import { View, StyleSheet, FlatList } from "react-native"

import { baseEndpoint } from "../secrets"
import images, { QuoteModel } from "../models"

import Quote from "../components/Quote"

const Favorites = props => {
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

  const renderFavorites = ({ item }) => {
    return (
      <Quote
        quote={item.quote}
        author={item.author}
        image={item.image}
        navigation={props.navigation}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={quotes.filter(item => item.favorite)}
        renderItem={renderFavorites}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
})

export default Favorites
