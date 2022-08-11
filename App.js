
import React from 'react'
import Main from './src/navigations/Main'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
      <StatusBar style="auto" backgroundColor='pink' />
    </SafeAreaProvider>
  )
}

export default App