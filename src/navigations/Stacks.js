import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/main/Home"
import DetailView from "../screens/main/DetailView"

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="LandingHome" component={Home} />
            <Stack.Screen name="DetailView" component={DetailView} />
        </Stack.Navigator>
    )
}

export {HomeStack}