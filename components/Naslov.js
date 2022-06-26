import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Naslov = (props) => {
    return(
        <View style={stil.zaglavlje}>
        <Text style={stil.naslov}>{props.naslov}</Text>
        </View>
       )
       
}

const stil = StyleSheet.create({
    zaglavlje: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: "#fcba03",
        alignItems: "center",
        justifyContent: "center"
        },
        naslov: {
        color: "black",
        fontSize: 18
        }
       
})

export default Naslov;
