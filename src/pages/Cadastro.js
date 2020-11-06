import React , { useState, props} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../Connection';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Cadastro(props ,{navigation}) {

  let [email, setEmail] = useState('');
  let [cnpj, setCnpj] = useState('');
  let [razaoSocial, setRazaoSocial] = useState('');
  let [nomeB, setNomeB] = useState('');
  let [cep, setCep] = useState('');
  let [cidade, setCidade] = useState('');
  let [estado, setEstado] = useState('');
  let [bairro, setBairro] = useState('');
  let [endereco, setEndereco] = useState('');
  let [numero, setNumero] = useState('');
  let [complemento, setComplemento] = useState('');
  let [senha, setSenha] = useState('');

  
  let onChangeEmail = (txtEmail) =>{
    setEmail(txtEmail)
  }
  let onChangeCnpj = (txtCnpj) =>{
    setCnpj(txtCnpj)
  }
  let onChangeRazaoSocial = (txtRazaoSocial) =>{
    setRazaoSocial(txtRazaoSocial)
  }
  let onChangeNomeb = (txtNomeB) =>{
    setNomeB(txtNomeB)
  }
  let onChangeCep = (txtCep) =>{
    setCep(txtCep)
  }
  let onChangeCidade = (txtCidade) =>{
    setCidade(txtCidade)
  }
  let onChangeEstado = (txtEstado) =>{
    setEstado(txtEstado)
  }
  let onChangeBairro = (txtBairro) =>{
    setBairro(txtBairro)
  }
  let onChangeEndereco = (txtEndereco) =>{
    setEndereco(txtEndereco)
  }
  let onChangeNumero = (txtNumero) =>{
    setComplemento(txtNumero)
  }
  let onChangeComplemento = (txtComplemento) =>{
    setComplemento(txtComplemento)
  }
  let onChangeSenha = (txtSenha) =>{
    setSenha(txtSenha)
  }

  firebase.auth().createUserWithEmailAndPassword(email,senha).then(()=>{
    navegar();
  }).catch(()=>{
   
  })


  return (
    <View  style={styles.container}>
        <ScrollView >
      <Text style={styles.titulo}>Informações da Barbearia</Text>
      <Text style = {styles.descricao}>Preecha as informações sobre a sua
          futura Barbearia no Find com os dados
          do seu negócio.
      </Text>

      <Text style={styles.titulo}>Email</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite seu email"
      value= {email}
      onChangeText={txtEmail => onChangeEmail(txtEmail)}
      />

      <Text style={styles.titulo}>CNPJ/MEI</Text>
      <TextInput
      style= {styles.input}
      placeholder="CNPJ"
      value= {cnpj}
      onChangeText={txtCnpj => onChangeCnpj(txtCnpj)}
      />

      <Text style={styles.titulo}>Razão Social</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira a razão social"
      value= {razaoSocial}
      onChangeText={txtRazaoSocial => onChangeRazaoSocial(txtRazaoSocial)}
      />

      <Text style={styles.titulo}>Nome da Barbearia</Text>
      <TextInput
      style= {styles.input}
      placeholder="insira o nome da sua barbearia"
      value= {nomeB}
      onChangeText={txtNomeB => onChangeNomeb(txtNomeB)}
      />
    
      <Text style={styles.titulo}>CEP</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o CEP do seu estabelecimento"
      value= {cep}
      onChangeText={txtCep => onChangeCep(txtCep)}
      />

      <Text style={styles.titulo}>Cidade</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira a cidade da sua barbaria"
      value= {cidade}
      onChangeText={txtCidade => onChangeCidade(txtCidade)}
      />

      <Text style={styles.titulo}>Estado</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o estado"
      value= {estado}
      onChangeText={txtEstado => onChangeEstado(txtEstado)}
      />
      
      <Text style={styles.titulo}>Bairro</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o bairro"
      value= {bairro}
      onChangeText={txtBairro => onChangeBairro(txtBairro)}
      />

      <Text style={styles.titulo}>Endereço</Text>
      <TextInput
      style= {styles.input}
      placeholder="insira o endereço"
      value= {endereco}
      onChangeText={txtEndereco => onChangeEndereco(txtEndereco)}
      />

      <Text style={styles.titulo}>Número</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite seu número"
      value= {numero}
      onChangeText={txtNumero => onChangeNumero(txtNumero)}
      />

      <Text style={styles.titulo}>Complemento (Opcional)</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite o complemento (opcional)"
      value= {complemento}
      onChangeText={txtComplemento => onChangeComplemento(txtComplemento)}
      />

      <Text style={styles.titulo}>Digite a sua senha</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite sua senha"
      value= {senha}
      onChangeText={txtSenha => onChangeSenha(txtSenha)}
      />

      <Text style={styles.titulo}>Confirme a sua senha</Text>
      <TextInput
      style= {styles.input}
      placeholder="Confirme a sua senha"
      
      onChangeText={txtEmail => onChangeEmail(txtEmail)}
      />

      <TouchableOpacity
        style = {styles.botao}
        disable = {true}
        
      >
        <Text 
        style = {styles.botaoText}
        onPress={ () => {props.navigation.navigate('Login')}}
        disable = {false}  
        >
          
        Continuar</Text>
      
      </TouchableOpacity>
      <TouchableOpacity 
        style = {styles.botaoText}
        
      >

      </TouchableOpacity>
      </ScrollView>
    </View>
  
    
  );
  
const Stack = createStackNavigator();

  function CadastroForm() {
      return(
          
              <Stack.Navigator>
                  <Stack.Screen name="Login" component={Login}/>
                  <Stack.Screen name="Cadastro" component={Cadastro}/>
                  <Stack.Screen name="Home" component={Tabs}/>
              </Stack.Navigator>
          
      );
  }

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
    marginLeft: 10,    
  },
  botao:{
    width: 200,
    height: 70,
    borderRadius: 5,
    marginTop: 50,
    
    backgroundColor: "#012F6B",
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 78,
  },
  botaoText :{
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  linkCadastro: {
    marginTop: 80,
    fontWeight: 'bold',

  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    padding: 5,
  },
  descricao: {
    marginTop: 10,
    marginLeft: 10,
    padding: 5,
    fontWeight: "bold",
  },
  vazio: {
    width: 200,
    height: 42,
    borderRadius: 30,
    marginTop: 20,
    
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 78,   
  }
});