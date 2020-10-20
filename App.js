import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './app/pantallas/Home';
import { Inventario } from './app/pantallas/Inventario';
import { Detalles } from './app/pantallas/Detalles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nuestros Amigos" component={Inventario} />
        <Stack.Screen
          name="Confirmacion"
          component={Detalles}
          options={({ route }) => ({ title: route.params.amigo.nombre })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
