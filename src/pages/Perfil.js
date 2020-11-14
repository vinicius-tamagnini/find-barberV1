  
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Connection';



export default function Perfil(props) {

const [listClientes, setListClientes] = useState([]);
const [listaDados, setListaDados] = useState([]);
/*
useEffect(() => {
  try {
    firebase.database().ref('/dadosBabeiro').on('value', (snapshot) => {

      const list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          email: childItem.val().email,
          nomeBarbearia: childItem.val().nomeBarbearia,
        });
      });
      setListaDados(list);
    })
  } catch (error) {
    alert(error);
  }

  
}, [])
*/
useEffect(() => {
  try {
    firebase.database().ref('/dadosBarbeiro').on('value', (snapshot) => {
      let list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          email: childItem.val().email,
          nomeBarbearia: childItem.val().nomeBarbearia,
          endereco: childItem.val().endereco
          
        });
      });
      setListaDados(list);
    })

  } catch (error) {
    alert(error);
  }
}, [])

/*
let total = listClientes.length

for( var i = 0 ; i < total ; i++){
  if (listClientes[i].email === listEmail[0].email){
  */
    return (
        <View style = {styles.container}>
            <FlatList
                data={listaDados}
                keyExtractor={(item) =>item.key}
                renderItem={({item}) =>
                <View>
                    <Image source={require('../../assets/icons/usuazin.png')} style={styles.usuario}/>
                    <Image source={require('../../assets/icons/perfilzin.png')} style={styles.profile}/>
                    <Image source={require('../../assets/icons/emailzin.png')} style={styles.email}/>
                    <Image source={require('../../assets/icons/calendazin.png')} style={styles.calendar}/>
                    
                    
                    <View style={styles.alltexts}>
                    <Text style={styles.title}>Nome: </Text>
                    <Text style={styles.text}>{item.email}</Text>
                    <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━</Text>
                    <Text style={styles.title}>Email: </Text>
                    <Text style={styles.text}>{item.nomeBarbearia}</Text>
                    <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━</Text>
                    <Text style={styles.title}>Endereço: </Text>
                    <Text style={styles.text}>{item.endereco}</Text>
                    <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━</Text>
                    
                    </View>
                    <TouchableOpacity style = {styles.botao} 
                    onPress = { () => {props.navigation.navigate('Login')}}
                    >
                    <Text style = {styles.botaoText}>Sair</Text>
                    </TouchableOpacity>
                
                </View>
        }
            />       
        </View>
      
    );  

  /*}else {
    console.log("Algo errado aconteceu")
  }
}
  return(
    <Text>Erro no banco</Text>
  );
  */
}



const styles = StyleSheet.create({
  container: {

  },
  usuario: {
    width: 120,
    height: 120,
    marginTop: 20,
    alignSelf: "center", 
  },
  profile:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 160,
  },
  email:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 230,
  },
  calendar:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 310,
  },
  card:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 375,
  },
  alltexts:{
    marginTop: 10,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 120,
  },
  line:{
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 7,
  },
  botao:{
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 60,
    backgroundColor: "#012F6B",
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
  },
  botaoText :{
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});