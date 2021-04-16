import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native"
import { registrarUsuarioEnServidor } from '../servicios/usuarios'
import { Cargando } from '../componentes/Cargando'

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: 'column'
  },
  registerTitle: {
    fontSize: 50,
    color: '#333',
    textAlign: 'center',
    paddingBottom: 20
  },
  loginTitle: {
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


export const Registro = ({setPantalla, navigation}) => {
  const RegisterInput = ({ onChange, label, ...props }) => {
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

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    nombre: [],
    email: [],
    password: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  
  const updateForm = (value, field) => {
    const newForm = {
      ...form,
      [field]: value
    };
    setForm(newForm);
  }

  const clearErrors = () => {
    setFormErrors({
      nombre: [],
      email: [],
      password: [],
    })
  }

  const simularLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Nuestros Amigos')
      setIsLoading(false);
    }, 1000);
  }

  const validarFormulario = () => {
    clearErrors();
    console.log("🚀 ~ file: Registro.js ~ line 109 ~ validarFormulario ~ validarFormulario")
    return Object.entries(form).reduce((acc, [key, val]) => {
      if(!val) {
        setFormErrors({
          ...formErrors,
          [key]: [
            ...formErrors[key],
            'El campo es requerido'
          ]
        });
        console.log("🚀 ~ file: Registro.js ~ line 113 ~ returnObject.entries ~ key", key)
      }

      return acc && val
    }, true)
  }

  const registrarUsuario = async () => {
    console.log("🚀 ~ file: Registro.js ~ line 119 ~ registrarUsuario ~ registrarUsuario")
    if(validarFormulario()) {
      setIsLoading(true)

      await registrarUsuarioEnServidor()

      setIsLoading(false)
    }
    console.log("🚀 ~ file: Registro.js ~ line 113 ~ returnObject.entries ~ formErrors", formErrors)
  }

  return (
    <View style={styles.flexColumn}>
      <View style={styles.formContainer}>
        <Text style={styles.registerTitle}>
          Registro
        </Text>

        <RegisterInput
          label={'Nombre'}
          name={'nombre'}
        />
        <RegisterInput
          label={'Email'}
          name={'email'}
          keyboardType={'email-address'}
        />
        <RegisterInput
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
              Registrarse
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => setPantalla('login')}
        >
          <Text style={styles.loginTitle}>
            Iniciar Sesion
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}