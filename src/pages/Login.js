import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import firebase from '../Connection';



export default function Login(props) { 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const onChangeEmail = (txtEmail) => {
      setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) =>{
      setPassword(txtPassword)
  }


const AlertSucess = () =>
  Alert.alert(
    "Sucesso!",
    "Login efetuado com sucesso!",
    [
      { text: "OK", onPress: () => props.navigation.navigate('Agendamento')}
    ],
    { cancelable: false }
  );

  const AlertFail = () =>
  Alert.alert(
    "Erro!",
    "Seus dados estão errados, tente novamente",
    [
      { text: "OK", }
    ],
    { cancelable: false }
  );


  const login = () =>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        AlertSucess()
        firebase.database().ref('/EmailBarbeiro').push({
          email: email,
        })
    }).catch(()=>{
        AlertFail()
    })
    firebase.database().ref('/EmailBarbeiro').remove()
}


  return (
  
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/BarbeiroDomiciliar.jpg')} style={styles.image}>
        <Image 
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        
        <TextInput
        style= {styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={txtEmail => onChangeEmail(txtEmail)}
        />
        
        
        <TextInput
        style= {styles.input}
        secureTextEntry= {true}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={txtPassword => onChangePassword(txtPassword)}
        />

        <TouchableOpacity
          style = {styles.botao}
          onPress = {login}
        >
          <Text style = {styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

        <Text style = {styles.text3}>____________________ OU ____________________</Text>

        <TouchableOpacity
          style = {styles.botao}
        >
        <Text style = {styles.botaoText}  onPress = { () => {props.navigation.navigate('Cadastro')}} >Cadastre - se</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  input: {
    marginTop: 10,
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#DCDCDC',
    fontSize: 16,
    padding: 10,
    fontWeight: "bold",
    
  },
  botao:{
    width: 200,
    height: 42,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: "center",
  },
  botaoText :{
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  linkCadastro: {
    marginTop: 40,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 22,
    fontWeight: 'bold',
    color: "#f00",
    alignSelf: "center"

  },
  text3: {
    marginTop: 10,
    fontWeight: 'bold',
    color: "#000",
    fontSize: 15

  }
});