import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/main/Home"
import DetailView from "../screens/main/DetailView"
import Notifications from '../screens/main/Notifications';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="LandingHome" component={Home} />
            <Stack.Screen name="DetailView" component={DetailView} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}

export {HomeStack}