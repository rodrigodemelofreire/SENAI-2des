import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(0);

  


  function calcularIMC() {
    const alturaMetros = altura / 100; 
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));
  }

  const getClassificacao = () => {
    if (resultado < 18.5){
      return "abaixo do peso";
    }else if (resultado < 25){
      return "peso normal";
    }else if (resultado < 30){
      return "acima do peso";
  }else {
    return "Obeso"
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.calcu}>Calculadora de IMC</Text>
      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput style={styles.input} value={peso} onChangeText={setPeso}></TextInput>
      <Text style={styles.label}>Altura (cm)</Text>
      <TextInput style={styles.input} value={altura} onChangeText={setAltura}></TextInput>
      
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.label}>IMC</Text>
      <Text style={styles.input}>{resultado}</Text>
      <Text style={styles.label}>Classificacao ({getClassificacao()})</Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calcu: {
    color: '#4CAF50',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
