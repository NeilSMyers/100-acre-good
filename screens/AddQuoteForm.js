import React from "react"
import { View, Text, StyleSheet, TextInput, Button, Switch } from "react-native"
import mockData, { Quote } from "../mockData"

const AddQuoteForm = props => {
  const [quote, setQuote] = React.useState("")
  const [author, setAuthor] = React.useState("")
  const [favorite, setFavorite] = React.useState(false)

  const handleSubmit = () => {
    const newQuote = new Quote(
      mockData.length + 1,
      quote,
      author,
      require("../assets/winnie/piglet.jpeg"),
      favorite
    )
    mockData.push(newQuote)
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

      <Text>Favorite?</Text>
      <Switch value={favorite} onValueChange={update => setFavorite(update)} />

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
