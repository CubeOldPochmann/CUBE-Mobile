import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createDrawerNavigator } from '@react-navigation/drawer';
import CUBE from './assets/components/CUBE';
import Sobre from './assets/components/Sobre';
import Materiais from './assets/components/Materiais';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="CUBE" component={CUBE} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Materiais" component={Materiais} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});