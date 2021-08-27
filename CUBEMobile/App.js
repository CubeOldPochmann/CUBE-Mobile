import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ImageBackground, ImageBackgroundComponent,  } from 'react-native';
import { createAppContainer, createDrawerNavigator } from '@react-navigation/drawer';
import Cube from './assets/components/Cube';
import Sobre from './assets/components/Sobre';
import Materiais from './assets/components/Materiais';
import CustomSidebarMenu from './assets/components/CustomSidebarMenu';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer style={styles.container}>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#f91e63',
            itemStyle: {marginVertical: 5},
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />} 
        >
          <Drawer.Screen 
            name="Cube" 
            component={Cube} 
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#ffd900',
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#ffd900',
              },
              drawerActiveTintColor: '#000000',
              drawerIcon: ({color, size}) => (
                <Entypo name="home" size={size} color={color} />
              )
            }}
          />
          <Drawer.Screen 
            name="Sobre" 
            component={Sobre} 
            options={{
              title: 'Sobre',
              headerStyle: {
                backgroundColor: '#30c413',
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#30c413',
              },
              drawerActiveTintColor: '#000000',
              drawerIcon: ({color, size}) => (
                <Entypo name="help" size={size} color={color} />
              )
            }}
          />
          <Drawer.Screen 
            name="Materiais" 
            component={Materiais} 
            options={{
              title: 'Materiais',
              headerStyle: {
                backgroundColor: '#00a2ff',
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#00a2ff',
              },
              drawerActiveTintColor: '#000000',
              drawerIcon: ({color, size}) => (
                <Entypo name="folder" size={size} color={color} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  nome: {
    color: '#000000',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 25,
  },
});