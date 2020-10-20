import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bold: {
    fontWeight: "bold"
  },
  black: {
    color: '#000'
  }
})

export const RIF = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={[styles.black, styles.bold]}>RIF: </Text>
      <Text style={styles.black}>J-128679451</Text>
    </View>
  )
}