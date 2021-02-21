import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Image,  TouchableOpacity } from 'react-native';

import { RIF } from '../componentes/rif'

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 25,
    paddingBottom: 50,
  },
  imagenPrincipal: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  botonPrincipal: {
    backgroundColor: "#FB9A00",
    padding: 25,
    marginVertical: 15,
    borderRadius: 5,
  },
  textoBotonPrincipal: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  descripcion: {
    color: "#000",
    fontSize: 18
  },
  imagenSecundaria: {
    width: "100%",
    height: undefined,
    aspectRatio: 3/2,
    resizeMode: "contain",
  },
});

export const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Image
        source={require("../imagenes/adopt1.jpg")}
        style={styles.imagenPrincipal}
      />
      <View style={styles.contenedor}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Nuestros Amigos')}
          style={styles.botonPrincipal}  
        >
          <Text style={styles.textoBotonPrincipal}>
            Ir a la lista de animales
          </Text>
        </TouchableOpacity>

        <Text style={styles.descripcion}>En ocasiones un solo ladrido basta, para ser consciente de que no nos encontramos completamente solos. Y si cuentas con amigo fiel a tu lado, no hará falta más que verlo mover la cola y alegrarse por tu llegada, para que el día haya valido la pena.</Text>

        <Image
          source={require("../imagenes/adopt2.jpg")}
          style={styles.imagenSecundaria}
        />
        
      </View>
      <RIF />
    </ScrollView>
  );
}