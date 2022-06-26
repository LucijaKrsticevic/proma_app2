import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const UnosBroja = (props) => {
    return(
        <TextInput 
        { ...props }
        style = {{...stil.unos, ...props.style}}
        />
    );
}

const stil = StyleSheet.create({
    unos: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default UnosBroja;
