import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [prazo, setPrazo] = useState('');
  const [juros, setJuros] = useState('');
  const [parcela, setParcela] = useState(0);

  function calcularParcela() {
    const valorFloat = parseFloat(valor.replace(',', '.')); // converter valor para float
    const prazoInt = parseInt(prazo); // converter prazo para inteiro
    const jurosFloat = parseFloat(juros.replace(',', '.')); // converter juros para float

    // cálculo da parcela
    const jurosMensais = (jurosFloat / 100) / 12;
    const parcelaCalculada = (valorFloat * jurosMensais) / (1 - Math.pow(1 + jurosMensais, -prazoInt));
    setParcela(parcelaCalculada.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitação de Empréstimo</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor Necessário:</Text>
        <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType="numeric"></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Prazo (meses):</Text>
        <TextInput style={styles.input} value={prazo} onChangeText={setPrazo} keyboardType="numeric"></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Juros Mensais (%):</Text>
        <TextInput style={styles.input} value={juros} onChangeText={setJuros} keyboardType="numeric"></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={calcularParcela}>
        <Text style={styles.buttonText}>Calcular Parcela</Text>
      </TouchableOpacity>

      {parcela > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Valor da Parcela:</Text>
          <Text style={styles.result}>{`R$ ${parcela}`}</Text>
        </View>
      )}

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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }

})