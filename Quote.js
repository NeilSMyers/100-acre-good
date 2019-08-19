import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Quote = props => {
  return (
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10
  },
  quoteWrapper: {
    width: "78%"
  },
  quote: {},
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
});

export default Quote;
