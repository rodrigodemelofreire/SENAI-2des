import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';

const setItem = (key, value) => {
  window.localStorage.setItem(key, value);
}

export default function Usuario({usuario}){
    return(
        <TouchableOpacity 
          onPress={setItem("usuario", JSON.stringify(usuario))} 
          key={usuario.id} style={styles.usuarioContainer}>
            <Image source={{ uri: usuario.foto }} style={styles.usuarioFoto} />
            <Text style={styles.usuarioNome}>{usuario.nome}</Text>
            <Text style={styles.usuarioEmail}>{usuario.email}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
usuarioContainer: {
  gap: 10,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1 
  },
  usuarioFoto: { 
    width: 80,
    height: 80,
    marginRight: 10,
  },
  usuarioInfo: {
    flex: 2,
  },
  usuarioNome: {
    fontWeight: 'bold',
  },
  usuarioEmail: {
    color: '#888',
  },
});