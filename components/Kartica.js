import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Kartica = (props) => {
 return (
    <View style={{...stil.kartica, ...props.stil}}>
        {props.children}
    </View>

 );
};

const stil = StyleSheet.create({
 kartica: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.75,
    elevation: 7,
    borderRadius: 15
 },
})

export default Kartica;

