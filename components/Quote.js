import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Swipeout from "react-native-swipeout"

const Quote = props => {
  return (
    <Swipeout
      style={{ backgroundColor: "white" }}
      right={[
        {
          text: <Ionicons name="ios-trash" size={33} color="white" />,
          underlayColor: "red",
          type: "delete",
          onPress: () => props.handleDelete(props.id)
        }
      ]}
    >
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: "QuoteDetail",
            params: {
              quote: props.quote,
              author: props.author
            }
          })
        }
      >
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={props.image} />
          </View>
          <View style={styles.quoteWrapper}>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.quote}>{props.quote}</Text>
          </View>
          <Ionicons
            style={styles.icon}
            name="ios-arrow-forward"
            size={23}
            color="#7d7d7d"
          />
        </View>
      </TouchableOpacity>
    </Swipeout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "white"
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10
  },
  quoteWrapper: {
    width: "75%"
  },
  quote: {},
  icon: {
    alignSelf: "flex-start"
  },
  imageWrapper: {
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 12
  },
  image: {
    height: "100%",
    width: "100%"
  }
})

export default Quote
