import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-web';

const UnosBroja = (props) => {
    return(
        <TextInput 
        { ...props }
        style = {{...stil.unos, ...props.style }}
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
