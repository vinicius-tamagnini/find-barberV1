import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, Button} from 'react-native';
import firefirebase from '../Connection';



export default function Perfil() {
  return(
    <View style= {styles.view}>
      <ScrollView style= {styles.scroll}>
        <Image 
          style= {styles.logo}
          source={require('../../assets/icons/usuazin.png')}
        />
        <Image 
          style= {styles.foto}
          source={require('../../assets/icons/fotin.png')}
        />
        <Text style = {styles.texto}> Nome:</Text>
        <Text>__________________________________________________</Text>
        <Image style = {styles.caneta1}
          source={require('../../assets/icons/pencil.png')}
        />
        <Text style = {styles.texto}> Email:</Text>
        <Text>__________________________________________________</Text>
        <Image style = {styles.caneta2}
          source={require('../../assets/icons/pencil.png')}
        />
        <Text style = {styles.texto}> Data de nascimento:</Text>
        <Text>__________________________________________________</Text>
        <Image style = {styles.caneta3}
          source={require('../../assets/icons/pencil.png')}
        />
        <Text style = {styles.texto}> Cartão:</Text>
        <Text>__________________________________________________</Text>
        <Image style = {styles.caneta4}
          source={require('../../assets/icons/pencil.png')}
        />

        <TouchableOpacity style= {styles.botaoSair}>
          <Text style= {styles.texto}>SAIR</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>

  );
  

  }


const styles = StyleSheet.create({
  logo: {
    margin: 0,
    justifyContent: 'center',
    width: 185,
    height: 175,
    marginTop: 50,
    marginLeft: 80
  },
  texto: {
    fontSize: 21,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  numero: {
    fontSize: 20,
    height:25,
    
  },
  botaoSair :{
    width: 200,
    height: 70,
    borderRadius: 5,
    marginTop: 50,
    
    backgroundColor: "#012F6B",
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 78,
  },
  botaoTexto:{
    fontSize: 16,
    fontWeight: "bold",
    color: "white",

  },
  view: {
    marginLeft: 50,
    marginRight: 50
  },
  scroll: {
    marginRight: 0,
  },
  foto:{
    position: "absolute",
    marginTop: 176,
    marginLeft: 197,
    width:48,
    height: 46,
  },
  caneta1:{
    position: "absolute",
    marginTop: 255,
    marginLeft: 250,
    width: 35,
    height: 35,
  },
  caneta2:{
    position: "absolute",
    marginTop: 355,
    marginLeft: 250,
    width:35,
    height: 35,
  },
  caneta3:{
    position: "absolute",
    marginTop: 455,
    marginLeft: 250,
    width:35,
    height: 35,
  },
  caneta4:{
    position: "absolute",
    marginTop: 555,
    marginLeft: 250,
    width:35,
    height: 35,
  },
});