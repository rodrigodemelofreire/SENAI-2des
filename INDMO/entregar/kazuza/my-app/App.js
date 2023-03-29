import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import ButtonCadastrar from './src/components/button-calcular/index';


export default function App() { 
  
  const texto = "Sua bitolinha"
  
  
  const [vali, setVali] = new useState(0)
  const [valii, setValii] = new useState(0)
  const [resultado, setResultado] = new useState(0)


  const calcBitola = () => {
    setBitola(Number(1.73))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>

      <TextInput style={styles.input} value={vali} onChangeText={ (val) => setVali(Number(val))} />
      <TextInput style={styles.input} value={valii} onChangeText={ (val) => setValii(Number(val))}/>
      <Button title="multiplicar" onPress={() => multiplicar()}></Button>
      <Text>O Resultado da conta é : {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f37577',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontWeight:'bold',
    fontSize: '1.5rem'
  }
});