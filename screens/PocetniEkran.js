import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Button, 
    TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Kartica from '../components/Kartica';
import UnosBroja from '../components/UnosBroja';
import BrojOkvir from '../components/BrojOkvir';

const PocetniEkran = (props) => {
    const [ unos, postaviUnos ] = useState('');
    const [ odabir, postaviOdabir ] = useState(false);
    const [ odabraniBroj, postaviOdabraniBroj ] = useState();

    let prikazBroja = null;

    if(odabir) {
        prikazBroja = (
        <Kartica stil = {stil.karticaBroj}>
            <Text>Odabrani broj: {odabraniBroj}</Text>
            <BrojOkvir>
                {odabraniBroj}
            </BrojOkvir>
            <Button title="Pocetak igre" onPress={() => {props.pocetak(odabraniBroj); }} />
        </Kartica>
        );
    }

    const unosBrojaProvjera = (unosTekst) => {
        postaviUnos(unosTekst.replace(/[^0-9]/g , ''));
    };

    const resetPoljeUnos = () => {
        postaviUnos('');
        postaviOdabir(false);
    };

    const prihvatiUnos = () => {
        const broj = parseInt(unos);
        if(isNaN(broj) || broj <= 0 || broj > 99){
            Alert.alert(
                'Neispravn unos!', 'Unesite broj u rasponu 1-99',
                [{text: 'U redu', style: 'default', onPress: resetPoljeUnos}]
            );
            return;
        }
        postaviOdabir(true)
        postaviOdabraniBroj(parseInt(broj));
        postaviUnos('');
    };
    return(
        <TouchableWithoutFeedback 
        onPress = {() => {Keyboard.dismiss();}}>
        <View style={stil.ekran}>
        <Text style={stil.naslov}>Započni novu igru</Text>
        <Kartica stil={stil.unos}>
            <Text>Odaberi jedan broj</Text>
            <UnosBroja 
                blurOnSubmit
                keyboardType = "numeric"
                maxLength = {2}
                style = {stil.UnosBroja}
                value = {unos}
                onChangeText = {unosBrojaProvjera}
             />
            <View style={stil.tipke}>
                <Button title="Odustani" onPress={resetPoljeUnos}/>
                <Button title="Prihvati" onPress={prihvatiOdabir}/>
            </View>
        </Kartica>
        {prikazBroja}
        </View>
        </TouchableWithoutFeedback>
    ); 
};

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
        backgroundColor: "white"
    },
    UnosBroja: {
        width: 50
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    karticaBroj: {
        marginTop: 50,
        alignItems: 'center'
    }  
});

export default PocetniEkran;
