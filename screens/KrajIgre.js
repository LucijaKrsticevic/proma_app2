import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const KrajIgre = (props) => {
    return(
    <View style={stil.ekran}>
    <Text>Ekran za kraj igre.</Text>
    </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "red"
    }
})

export default KrajIgre
