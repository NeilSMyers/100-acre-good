import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

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
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={{ uri: "https://source.unsplash.com/random" }}
        >
          <View style={styles.quoteWrapper}>
            <Text style={styles.quote}>"{props.quote}"</Text>
            <Text style={[styles.author, styles.quote]}>-{props.author}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -1,
    marginVertical: 5,
    overflow: "hidden",
    flex: 1
  },
  author: {
    textAlign: "right"
  },
  quoteWrapper: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  quote: {
    color: "white"
  }
});

export default Quote;
