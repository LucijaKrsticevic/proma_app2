import * as React from 'react'
import { Text, StyleSheet, View} from 'react-native';
import Naslov from './components/Naslov';
import PocetniEkran from './screens/PocetniEkran';

export default function App() {
  return (
    <View style = {stil.ekran}>
      <Naslov naslov = {"POGODI BROJ"} />
      <PocetniEkran />
    </View>
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
