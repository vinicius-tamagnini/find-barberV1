import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet} from 'react-native'

;
import Agendamento from './pages/Agendamento';
import Historico from './pages/Historico';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Login from './pages/Login';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
 
function Tabs(){
  return(
  <Tab.Navigator>
    <Tab.Screen name="Login" component={Login}/>
    <Tab.Screen name="Agendamento" component={Agendamento}/>
    <Tab.Screen name="Histórico" component={Historico}/>
    <Tab.Screen name="Perfil" component={Perfil}/>
    <Tab.Screen name="Cadastro" component={Cadastro}/>
    
    
</Tab.Navigator>
  )
}


const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer initialRoute = "Perfil">
            <Stack.Navigator >
                
                <Stack.Screen name="Cadastro" component={Tabs}
                 options={{
                  title: 'Find',
                  headerStyle: {
                    backgroundColor: "#012F6B",
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
                <Stack.Screen name="Agendamento" component={Tabs}
                 options={{
                  title: 'Find',
                  headerStyle: {
                    backgroundColor: "#012F6B",
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
                <Stack.Screen name="Historico" component={Tabs}
                 options={{
                  title: 'Find',
                  headerStyle: {
                    backgroundColor: "#CCC",
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
                <Stack.Screen name="Perfil" component={Tabs}
                options={{
                  title: 'Find',
                  headerStyle: {
                    backgroundColor: "#F44",
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    Icon: {
      width: 30,
      height: 30,

  
    }  
  });