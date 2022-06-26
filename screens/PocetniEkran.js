import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Keyboard, TouchableWithoutFeedback } from 'react-native-web'
import Kartica from '../components/Kartica'
import UnosBroja from '../components/UnosBroja'

const PocetniEkran = (props) => {
    const [ unos, postaviUnos ] = useState()
    const [ odabir, postaviOdabir ] = useState(false)
    const [ odabraniBroj, postaviOdabraniBroj ] = useState()
    
    let prikazBroja = null;

    if(odabir) {
        prikazBroja = <Kartica>
            <Text>{odabraniBroj}</Text>
        </Kartica>
    }

    const promjenaUnosa = (tekstUnosa) => {
        postaviUnos(tekstUnosa.replace(/[^0-9]/g , ''))
    }

    const resetPoljeUnos = () => {
        postaviOdabir(false)
        postaviUnos('')
        Keyboard.dismiss()
    }

    const prihvatiUnos = () => {
        const broj = parseInt(unos);
        if(broj === NaN || broj <= 0 || broj > 99){
            return;
        }
        postaviOdabir(true)
        postaviOdabraniBroj(parseInt(unos))
        postaviUnos('')
        Keyboard.dismiss()
    }
    return(
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss }>
        <View style={stil.ekran}>
        <Text style={stil.naslov}>Započni novu igru</Text>
        <Kartica stil={stil.unos}>
            <Text>Odaberi jedan broj</Text>
            <UnosBroja 
                keyboardType = "numeric"
                maxLength = {2}
                blurOnSubmit
                value = {unos}
                onChangeText = {promjenaUnosa}
                style = {stil.UnosBroja}
             />
        <View style={stil.tipke}>
            <Button title="Odustani" onPress={resetPoljeUnos}/>
            <Button title="Prihvati" onPress={prihvatiUnos}/>
        </View>
        </Kartica>
        {prikazBroja}
        </View>
        </TouchableWithoutFeedback>
        )
       
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#f5edb0"
    },
    naslov: {
        fontSize: 20,
        marginVertical: 10
    },
    unos: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    UnosBroja: {
        width: 50
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
       
       
})

export default PocetniEkran
