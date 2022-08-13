
import React from 'react'
import Main from './src/navigations/Main'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartContextProvider } from './src/contexts/CartContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <CartContextProvider>
        <Main />
        <StatusBar style="auto" backgroundColor='pink' />
      </CartContextProvider>
    </SafeAreaProvider>
  )
}

export default App