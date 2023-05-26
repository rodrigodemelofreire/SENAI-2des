import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Usuarios from '../src/pages/usuarios';
import Perfil from '../src/pages/perfil';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'orange',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#ccc',
                    borderTopWidth: 0,

                    bottom: Platform.OS === 'android' ? 14 : 28,
                    left: 14,
                    right: 14,
                    borderRadius: 4,
                    height: 60,

                },
            }}
        >

            <Tab.Screen
                name="Destaques"
                component={Usuarios}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons
                                name="home"
                                color={color}
                                size={size} />
                        }
                        else {
                            return <Ionicons
                                name='home-outline'
                                color={color}
                                size={size}
                            />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Salvos"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name='bookmark'
                                    size={size}
                                    color={color}
                                />
                            )
                        }
                        else {
                            return (
                                <Ionicons
                                    name='bookmark-outline'
                                    size={size}
                                    color={color}
                                />
                            )
                        }
                    }
                }}
            />

        </Tab.Navigator>
    )
}