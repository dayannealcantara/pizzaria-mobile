
import { useContext } from 'react';
import {  SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';


export default function Dashboard() {
  const {signOut}= useContext(AuthContext)

  async function handleLogin(){  
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
    
        <TextInput
          placeholder='Número da mesa'
          placeholderTextColor="#f0f0f0"
          style={styles.input}    
          keyboardType='numeric'    
        />
         
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            Abrir mesa
          </Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1d1d2e'
  },

  title:{  
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:24,    
  },

  input:{
    width:'90%',
    height:60,
    backgroundColor:'#101026',
    color: '#fff',
    borderRadius: 4,
    paddingHorizontal:8,
    textAlign:'center',
    fontSize:20,
  },

  button:{
    width:'90%',
    height:40,
    backgroundColor:'#3fffa3',
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:12
  },

  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#101026'
  }
})

