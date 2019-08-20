import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <Ionicons
          style={styles.icon}
          name="ios-arrow-forward"
          size={23}
          color="#7d7d7d"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
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
});

export default Quote;
