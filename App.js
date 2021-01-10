import * as Speech from 'expo-speech'
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text,setText] = useState('Bem Vindo, Andre o Programador!')
  function falar(){
    Speech.speak(text,{
      language:'pt-BR'
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontSize:22}}>Bem Vindo, Andre o Programador!</Text>
      <TextInput 
      style={styles.input}
      onChangeText={e => setText(e)}
      placeholder="Digite algo ser falado!"
      />
     <Button
     title="Ouvir :>"
     onPress={falar}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:"90%",
    height:50,
    borderWidth:1,
    borderColor:'#e2e2e2e2',
    borderRadius:10,
    padding:10,
    margin:10,
    color:'#f1f1f1',
    fontSize:20,
  }
});
