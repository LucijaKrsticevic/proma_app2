import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BrojOkvir = (props) => {
 return (
    <View style = {stil.okvir}>
        <Text style = {stil.broj}>
            {props.children}
        </Text>
    </View>

 );
};

const stil = StyleSheet.create({
    okvir: {
        borderWidth: 2,
        borderColor:'#c717fc',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    broj: {
        color: '#c717fc',
        fontSize: 22
    }
})

export default BrojOkvir;

