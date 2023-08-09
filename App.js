import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
const [moedaOrigem, setMoedaOrigem] = useState('BRL')
const [moedaDestino, setMoedaDestino] = useState('USD')
const [valorConvertido, setValorConvertido] = useState('') 

const buscarHandle = () => {
  let URL 'https: //economia.awesomeapi'
}
  return (
    <View style={styles.container}>
      <Text>Conversor de Moeda</Text>
      <View>
    <Text>Moeda 1</Text>
    <Picker>
    selectedValue={moedaOrigem}
    onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
   <Picker.Item label="Real Brasileiro" value="BRL"
