import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Card, Chip, Searchbar } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "../../theme/theme"

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 32, backgroundColor: "#FAFAFF" }}>
      {/* Toolbar */}
      <Toolbar />
      {/* Search Bar */}
      <SearchBar />
      {/* Big Sale */}
      <BigSale onPress={() => navigation.navigate("Explore")} />
      {/* Tags */}
      <TagCategories />
      {/* List View */}
      <ItemListView />
    </SafeAreaView>
  )
}

function Toolbar() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32
    }}>
      {/* Menu Icon */}
      <Icon name="menu" size={32} />
      {/* User Info */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 12 }} >
          hello Zaskia
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
          Jakarta, INA
        </Text>
      </View>
      {/* Profile Pic */}
      <Avatar.Image size={32} />
    </View>
  )
}

function SearchBar() {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 32
    }}>
      <Searchbar style={{ flex: 1, borderRadius: 12 }} />
      <Icon name="filter" size={24} style={{ marginLeft: 16 }} />
    </View>
  )
}

function BigSale({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{
        backgroundColor: colors.primary,
        borderRadius: 16,
        padding: 16,
        marginBottom: 32
      }}>
        <Card.Content>
          <Text style={{ color: colors.onPrimary, fontWeight: 'bold', fontSize: 18 }}>
            Big Sale
          </Text>
          <Text style={{ color: colors.onPrimary, fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )
}

function TagCategories() {
  const [selected, setSelected] = React.useState(0)
  return (
    <View style={{ height: 42, marginBottom: 32 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          ["All", "Popular", "Recent", "Recommended"].map((item, i) => <Chip style={{ marginRight: 16, backgroundColor: selected === i ? colors.primary : "#f0f0f0" }} key={i} onPress={() => setSelected(i)}>{item}</Chip>)
        }
      </ScrollView>
    </View>
  )
}

function ItemListView() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      scrollsToTop={true}
      numColumns={2}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      keyExtractor={(item) => item}
      renderItem={({ item }) =>
        <TouchableOpacity >
          <Card style={{
            width: (Dimensions.get("screen").width - 64 - 16) / 2,
            margin: 4,
            height:240,
            borderRadius:16, backgroundColor:colors.primary
          }}>
            <Card.Content>
              <Text>
               Item {item}
              </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>} />
  )
}

export default Home