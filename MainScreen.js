import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Quote from "./Quote";

import data from "./mockData";

const App = props => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={data}
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Quote
              quote={item.quote}
              author={item.author}
              image={item.image}
              navigation={props.navigation}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
