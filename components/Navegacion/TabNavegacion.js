import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MusicaApp from '../pages/MusicaApp';
import Chta from '../pages/Chat';
import Camara from '../pages/Camara';

const Tab = createMaterialTopTabNavigator();


const TabNavegacion = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad', paddingBottom: 48 }}

        >
            <Tab.Screen name="Musica" component={MusicaApp} 
                options={{
                    tabBarLabel: 'Musica',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                    
                }}
            />
            <Tab.Screen name="Camara" component={Camara}
                options={{
                    tabBarLabel: 'Camara',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26} />
                    ),
                }}
            /> 

                <Tab.Screen name="Chat" component={Chta}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat-processing" color={color} size={26} />
                    ),
                }}
            /> 
        </Tab.Navigator>
    )
}

export default TabNavegacion
