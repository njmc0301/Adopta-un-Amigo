import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Login } from '../componentes/Login'
import { Registro } from '../componentes/Registro'
import { RIF } from '../componentes/Rif'

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 25,
  },
})

export const Autenticacion = ({navigation}) => {
  const [pantalla, setPantalla] = useState('registro')
  return (
    <ScrollView>
      <View style={styles.contenedor}>
        {pantalla === 'registro' && (
          <Registro setPantalla={setPantalla}  navigation={navigation} />
        )}
        {pantalla === 'login' && (
          <Login setPantalla={setPantalla}  navigation={navigation} />
        )}
        
      </View>
      <RIF />

    </ScrollView>
  )
}