import React from 'react';
import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get("screen")
import LinearGradient from 'react-native-linear-gradient'
import { LinearGradientColorOne,transparent, LinearGradientColorTwo } from '../constants/colors';
const CustomButton = (props) => {
   return (
    <LinearGradient 
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
      style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
          <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
     </LinearGradient>
   );
 
 }; 

 export default CustomButton;
 const styles = StyleSheet.create({
   container:{
     width:width-20,
     
     alignSelf:"center",
     height:height/13,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:8,
     backgroundColor:transparent
   },
   text:{
      fontSize:16,
      fontWeight:"bold",
      color:"rgba(0,0,0,.8)"
   }
 })
 