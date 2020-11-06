import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, Button} from 'react-native';
import firefirebase from '../Connection';

let email = firebaseRef = firebase.database().ref().child("email");
email.on("child_added", function(snapshot){
    let add = snapshot.exportVal()
})

export default function Perfil() {
  return(
    <View>
      <Image 
        style= {styles.logo}
        source={require('../../assets/unknow.jpeg')}
      />
      <Text style = {styles.texto}> SEUS DADOS</Text>

      <Text style={styles.numero}>
        Numero do cartão: 00000000000       <Image style = {styles.cartao} source={require('../../assets/mastercard-2019.jpg')}/>
      </Text>
    
      <Text style={styles.numero}>Email</Text>
    

    </View>

  );
  

  }


const styles = StyleSheet.create({
  logo: {
    margin: 0,
    justifyContent: 'center',
    width: 169,
    height: 169,
    marginTop: 50,
    marginLeft: 90
  },
  texto: {
    fontSize: 21,
    marginLeft: 30,
    marginTop: 30,
    fontWeight: "bold",
  },
  cartao:{
    width: 25,
    height: 25,
    marginTop: 40,

    
  },
  numero: {
    fontSize: 20,
    height:25
  }
});