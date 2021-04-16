import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native"
import { Cargando } from '../componentes/Cargando'

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: 'column'
  },
  loginTitle: {
    fontSize: 50,
    color: '#333',
    textAlign: 'center',
    paddingBottom: 20
  },
  registerTitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingBottom: 20
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#888',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#DDD',
    padding: 20,
    marginVertical: 20
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  formLabel: {
    color: '#000',
    fontSize: 14,
  },
  formError: {
    color: '#FF0000',
    fontSize: 10,
  },
  botonRegistro: {
    backgroundColor: "#FB9A00",
    padding: 5,
    marginTop: 15,
    borderRadius: 5,
  },
  textoBotonRegistro: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
})


export const Login = ({navigation, setPantalla}) => {

  const [isLoading, setIsLoading] = useState(false);
  
  const simularLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Nuestros Amigos')
    }, 1000);
  }

  const LoginInput = ({ label, ...props }) => {
    return (
      <View>
        <Text style={styles.formLabel}>
          { label }
        </Text>
        <TextInput
          style={styles.formInput}
          { ...props }
        />
      </View> 
    )
  }

  return (
    <View style={styles.flexColumn}>
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>
          Iniciar sesion
        </Text>

        <LoginInput
          label={'Email'}
          name={'email'}
          keyboardType={'email-address'}
        />
        <LoginInput
          label={'Password'}
          name={'password'}
          secureTextEntry={true}
        />

        {isLoading ? (
          <Cargando />
        ) : (
          <TouchableOpacity
            onPress={simularLogin}
            style={styles.botonRegistro}  
          >
            <Text style={styles.textoBotonRegistro}>
              Iniciar sesion
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => setPantalla('registro')}
        >
          <Text style={styles.registerTitle}>
            Registro
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}