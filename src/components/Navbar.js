import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Button} from 'react-native';

export default function Navbar(){
    return(
        <View>
            <TouchableOpacity 
            style = {styles.container}
            >
            <Text style = {styles.botaoText}>Agendamento</Text>
            <Text style = {styles.botaoText}>Historico</Text>
            <Text style = {styles.botaoText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 700,
        height: 90,
        backgroundColor: '#000',
        alignItems: 'center',
        marginTop:-15,
        position: "relative",
        flexDirection: 'row',
        justifyContent: 'flex-start'
        
      },
});
    
