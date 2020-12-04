  
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import firebase from '../Connection';
import Navbar from '../components/Navbar'
import Login from "./Login";


export default function Perfil(props) {

const [listEmail, setListEmail] = useState([]);
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
          cep: childItem.val().cep,
          cnpj: childItem.val().cnpj,
          endereco: childItem.val().endereco,
          bairro: childItem.val().bairro,
          senha: childItem.val().senha,
        });
      });
      setListaDados(list);
    })

  } catch (error) {
    alert(error);
  }
}, [])

useEffect(() => {
  try {
    firebase.database().ref('/EmailBarbeiro').on('value', (snapshot) => {
      let list = [];
      
      snapshot.forEach((childItem) => {
        list.push({
          email: childItem.val().email,
        });
      });
      setListEmail(list);
    })

  } catch (error) {
    alert(error);
  }
}, [])


let total = listaDados.length

for( var i = 0 ; i < total ; i++){
  if (listaDados[i].email === listEmail[0].email){


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
          <ScrollView>
          
                <View>
                 
  
                    <Image source={require('../../assets/icons/usuazin.png')} style={styles.usuario}/>
                    <Image source={require('../../assets/icons/perfilzin.png')} style={styles.profile}/>
                    <Image source={require('../../assets/icons/emailzin.png')} style={styles.email}/>
                    <Image source={require('../../assets/icons/calendazin.png')} style={styles.calendar}/>


                    <View style={styles.alltexts}>
          <Text style={styles.title}>Nome: </Text>
          <Text style={styles.text}>{listaDados[i].nomeBarbearia}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.text}>{listaDados[i].email}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>CEP: </Text>
          <Text style={styles.text}>{listaDados[i].cep}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>Cnpj: </Text>
          <Text style={styles.text}>{listaDados[i].cnpj}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>Endereço: </Text>
          <Text style={styles.text}>{listaDados[i].endereco}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>Bairro: </Text>
          <Text style={styles.text}>{listaDados[i].bairro}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <Text style={styles.title}>Senha: </Text>
          <Text style={styles.text}>{listaDados[i].senha}</Text>
          <Text style={styles.line}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          
         
        </View>
        <TouchableOpacity style = {styles.botao} 
           onPress = { () => {props.navigation.navigate('Login')}}
        >
        <Text style = {styles.botaoText}>Sair</Text>
        </TouchableOpacity>
      


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
                 <TouchableOpacity style = {styles.botaoCaneta4} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botaoCaneta5} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botaoCaneta6} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botaoCaneta7} 
                    
                    onPress = {showConfirm}>
                    <Text style = {styles.botaoEdit}> Editar </Text>

                 </TouchableOpacity>
                
                </View>
                </ScrollView>
        </View>
      
    );  

}else {
    console.log("Algo errado aconteceu")
  }
}
  return(
    <Text>Erro no banco</Text>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
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
    backgroundColor: "#111",
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
    marginLeft: 285,
    marginTop: 200,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta2:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 293,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta3:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 387,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta4:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 480,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta5:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 574,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta6:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 667,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCaneta7:{
    width: 70,
    height: 40,
    position: "absolute",
    borderRadius: 10,
    marginLeft: 285,
    marginTop: 761,
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoEdit :{

    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    
  },
});