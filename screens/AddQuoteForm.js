import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Picker,
  ScrollView
} from "react-native"
import { baseEndpoint } from "../secrets"
import images, { QuoteModel } from "../models"

const AddQuoteForm = props => {
  const [quote, setQuote] = useState(editMode ? editQuote : "")
  const [author, setAuthor] = useState(
    editMode ? editAuthor : "Christopher Robin"
  )

  const editMode = props.navigation.getParam("editMode")
  const editId = props.navigation.getParam("id")
  const editQuote = props.navigation.getParam("quote")
  const editAuthor = props.navigation.getParam("author")

  useEffect(() => {
    if (editMode) {
      setAuthor(editAuthor)
      setQuote(editQuote)
    }
  }, [])

  const handleSubmit = () => {
    fetch(
      editMode
        ? `${baseEndpoint}/quotes/${editId}.json`
        : `${baseEndpoint}/quotes.json`,
      {
        method: editMode ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          quote,
          author,
          favorite: false
        })
      }
    )
      .then(res => res.json())
      .then(data => {
        new QuoteModel(data.name, quote, author, images[author], false)
      })
    props.navigation.navigate("MainScreen")
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Quote"
          value={quote}
          onChangeText={text => setQuote(text)}
          multiline={true}
        />

        <Picker
          selectedValue={author}
          style={{ width: "90%" }}
          onValueChange={itemValue => setAuthor(itemValue)}
        >
          <Picker.Item label="Christopher Robin" value="Christopher Robin" />
          <Picker.Item label="Winnie The Pooh" value="Winnie The Pooh" />
          <Picker.Item label="Piglet" value="Piglet" />
          <Picker.Item label="Eeyore" value="Eeyore" />
        </Picker>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    width: "90%",
    paddingBottom: 10,
    borderRadius: 3,
    margin: 10,
    fontSize: 20
  }
})

export default AddQuoteForm
