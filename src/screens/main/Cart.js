import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, IconButton } from 'react-native-paper';
import { colors } from "../../theme/theme"
import Icon from "react-native-vector-icons/Ionicons"

const Cart = () => {
  return (
    <SafeAreaView style={{ position: "relative", flex: 1, paddingHorizontal: 32, paddingBottom: 0 }}>
      {/* Toolbar */}
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Your Cart</Text>
      {/* Cart Item List */}
      <CartItemList />
      {/* Checkout */}
      <Checkout />
    </SafeAreaView>
  )
}

function CartItemList() {
  return (
    <View style={{ paddingTop: 16 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollsToTop={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item}
        renderItem={({ item }) =>
          <View style={{
            width: "100%",
            marginBottom: 8,
            flexDirection: "row",
            backgroundColor: "white",
            padding: 8,
            borderRadius: 16,
            alignItems: "center"
          }}>
            <Image style={{ borderRadius: 8, height: 80, width: 80 }} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View style={{
              paddingHorizontal: 8, flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1
            }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Item {item}
                </Text>
                <Text style={{ fontSize: 14, color: "grey",marginBottom:8 }}>
                  ${item * 100}
                </Text>
                {/* CountHandler */}

                <QuantityHandler />

              </View>
              <Icon name="trash-outline" color="red" size={24} />
            </View>
          </View>} />
    </View>
  )
}

function QuantityHandler() {
  return (
    <View style={{
      flexDirection: "row", alignItems: "center"
    }}>

      {/* Subtract */}
      <TouchableOpacity style={{
        backgroundColor:colors.primary, 
        padding:4,
        borderRadius:4,
        marginRight:8
      }}>
        <Icon name="remove" size={20} color="white" />
      </TouchableOpacity>
      {/* Value */}
      <Text style={{
        fontSize:16,
        fontWeight: "bold",
      }}>{1}</Text>
      {/* Add */}
      <TouchableOpacity style={{
        backgroundColor:colors.primary, 
        padding:4,
        borderRadius:4,
        marginLeft:8
      }}>
        <Icon name="add" size={20} color="white" />
      </TouchableOpacity>

    </View>
  )
}

function Checkout() {
  return (
    <View style={{
      backgroundColor: "white",
      padding: 16,
      position: "absolute",
      width: Dimensions.get("screen").width,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
      <View style={{ flex: .5, alignItems: "center", justifyContent: "center" }} >
        <Text style={{ fontSize: 14, color: "grey" }}>Total Amount:</Text>
        <Text style={{ fontSize: 24, fontWeight: "bold", }}>$1000</Text>
      </View>
      <Button labelStyle={{ color: "white", fontWeight: "bold" }} style={{ padding: 8, backgroundColor: colors.primary, borderRadius: 8, flex: .5 }}>
        Pay Now
      </Button>
    </View>
  )
}

export default Cart