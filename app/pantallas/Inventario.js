import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { RIF } from '../componentes/Rif'
import { Cargando } from '../componentes/Cargando'

import { getPerros } from '../servicios/perros';

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
  const [perrosData, setPerrosData] = useState('');

  useEffect(() => {
    fetchPerros();
  }, []);

  const fetchPerros = async () => {
    const res = await getPerros();

    setPerrosData(res);
  };

  if(!perrosData) {
    return <Cargando />
  }

  return (
    <FlatList
      data={perrosData}
      renderItem={({item}) => <Amigo item={item} navigation={navigation} />}
      keyExtractor={(_, index) => `amigo-${index}`}
      ListFooterComponent={
        <RIF />
      }
    />
  )
}