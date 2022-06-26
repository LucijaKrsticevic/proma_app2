import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const KrajIgre = (props) => {
    return (
        <View style={stil.ekran}>
            <Text>Kraj igre!!</Text>
            <Text>Pogođen broj {props.broj}</Text>
            <Text>Računalu su bila potrebna {props.runde} pokusaja</Text>
            <Button title="Nova igra" onPress={props.nova} />
        </View>
 )
}

const stil = StyleSheet.create({
ekran:{
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center'
 }
})
export default KrajIgre;

