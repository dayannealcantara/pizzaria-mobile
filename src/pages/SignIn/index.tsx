
import { useState } from 'react';
import {  Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function SignIn() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){

    if(email === '' || password === ""){
      return
    }
    console.log('TESTE' + email)
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
        
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Digite seu email'
          placeholderTextColor="#f0f0f0"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
          <TextInput
            placeholder='Sua senha'
            placeholderTextColor="#f0f0f0"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            Acessar
          </Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1d1d2e'
  },

  logo:{  
    marginBottom:18,    
  },

  inputContainer:{
    width:'95%',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 14,
    paddingVertical:32
  },

  input:{
    width:'95%',
    height:40,
    backgroundColor:'#101026',
    color: '#fff',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal:8
  },

  button:{
    width:'95%',
    height:40,
    backgroundColor:'#3fffa3',
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center'
  },

  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#101026'
  }
})