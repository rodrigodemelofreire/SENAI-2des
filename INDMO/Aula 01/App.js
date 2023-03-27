import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro app</Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5426ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  input: {
    borderBottom: '1px',
    borderBottomColor: '#333',
    backgroundColor: '#E5E5E5',
    padding: '5px'
  }
});
