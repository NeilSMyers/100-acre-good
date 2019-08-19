import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Quote from "./Quote";

import data from "./mockData";

const Favorites = props => {
  const renderFavorites = ({ item }) => {
    return (
      <Quote
        quote={item.quote}
        author={item.author}
        image={item.image}
        navigation={props.navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={data.filter(item => item.favorite)}
        renderItem={renderFavorites}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default Favorites;
