import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Kartica from '../components/Kartica';
import BrojOkvir from '../components/BrojOkvir';
 
const generirajBroj = (min, max, zanemari) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndBroj = Math.floor(Math.random() * (max - min) + min);
    if (rndBroj === zanemari) {
        return generirajBroj(min, max, zanemari);
    } else {
    return rndBroj;
    }
};

const EkranIgre = (props) => {
    const [pokusaj, postaviPokusaj] = useState(generirajBroj(1, 100, props.broj))
    
    const trenutniMin = useRef(1);
    const trenutniMax = useRef(100);
    const [runde, postaviRunde] = useState(0);

    const { broj, kraj } = props;

    const iduciPokusaj = (pomoc) => {
        if (
        (pomoc === 'manji' && pokusaj < props.broj) ||
        (pomoc === 'veci' && pokusaj > props.broj)
    ) {
        Alert.alert(
        'Bez varanja!', 'Odaberite ispravni savjet',
        [{ text: 'OK' }]
        );
        return;
    }
    let noviBroj;
    if (pomoc === 'manji'){
            trenutniMax.current = pokusaj;
    } else if (pomoc === 'veci') {
            trenutniMin.current = pokusaj;
        }
    noviBroj = generirajBroj(trenutniMin.current, trenutniMax.current, pokusaj);
    postaviPokusaj(noviBroj);
    postaviRunde((runde) => runde + 1);
    };

    useEffect(() => {
        if (pokusaj === broj){
            kraj(runde);
        }
    }, [pokusaj, broj, kraj, runde]);
       
    return (
        <View style = {stil.ekran}>
            <View>
                <Text>Vaš broj: </Text>
                <BrojOkvir>
                    {props.broj}
                </BrojOkvir>
            </View>

            <Text>Pokušaj računala</Text>
            <BrojOkvir>
                {pokusaj}
            </BrojOkvir>

            <Kartica stil = {stil.tipke}>
                <Button title="Manji" 
                onPress={ () => {iduciPokusaj('manji')}}
                />
                <Button title="Veći" 
                onPress={() => {iduciPokusaj('veci')}}
                />
            </Kartica>
        </View>
    );
   };

   const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: '#f5edb0',
     },
    tipke: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
     },
    });
   

export default EkranIgre;
