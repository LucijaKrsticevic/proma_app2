import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native';
import Naslov from './components/Naslov';
import PocetniEkran from './screens/PocetniEkran';
import EkranIgre from './screens/EkranIgre';
import KrajIgre from './screens/KrajIgre';

export default function App() {
  const [brKorisnika, postaviBroj] = useState()
  const [brRundi, postaviRunde] = useState(0)

  const pocetakIgre = (broj) => {
    postaviBroj(broj)
  }

  const krajIgre = (runde) => {
    postaviRunde(runde)
  }

  const novaIgra = () => {
    postaviBroj(null)
    postaviRunde(0)
  }

  let sadrzaj = <PocetniEkran pocetak={pocetakIgre} />
  if(brKorisnika && brRundi <= 0){
    sadrzaj = <EkranIgre kraj={krajIgre} broj={brKorisnika} />
  } else if(brRundi > 0){
    sadrzaj = <KrajIgre nova={novaIgra} broj={brKorisnika} runde={brRundi}/>
  }

  return (
    <View style = {styles.ekran}>
      <Naslov naslov = {"PROMA"} />
       {sadrzaj}
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
