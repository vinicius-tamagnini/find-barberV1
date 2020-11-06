import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, Button} from 'react-native';


export default function Agendamento(){
 
  return (
    <View style = {styles.container}> 
     <ScrollView style = {styles.ScrollView}>
     <TouchableOpacity
     disabled = {true}
     style = {styles.box}>
     <Text style = {styles.nome}>Cliente</Text>
     <Text style = {styles.linha}>____________________________</Text>
     <Text style = {styles.texto}>Data: ???</Text>
     <Text style = {styles.texto}>Valor: ???</Text>
     <Text style = {styles.texto}>Hórario: ???</Text>
     <Text style = {styles.texto}>Forma de pagamento: ???</Text>
     <Image 
        source={require('../../assets/usuario.png')}
        style={styles.usuario}
      />
      <Button
      title= "Opções"
      style = {styles.botao}
      color = "#012F6B"
      />
       
     </TouchableOpacity>
     <TouchableOpacity
     disabled = {true}
     style = {styles.box}>
     <Text style = {styles.nome}>Cliente</Text>
     <Text style = {styles.linha}>____________________________</Text>
     <Text style = {styles.texto}>Data: ???</Text>
     <Text style = {styles.texto}>Valor: ???</Text>
     <Text style = {styles.texto}>Hórario: ???</Text>
     <Text style = {styles.texto}>Forma de pagamento: ???</Text>
     <Image 
        source={require('../../assets/usuario.png')}
        style={styles.usuario}
      />
      <Button
      title= "Opções"
      style = {styles.botao}
      color = "#012F6B"
      />  
     </TouchableOpacity>
       

     <TouchableOpacity
     disabled = {true}
     style = {styles.box}>
     <Text style = {styles.nome}>Cliente</Text>
     <Text style = {styles.linha}>____________________________</Text>
     <Text style = {styles.texto}>Data: ???</Text>
     <Text style = {styles.texto}>Valor: ???</Text>
     <Text style = {styles.texto}>Hórario: ???</Text>
     <Text style = {styles.texto}>Forma de pagamento: ???</Text>
     <Image 
        source={require('../../assets/usuario.png')}
        style={styles.usuario}
      />
      <Button
      title= "Opções"
      style = {styles.botao}
      color = "#012F6B"
      />  
     </TouchableOpacity>
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
   backgroundColor: "#F34",
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

