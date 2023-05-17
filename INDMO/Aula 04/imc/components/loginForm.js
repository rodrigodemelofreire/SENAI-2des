import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
const user = {
    username: "lcscamacho",
    pass: "123456"
}
export default function LoginForm({ navigation }) {
    const [username, setUsername] = React.useState('')
    const [pass, setPass] = React.useState('')
    
    const validaUsuario = () => {
        if(pass === username.pass && username === user.username){
            navigation.navigate("Dashboard",{ name: 'Dashboard' })
        }
    }

    return(
        <View style={styles.container}>
            <Text>Formulario de cadastro</Text>
            <View style={Styles.form}>
          
            <MaskInput
                style={style.textInput}
                onchangeText={(masked, unmasked) => setUsername(masked)}
                value={username}
                placeholder="Digite seu peso"
                keyboardType="numeric"
            />
        </View>
    </View>
    )
}