import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
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
    }).catch(()=>{
        AlertFail()
    })
}


  return (
    <View style={styles.container}>

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
      <Text
        style = {styles.linkCadastro}
        onPress = { () => {props.navigation.navigate('Cadastro')}}
      >Não possui uma conta? Clique aqui!
      
      </Text>
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
    backgroundColor: "#012F6B",
    justifyContent: 'center',
    alignItems: "center",
  },
  botaoText :{
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  linkCadastro: {
    marginTop: 80,
    fontWeight: 'bold',

  }
});