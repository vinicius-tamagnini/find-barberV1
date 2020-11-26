import React ,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList} from 'react-native';
import firebase from '../Connection';


export default function Historico(){

  const [listClientes, setListClientes] = useState([]);
const [listaDados, setListaDados] = useState([]);

function Deletar(key){
firebase.database().ref('/agendaBarbeiro/'+key).remove()
}

useEffect(() => {
  try {
    firebase.database().ref('/agendaBarbeiro').on('value', (snapshot) => {
      let list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          valor: childItem.val().valor,
          nome: childItem.val().nome,
          data: childItem.val().data,
          horario: childItem.val().horario,
          telefone: childItem.val().telefone
          
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
         <FlatList
          data={listaDados}
          keyExtractor={(item) =>item.key}
          renderItem={({item}) =>

          <ScrollView style = {styles.ScrollView}>
          <TouchableOpacity
          disabled = {true}
          style = {styles.box}>
          <Text style = {styles.nome}>{item.nome}</Text>
          <Text style = {styles.linha}>____________________________</Text>
          <Text style = {styles.texto}>Data: {item.data} </Text>
          <Text style = {styles.texto}>Valor: {item.valor}</Text>
          <Text style = {styles.texto}>Telefone: {item.telefone}</Text>
          <Image 
              source={require('../../assets/usuario.png')}
              style={styles.usuario}
            />
            <TouchableOpacity 
            style = {styles.deletar}
            onPress = {()=> {Deletar(item.key)}}
            >
              <Text style = {styles.botaoText}>DELETAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.deletar2}>
              <Text style = {styles.botaoText}>LIGAR</Text>
            </TouchableOpacity>    
        </TouchableOpacity>
       
        </ScrollView>
        }/>
      </View>
   );
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
   backgroundColor: "#CCC",
   justifyContent: 'center',
   alignItems: "center",
    
 },
 scrollView: {
   backgroundColor: 'pink',
 },

 texto: {
   fontSize: 12,
   fontWeight: "bold",
   padding: 3
    
      
 },
 botao: {
   
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
 deletar:{
  marginTop: -5,
  marginLeft: 170,
  width: 65,
  height: 35,
  backgroundColor: "#000",
  borderRadius: 2,
  justifyContent: 'center',
  alignItems: 'center'
 },
 deletar2:{
  marginTop:  -35,
  marginLeft: -30,
  width: 65,
  height: 35,
  backgroundColor: "#000",
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
 },
 botaoText :{
  color: '#FFF',
 },

});

