import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { CartContext } from '../../contexts/CartContext'
import uuid from 'react-native-uuid';


const DetailView = ({ route, navigation }) => {
  const { index } = route.params
  const { addItem } = React.useContext(CartContext)
  const [isLiked, setIsLiked] = React.useState(false)
  const [selectedSize, setSelectedSize] = React.useState("S")
  function handleSelectedSizeChange(size) {
    setSelectedSize(size)
  }

  function handleBuyNow() {
    let order = {
      quantity: 1, id: uuid.v4(), isLiked, selectedSize, price: index * 100, title: `Item ${index}`
    }
    addItem(order)
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1, padding: 24, paddingBottom: 0 }} >

      {/* Toolbar */}
      <DetailViewToolbar navigation={navigation} />
      {/* Product Image */}
      <Image style={{ height: 376, borderRadius: 32, marginTop: 16, marginBottom: 16 }} source={{ uri: "https://picsum.photos/200/700" }} />
      {/* Product Details  */}
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{
            fontSize: 24,
            fontWeight: "bold",
          }}>DetailView {index}</Text>
          <Icon suppressHighlighting onPress={() => setIsLiked(!isLiked)} color={colors.primary} name={isLiked ? "heart" : "heart-outline"} size={30} />
        </View>
        <Text style={{ marginVertical: 4, fontWeight: "bold", fontSize: 14 }}>About</Text>
        <Text style={{
          fontSize: 12,
          color: "grey",
        }}>lorem ipsum dolor sit amet, consectetur lorem3</Text>
        <SelectSize selectedSize={selectedSize} handleSelectedSizeChange={handleSelectedSizeChange} />
        <View style={{ marginTop: "auto", flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 16, fontSize: 24, color: "grey", fontWeight: "bold" }}>
            ${index * 100}
          </Text>
          <Button onPress={() => handleBuyNow()} labelStyle={{ flex: 1, color: "white", fontWeight: "bold" }} style={{ padding: 8, backgroundColor: colors.primary, borderRadius: 8, flex: 1 }}>
            Buy Now
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

function DetailViewToolbar({ navigation }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <Icon suppressHighlighting name="arrow-back" onPress={() => navigation.goBack()} size={24} />
      <Icon suppressHighlighting name="ellipsis-vertical-outline" onPress={() => alert("More Options")} size={24} />
    </View>
  )
}

function SelectSize({ handleSelectedSizeChange, selectedSize }) {

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 12 }}>Select Size</Text>
      <View style={{ flexDirection: "row" }}>

        {
          ["S", "M", "L", "XL"].map((size, i) =>
            <TouchableOpacity onPress={() => handleSelectedSizeChange(size)} style={{ marginLeft: 8 }} key={i} >
              <Button
                labelStyle={{
                  fontWeight: "bold",
                  color: selectedSize === size ? "white" : "grey"
                }}
                style={{
                  backgroundColor: selectedSize === size ? colors.primary : 'white',
                }} mode={selectedSize === size ? "contained" : "outlined"}>
                {size}
              </Button>
            </TouchableOpacity>)
        }
      </View>
    </View>

  )
}

export default DetailView