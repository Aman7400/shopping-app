import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Card, Chip, Searchbar } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "../../theme/theme"

const Home = ({ navigation }) => {
  function handleItemPress(index) {
    navigation.navigate("DetailView", {
      index
    })

  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 32, paddingBottom: 0, backgroundColor: colors.background }}>
      {/* Toolbar */}
      <Toolbar onAvatarPress={() => navigation.navigate("Profile")} />
      {/* Search Bar */}
      <SearchBar />
      {/* Big Sale */}
      <BigSale onPress={() => navigation.navigate("Explore")} />
      {/* Tags */}
      <TagCategories />
      {/* List View */}
      <ItemListView onItemPress={handleItemPress} />
    </SafeAreaView>
  )
}

function Toolbar({ onAvatarPress }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32
    }}>
      {/* Menu Icon */}
      <TouchableOpacity onPress={() => alert("Opening Drawer")} style={{ padding: 8, borderRadius: 50, alignItems: 'center', justifyContent: "center", backgroundColor: colors.primary }}>
        <Icon name="grid" color="white" size={24} />
      </TouchableOpacity>
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
      <TouchableOpacity onPress={onAvatarPress}>
        <Avatar.Image size={32} />
      </TouchableOpacity>
    </View>
  )
}

function SearchBar({ onToggleSnackBar }) {

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 32
    }}>
      <Searchbar selectionColor={colors.primary} iconColor={colors.primary} inputStyle={{ color: colors.primary, fontWeight: "bold" }} style={{ flex: 1, borderRadius: 12 }} />
      <TouchableOpacity onPress={() => alert("Filter By")} style={{ borderRadius: 8, marginLeft: 16, padding: 8, justifyContent: "center", alignItems: "center", backgroundColor: colors.primary }}>
        <Icon name="options-outline" color="white" size={24} />
      </TouchableOpacity>
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
        <View style={{display:"flex",flexDirection:"row",padding:2}}>
          <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 88, borderRadius: 8 }} />
          <View style={{flex:1,marginLeft:16 }}>
            <Text style={{ color: colors.onPrimary, fontWeight: 'bold', fontSize: 18 }}>
              Big Sale
            </Text>
            <Text style={{ color: colors.onPrimary }}>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
               consectetur adip
            </Text>
          </View>
        </View>
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

function ItemListView({ onItemPress }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      scrollsToTop={true}
      numColumns={2}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      keyExtractor={(item) => item}
      renderItem={({ item }) =>
        <TouchableOpacity onPress={() => onItemPress(item)} >
          <Card style={{
            width: (Dimensions.get("screen").width - 64 - 16) / 2,
            margin: 4,
            height: 240,
            backgroundColor: colors.primary
          }}>
            <Card.Cover source={{ uri: 'https://picsum.photos/200/300' }} />
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