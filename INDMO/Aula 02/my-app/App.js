import { useState } from 'react';
import { StyleSheet, View, Switch, Image } from 'react-native';

const icon = require('.');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Switch
        value={habilitado}
        onValueChange={habilitar}
        />
        <Image/>
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
});
