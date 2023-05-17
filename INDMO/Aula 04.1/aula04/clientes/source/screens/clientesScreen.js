import React from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  Image 
} from 'react-native';
import Clientes from '../mocks/clientesMock';

export default function ClientesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Clientes}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.img} source={item.avatar} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemText}>CPF: {item.cpf}</Text>
              <Text style={styles.itemText}>
                Nome: {item.nome} {item.sobrenome}
              </Text>
              <Text style={styles.itemText}>E-mail: {item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F5F5',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginEnd: 10,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
}); 