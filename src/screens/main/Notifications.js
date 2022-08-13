import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/theme'

const Notifications = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 32,backgroundColor: colors.background}}>
            {/* Toolbar */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Notifications</Text>
                <Text onPress={() => alert("Notifications")}>
                    Clear All
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Notifications