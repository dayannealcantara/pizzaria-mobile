
import { useContext, useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteDetailParams = {
  Order:{
    number: string | number
    order_id:string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {
const route = useRoute<OrderRouteProps>()


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mesa {route.params.number}</Text>
   
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

