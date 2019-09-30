import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import imageArray from "../imageArray"

const DropDown = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const renderOptions = () => {
    return imageArray.map(image => {
      return (
        <TouchableOpacity
          key={image}
          onPress={() => {
            props.updateImage(image)
            setIsOpen(false)
          }}
          style={styles.content}
        >
          <Text>{image}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <TouchableOpacity onPress={() => setIsOpen(true)}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Dropped</Text>
        <Ionicons name="ios-arrow-down" color="black" size={25} />
      </View>
      <Modal animationType="slide" transparent={false} visible={isOpen}>
        <View style={styles.modal}>{renderOptions()}</View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 90
  },
  title: {
    fontSize: 17,
    fontWeight: "500"
  },
  modal: {
    marginTop: 70
  },
  content: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 40
  }
})

export default DropDown
