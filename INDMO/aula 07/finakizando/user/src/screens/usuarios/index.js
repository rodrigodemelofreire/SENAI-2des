import React, {useEffect, useState} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import users from '../../../mocks/usuarios';
import ItemList from '../../components/item';

export default function Usuarios({ navigation, route }) {
  if(route.params != undefined){
    console.log(route.params.usuario);
  }
  function abrirDetalhes(usuario) {
    navigation.navigate('Detalhes', { usuario })
  }

  useEffect(() => {
    setListaLocal(users);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item }) => <TouchableOpacity onPress={() => abrirDetalhes(item)}>
          {ItemList(item)}
        </TouchableOpacity>}
      >
      </FlatList>
    </View>
  );
}