import React from 'react';
import { View,  StatusBar, Image } from 'react-native';
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
       <Image source={require("../../assets/slider1.png")} style={{width:200, height:200, resizeMode:"center"}} />
       <CustomText text={"For the gamers and streamers"} />
       <ThreeDots color={"one"} />
       <CustomButton text={"Next"} onPress={gotonextScreen} />
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 