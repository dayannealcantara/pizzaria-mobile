
import { useContext, useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { api } from '../../services/api';

type RouteDetailParams = {
  Order:{
    number: string | number
    order_id:string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {
const route = useRoute<OrderRouteProps>()
const navigation = useNavigation()

async function handleCloseOrder() {
 try{
  await api.delete('/order', {
    params:{
      order_id:route.params?.order_id
    }
  })
  navigation.goBack()
 }catch(err){
  console.log(err)
 }
  
}


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity onPress={handleCloseOrder}>
          <Feather name="trash-2" size={28} color="#ff3f4b"/>
        </TouchableOpacity>
      </View>  

      <TouchableOpacity style={styles.input}>
        <Text style={{color:'#fff'}}>Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.input}>
        <Text style={{color:'#fff'}}>Pizza d efrango</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, {width:'60%', textAlign:'center'}]}
          placeholder='2'
          placeholderTextColor="#f0f0f0"
          keyboardType='numeric'   
        />
      </View> 

      <View style={styles.qtdContainer}>
      <TouchableOpacity style={styles.buttonAdd} >
          <Text style={styles.buttonText}>
           +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>
           Avançar
          </Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1d1d2e',
    paddingVertical:'5%',
    paddingHorizontal:'4%',
    paddingStart:'4%'

  },

  header:{
    flexDirection:'row',
    marginBottom:12,
    alignItems:'center',
    marginTop:24

  },

  title:{  
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    marginRight:14
    
  },

  input:{
    width:'100%',
    height:40,
    backgroundColor:'#101026',
    color: '#fff',
    marginBottom:12,
    borderRadius: 4,
    paddingHorizontal:8,
    justifyContent:'center',
    fontSize:20,
  },

  qtdContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  qtdText:{
  fontSize:20,
  fontWeight: 'bold',
  color:'#fff'
  },

  buttonAdd:{
    width:'20%',
    height:40,
    backgroundColor:'#3fd1ff',
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',   
  },

  button:{
    width:'75%',
    height:40,
    backgroundColor:'#3fffa3',
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',   
  },

  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#101026'
  }
})

