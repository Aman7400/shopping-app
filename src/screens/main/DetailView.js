import { Image, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/theme'
import { Button } from 'react-native-paper'

const DetailView = ({ route, navigation }) => {
  const { index } = route.params
  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1,padding: 32 }} >
      <Icon name="arrow-back-circle-outline" onPress={() => navigation.goBack()} size={32} />
      <Image style={{ height: 400, borderRadius: 32,marginTop:16,marginBottom:32 }} source={{ uri: "https://picsum.photos/200/700" }} />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{
            fontSize: 24,
            fontWeight: "bold",
          }}>DetailView {index}</Text>
          <Text style={{
            fontSize: 24,
          }}> ${index * 100}</Text>
        </View>
        <Text style={{
          fontSize: 16,
          color: "grey",
        }}>lorem ipsum dolor sit amet, consectetur lorem3</Text>
        <Button labelStyle={{ color: "white", fontWeight: "bold" }} style={{ marginTop: "auto", padding: 8, backgroundColor: colors.primary, borderRadius: 8 }}>
          Buy Now
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default DetailView