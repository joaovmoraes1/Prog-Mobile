import React from 'react';
import { View, Text, Image  } from 'react-native';

// criando o componente como função
export default function App() {
    // definindo variaveis 
    let nome = 'Campus XX - Castanhal';
    
    // desenhando o componente 
    return(
      <View>

         <Text>Olá Mundo!!!</Text>
         <Text>Meu primiero App!</Text>
         <Text style={{ color: '#FF0000', fontSize: 25, margin: 15}}>UEPA-BES</Text>

          <MostraImagem />
         
          <Text style={{ fontSize: 30 }}> {nome} </Text>


      </View>
    )
    // criando componente que mostra a imagem
    function MostraImagem() {
        let img = 'https: //www.google.com/url?sa=i&url=https%3A%2F%2Fnoticias.uol.com.br%2Fpolitica%2Fultimas-noticias%2F2023%2F04%2F26%2Fmemes-depoimento-bolsonaro-policia-federal.htm&psig=AOvVaw0yI_pfnJGQMFNM-npXaoRi&ust=1695336765394000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjxvfujuoEDFQAAAAAdAAAAABAE'
     

        // desenhando o componente 
        return (
             <View>
                 <Image
                 source={{ uri: img }}
                 style={{ width: 300, height: 300 }}
                 resizeMode='contain'
                 />
             </View>
        );


    }
}
