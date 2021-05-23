import React from 'react';
import { View,  StatusBar, Image } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton from '../../components/Button'
import ThreeDots from '../../components/ThreeDots'
import styles from './styles'
 const SliderScreenOne = ({navigation}) => {
   StatusBar.setHidden(true)
   const gotonextScreen = () => {
     navigation.navigate("CreateAccountIntro")
   }
   return (
     <View style={styles.container}>
       <Image source={require("../../assets/slider3.png")} style={{width:200, height:200, resizeMode:"center"}} />
       <CustomText text={"Buy, sell & exchange "} />
       <ThreeDots color={"three"} />
       <CustomButton text={"Next"} onPress={gotonextScreen} />
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 