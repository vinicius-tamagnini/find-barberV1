import React , { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, Button, FlatList} from 'react-native';
import firebase from '../Connection';

export default function Agendamento(){ 

  const [listaDados, setListaDados] = useState([]);

useEffect(() => {
  try {
    firebase.database().ref('/agendaBarbeiro').on('value', (snapshot) => {
      let list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          nome: childItem.val().nome,
          data: childItem.val().data,
          horario: childItem.val().horario,
          valor: childItem.val().valor
          
        });
      });
      setListaDados(list);
    })

  } catch (error) {
    alert(error);
  }
}, [])
  return (
    <View style = {styles.container}> 
     <ScrollView style = {styles.ScrollView}>
     


     <FlatList
                data={listaDados}
                keyExtractor={(item) =>item.key}
                renderItem={({item}) =>
                <View>
                    <TouchableOpacity
     disabled = {true}
     style = {styles.box}>
     <Text style = {styles.nome}>{item.nome}</Text>
     <Text style = {styles.linha}>____________________________</Text>
  <Text style = {styles.texto}>Data: {item.data}</Text>
  <Text style = {styles.texto}>Valor: {item.valor}</Text>
  <Text style = {styles.texto}>Hórario: {item.horario}</Text>
     <Text style = {styles.texto}></Text>
     <Image 
        source={require('../../assets/usuario.png')}
        style={styles.usuario}
      />
      <Button
      title= "Opções"
      style = {styles.botao}
      color = "#000"
      />  
     </TouchableOpacity>
    
                </View>
        }
            />      


     
     
     </ScrollView>
     </View>
   )
 }


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
 },

 box:{
   width: 350,
   height: 200,
   borderRadius: 30,
   marginTop: 10,
   backgroundColor: "#BBB",
   justifyContent: 'center',
   alignItems: "center",
    
 },
 scrollView: {
   backgroundColor: 'pink',
 },

 texto: {
   fontSize: 12,
   fontWeight: "bold",
    
      
 },
 nome:{
  justifyContent: 'center',
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 5,
 },
 usuario: {
   width: 100,
   height: 100,
   marginRight: 250,
   marginTop: -60,
 },
 linha: {
  fontSize: 12,
  fontWeight: "bold",
  marginTop: -5,
 },
 
});

