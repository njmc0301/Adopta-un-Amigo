import React, { useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Cargando } from '../componentes/Cargando'
import { RIF } from '../componentes/Rif'
import { removePerros } from '../servicios/perros'

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 25,
  },
  imagenPrincipal: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textoDatos: {
    fontSize: 24,
    color: '#000',
  },
  bold: {
    fontWeight: "bold",
  },
  flexRow: {
    flexDirection: "row",
  },
  botonAdoptar: {
    backgroundColor: "#0000FE",
    padding: 25,
    marginVertical: 15,
    borderRadius: 5,
  },
  textoBotonAdoptar: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
})

export const Detalles = ({route, navigation}) => {
  const { amigo } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const handleAdoptarModalOnPress = () => {
    navigation.navigate("Home");
  }

  const adoptar = async () => {
    setIsLoading(true);
    
    await removePerros(amigo.id);
    
    setIsLoading(false);

    Alert.alert(
      "MUCHAS GRACIAS POR ADOPTAR A UN AMIGO!!!!",
      "Para continuar con el proceso de adopcion nos veremos en la fecha acordada, para completar los pasos finales para buscar a su Nuevo amigo, Con la mayor alegria se despide Adopta un Amigo :D",
      [
        { text: "OK", onPress: handleAdoptarModalOnPress }
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image
        source={{ uri: amigo.imagen }}
        style={styles.imagenPrincipal}
      />

      <View style={styles.contenedor}>
        <View style={styles.flexRow}>
          <Text style={[styles.textoDatos, styles.bold]}>Edad: </Text>
          <Text style={styles.textoDatos}>{amigo.edad}</Text>
        </View>
      
        <View style={styles.flexRow}>
          <Text style={[styles.textoDatos, styles.bold]}>Raza: </Text>
          <Text style={styles.textoDatos}>{amigo.raza}</Text>
        </View>
      
        <View style={styles.flexRow}>
          <Text style={[styles.textoDatos, styles.bold]}>Genero: </Text>
          <Text style={styles.textoDatos}>{amigo.genero}</Text>
        </View>
      
        <View style={styles.flexRow}>
          <Text style={[styles.textoDatos, styles.bold]}>Comportamiento: </Text>
          <Text style={styles.textoDatos}>{amigo.comportamiento}</Text>
        </View>
      
        {isLoading ? (
          <Cargando />
        ) : (
          <TouchableOpacity
            style={styles.botonAdoptar}
            onPress={adoptar}
          >
            <Text style={styles.textoBotonAdoptar}>Adoptar</Text>
          </TouchableOpacity>
        )}

      </View>
      <RIF />

    </ScrollView>
  )
}