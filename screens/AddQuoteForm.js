import React from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"
import { baseEndpoint } from "../secrets"
import images, { QuoteModel } from "../models"

const AddQuoteForm = props => {
  const [quote, setQuote] = React.useState("")
  const [author, setAuthor] = React.useState("")

  const handleSubmit = () => {
    fetch(`${baseEndpoint}/quotes.json`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        quote,
        author,
        favorite: false
      })
    })
      .then(res => res.json())
      .then(data => {
        new QuoteModel(data.name, quote, author, images[author], false)
      })
    props.navigation.navigate("MainScreen")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Quote"
        value={quote}
        onChangeText={text => setQuote(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={text => setAuthor(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    padding: 10,
    borderRadius: 3,
    margin: 10
  }
})

export default AddQuoteForm
