import React from 'react';
import { View,  StatusBar,Text, Image } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton from '../../components/Button'
import ThreeDots from '../../components/ThreeDots'
import styles from './styles'
 const SliderScreenOne = ({navigation}) => {
   StatusBar.setHidden(true)
   const gotonextScreen = () => {
     navigation.navigate("SliderScreenTwo")
   }
   return (
     <View style={styles.container}>
      <Text style={{color:"#fff"}}>Create Account</Text>
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 