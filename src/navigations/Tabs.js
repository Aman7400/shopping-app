import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './Stacks';
import Explore  from '../screens/main/Exlpore';
import Cart  from '../screens/main/Cart';
import Profile  from '../screens/main/Profile';
import getTabIcon from '../utils/getTabIcon';
import { CartContext } from '../contexts/CartContext';
import { colors } from '../theme/theme';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {addedItems} = React.useContext(CartContext)
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: (props) => getTabIcon(props, route),
        headerShown: false,
        tabBarShowLabel: false,
        swipeEnabled:true,
        tabBarBadgeStyle:{
          backgroundColor:colors.primaryContainer,
          color:"white"
        }
    })}>
      <Tab.Screen name="Home"  component={HomeStack} />
      <Tab.Screen name="Explore"  component={Explore} />
      <Tab.Screen name="Cart" options={addedItems.length > 0 && {  tabBarBadge: addedItems?.length }} component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default Tabs