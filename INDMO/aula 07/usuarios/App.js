import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Usuario from './src/components/usuario';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
const usuarios = [
  {
      id:1,
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1990-01-01'
  },
  {
      id:2,
      nome: 'Maria Souza',
      email: 'maria@exemplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1993-05-27'
  },
  {
      id:3,
      nome: 'José Santos',
      email: 'jose@exemplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1992-10-10'
  },
  {
      id:4,
      nome: 'Ana Oliveira',
      email: 'ana@exemplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1995-12-30'
  },
  {
      id:5,
      nome: 'Pedro Souza',
      email: 'pedro@exemplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1991-07-07'
  },
  {
      id:6,
      nome: 'Paula Santos',
      email: 'paula@exmplo.com',
      foto: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      nascimento: '1994-03-15'
  }
]

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
