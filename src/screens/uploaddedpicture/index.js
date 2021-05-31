import React, {useState} from 'react';
import { View,  StatusBar,Text,Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import CustomText from '../../components/Text'
import CustomButton  from '../../components/Button'
import Header from '../../components/CreateAccountHeader'
import {Container, Content} from 'native-base'
import styles ,{theme} from './styles'
const {width, height} = Dimensions.get("screen");
import LinearGradient from 'react-native-linear-gradient'
import { BackgroundColor, bluetext,graycolor, LinearGradientColorOne,LinearGradientColorTwo } from '../../constants/colors';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
 const UploadImageScreen = ({navigation, route}) => {
   const gotonextScreen = () => {
     navigation.navigate("KycNeed")
   }

   const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    }).catch((error) => {
      console.log(error)
    })
   }
   StatusBar.setHidden(true)

   return (
     <Container style={styles.container}>
        <Content style={{flexGrow:1}}  >
          <Header />
            <CustomText 
              text={"Upload your Profile Picture"}
              style={{fontSize:20,fontWeight:"bold", textAlign:"center"}} 
              locations={[0, 1,2,3,4]}
              colors={["#A9CDFF", "#72F6D1","#A0ED8D","#FED365","#FAA49E"]}
            />
          <Text style={{color:graycolor,fontStyle:"italic", fontSize:20, textAlign:"center"}}>“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier</Text>
            <ImageBackground 
            source={require("../../assets/uploadbackground.png")}
            resizeMode="contain"
            style={{width:width-40, justifyContent:"center", alignItems:"center", height:height/2, alignSelf:"center",  }}
            >
              <Image source={{uri:route.params.image}} style={{width:150, borderRadius:15, height:200}} />
            <TouchableOpacity 
            onPress={() => {openPicker()}}
              style={{
                backgroundColor:"#2A2D3C", 
                borderRadius:5, 
                width:200,
                marginTop:40,
                height:40, 
                justifyContent:"center", 
                alignItems:"center"
              }}>
            <CustomText text={"Another One"} locations={[0,1]} colors={["#70A2FF", "#F76E64"]} style={{fontSize:20,fontWeight:"bold", textAlign:"center"}} />
            </TouchableOpacity>
          </ImageBackground>
          <CustomButton text={"Next"} onPress={() => gotonextScreen()} />
        </Content>
     </Container>
   );
 
 }; 
 export default UploadImageScreen;