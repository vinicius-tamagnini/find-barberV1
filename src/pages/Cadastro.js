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
  let [senha2, setSenha2] = useState('');

  firebase.auth().createUserWithEmailAndPassword(email,senha).then(()=>{
    navegar();
  }).catch(()=>{
   
  })

  function pushFirebase(){

    try{
    firebase.database().ref('/dadosBarbeiro').push({
      email: email,
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      nomeBarbearia: nomeB,
      cep: cep,
      cidade: cidade,
      estado: estado,
      bairro: bairro,
      endereco: endereco,
      numero: numero,
      complemento: complemento,
      senha: senha
    })

     } catch {
       Alert.alert("deu ruim parcero");
     }
    
  }

const verifica = () =>{
  if (email === "") {
    Alert.alert("VERIFIQUE", "O Email não pode ser vazio")
  }else if(cnpj === ""){
    Alert.alert("VERIFIQUE", "O Cnpj não pode ser ")
  }else if(razaoSocial === ""){
    Alert.alert("VERIFIQUE", "A Razão Social não pode ser ")
  }else if(nomeB === ""){
    Alert.alert("VERIFIQUE", "O Nome da Barbearia não pode ser vazio ")
  }else if(cep === ""){
    Alert.alert("VERIFIQUE", "O CEP não pode ser vazio")
  }else if(cidade === ""){
    Alert.alert("VERIFIQUE", "O nome da cidade não pode ser vazio ")
  }else if(estado === ""){
    Alert.alert("VERIFIQUE", "O nome do estado não pode ser vazio ")
  }else if(bairro === ""){
    Alert.alert("VERIFIQUE", "O nome do bairro não pode ser vazio ")
  }else if(endereco === ""){
    Alert.alert("VERIFIQUE", "O endereço não pode ser vazio ")
  }else if(numero === ""){
    Alert.alert("VERIFIQUE", "O numero não pode ser vazio ")
  }else if(senha != senha2){
    Alert.alert("VERIFIQUE", "As senhas não condizem ")
  }else{
    pushFirebase(), props.navigation.navigate('Login');
  }
}
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
      onChangeText={email => setEmail(email)} value= {email}
      />

      <Text style={styles.titulo}>CNPJ</Text>
      <TextInput
      style= {styles.input}
      placeholder="CNPJ"
      onChangeText={cnpj => setCnpj(cnpj)} value= {cnpj}
      />

      <Text style={styles.titulo}>Razão Social</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira a razão social"
      onChangeText={razaoSocial => setRazaoSocial(razaoSocial)} value= {razaoSocial}
      />

      <Text style={styles.titulo}>Nome da Barbearia</Text>
      <TextInput
      style= {styles.input}
      placeholder="insira o nome da sua barbearia"
      onChangeText={nomeB => setNomeB(nomeB)} value= {nomeB}
      />
    
      <Text style={styles.titulo}>CEP</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o CEP do seu estabelecimento"
      onChangeText={cep => setCep(cep)} value= {cep}
      />

      <Text style={styles.titulo}>Cidade</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira a cidade da sua barbaria"
      onChangeText={cidade => setCidade(cidade)} value= {cidade}
      />

      <Text style={styles.titulo}>Estado</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o estado"
      onChangeText={estado => setEstado(estado)} value= {estado}
      />
      
      <Text style={styles.titulo}>Bairro</Text>
      <TextInput
      style= {styles.input}
      placeholder="Insira o bairro"
      onChangeText={bairro => setBairro(bairro)}  value= {bairro}
      />

      <Text style={styles.titulo}>Endereço</Text>
      <TextInput
      style= {styles.input}
      placeholder="insira o endereço"    
      onChangeText={endereco => setEndereco(endereco)}  value= {endereco}
      />

      <Text style={styles.titulo}>Número</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite seu número"
      onChangeText={numero => setNumero(numero)} value= {numero}
      />

      <Text style={styles.titulo}>Complemento (Opcional)</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite o complemento (opcional)"
      onChangeText={complemento => setComplemento(complemento)} value= {complemento}
      />

      <Text style={styles.titulo}>Digite a sua senha</Text>
      <TextInput
      style= {styles.input}
      placeholder="Digite sua senha"
      onChangeText={senha => setSenha(senha)}
      value= {senha}
      />

      <Text style={styles.titulo}>Confirme a sua senha</Text>
      <TextInput
      style= {styles.input}
      placeholder="Confirme a sua senha"
      onChangeText={senha2 => setSenha2(senha2)}
      value= {senha2}
      />

      <TouchableOpacity
        onPress={ verifica}
        style = {styles.botao}
        disable = {true}
        
      >
        <Text 
        style = {styles.botaoText}
        disable = {false}  
        >Continuar</Text>
      
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
    width: 330,
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
    
    backgroundColor: "#012f6b",
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
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