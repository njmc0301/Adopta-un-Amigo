import React, { useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { ListaDeAmigos } from "../shared";
import { RIF } from '../componentes/rif'

const amigosStyles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 15
  },
  contenedorDatos: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold"
  },
  textoDatos: {
    fontSize: 16,
    color: '#000'
  }

});

const Amigo = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={amigosStyles.contenedor}
      onPress={() => { navigation.navigate('Confirmacion', { amigo: item }) }}
    >
      <Image
        source={{ uri: item.imagen }}
        style={amigosStyles.imagen}
      />
      <View style={amigosStyles.contenedorDatos}>
        <View style={amigosStyles.flexRow}>
          <Text style={[amigosStyles.bold, amigosStyles.textoDatos]}>Nombre: </Text>
          <Text style={amigosStyles.textoDatos}>{item.nombre}</Text>
        </View>

        <View style={amigosStyles.flexRow}>
          <Text style={[amigosStyles.bold, amigosStyles.textoDatos]}>Edad: </Text>
          <Text style={amigosStyles.textoDatos}>{item.edad}</Text>
        </View>

        <View style={amigosStyles.flexRow}>
          <Text style={[amigosStyles.bold, amigosStyles.textoDatos]}>Raza: </Text>
          <Text style={amigosStyles.textoDatos}>{item.raza}</Text>
        </View>

        <View style={amigosStyles.flexRow}>
          <Text style={[amigosStyles.bold, amigosStyles.textoDatos]}>Genero: </Text>
          <Text style={amigosStyles.textoDatos}>{item.genero}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export const Inventario = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={ListaDeAmigos}
          renderItem={({item}) => <Amigo item={item} navigation={navigation} />}
        />
      </View>
      <RIF />
    </ScrollView>
  )
}