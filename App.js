import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={estilo.pagina} >
      <Text>Olá Mundo</Text>
     </View>
  );
}

// criando a constante estilo
// que vai receber um  objeto StyleSheet
// objeto pagina - contém todos os estilos usados 
const estilo = StyleSheet.create({
   pagina: {
    width: 200,
    height: 200,
    backgroundColor:'#FF0000'
   }  
});



export default App;