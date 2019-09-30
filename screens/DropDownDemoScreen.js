import React from "react"
import { View, StyleSheet, Image } from "react-native"

import DropDown from "../components/DropDown"
import imageArray from "../imageArray"

const DropDownDemo = props => {
  const [image, setImage] = React.useState(imageArray[0])

  React.useEffect(() => {
    props.navigation.setParams({ updateImage })
  }, [])

  const updateImage = newImage => {
    setImage(newImage)
  }

  return (
    <View>
      <Image style={styles.image} source={image} />
    </View>
  )
}

DropDownDemo.navigationOptions = navData => {
  const updateImage = navData.navigation.getParam("updateImage")
  return {
    headerTitle: <DropDown updateImage={updateImage} />
  }
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%"
  }
})

export default DropDownDemo
