import React from 'react';
import { View,  StatusBar, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton from '../../components/Button'
import styles from './styles'
 const SliderScreenOne = ({navigation}) => {
   StatusBar.setHidden(true)
   const gotonextScreen = () => {
     navigation.navigate("CreataAccount")
   }
   return (
     <View style={styles.container}>
       <Image source={require("../../assets/slider4.png")} style={{width:200, height:200, resizeMode:"center"}} />
       <CustomText text={"Your own Crypto Wallet"} />
       <View style={{height:10}} />
       <CustomButton text={"Create a new Wallet"} onPress={gotonextScreen} />
       <Text style={{color:"#ABABB0"}}>You have an account? 
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color:"blue",textDecorationLine:"underline", textDecorationColor:"blue"}}>Sign in</Text>
          </TouchableOpacity>
       </Text>
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 