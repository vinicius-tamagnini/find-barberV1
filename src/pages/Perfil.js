  
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Button} from 'react-native';
import firebase from '../Connection';



export default function Perfil(props) {

const [listClientes, setListClientes] = useState([]);
const [listaDados, setListaDados] = useState([]);

useEffect(() => {
  try {
    firebase.database().ref('/dadosBarbeiro').on('value', (snapshot) => {
      let list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
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

  function Editar(key,email,nomeBarbearia) {

  }

  const showConfirm = ()=> {
     Alert.alert("digite","algo",[
      {
         text: "ENVIAR",
         onPress : () => console.log("FOI"),
      },
      {
        text: "CANCELAR",
        onPress: () => console.log("FOI"),
      },
      ]);
  };
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

                    <TouchableOpacity style = {styles.botaoCaneta1} 

                      onPress = {showConfirm}>
                      <Text style = {styles.botaoEdit}> Editar </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.botaoCaneta2} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.botaoCaneta3} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                  </TouchableOpacity>
                   

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
    marginTop: 260,
  },
  calendar:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 345,
  },
  card:{
    width: 30,
    height: 30,
    marginLeft: 20,
    position: "absolute",
    marginTop: 400,
  },
  alltexts:{
    marginTop: 20,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60,
  },
  text:{
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  line:{
    alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 6
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
 
  botaoCaneta1:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 200,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta2:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 300,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta3:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 400,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoEdit :{
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});