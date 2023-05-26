import { View } from 'react-native'

const pegarUsuarioLocalStorage = (key) => {
    window.localStorage.getItem(key)
}

export default function Perfil() {
    const usuario = pegarUsuarioLocalStorage('usuario') || {
        id: 1,
        nome: 'Nome',
        email: 'Email',
        nascimento: 'Nascimento',
    }
    return (
        <View>

        </View>
    )
}