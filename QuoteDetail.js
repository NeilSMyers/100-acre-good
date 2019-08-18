import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const QuoteDetail = props => {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: "https://source.unsplash.com/random" }}
    >
      <View style={styles.quoteWrapper}>
        <Text style={styles.text}>"{props.navigation.getParam("quote")}"</Text>
        <Text style={{ ...styles.text, alignSelf: "flex-end" }}>
          -{props.navigation.getParam("author")}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    height: "100%"
  },
  quoteWrapper: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  text: {
    color: "white",
    padding: 5,
    fontSize: 27
  }
});

export default QuoteDetail;
