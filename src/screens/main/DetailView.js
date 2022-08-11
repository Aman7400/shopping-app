import { Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailView = ({route,navigation}) => {
  const {index} = route.params
  return (
    <SafeAreaView >
      <Icon name="arrow-back-circle-outline" onPress={() => navigation.goBack()} size={32}  />
      <Text>DetailView {index}</Text>
    </SafeAreaView>
  )
}

export default DetailView