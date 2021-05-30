import React,{useState} from 'react';
import { View,  SafeAreaView, ScrollView, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import styles,{width,height} from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { bluetext, graycolor, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors'
import {simpletext, boldtext} from '../../constants/fonts'
 const SliderScreenOne = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailerror , setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("")

   const gotonextScreen = () => {
     navigation.navigate("DashBoardScreen")
   }

   return (
     <SafeAreaView style={styles.container}>
        <ScrollView >
        <View style={{...styles.container, paddingBottom:50}}  >
          <Image source={require("../../assets/spalsh_text.png")} style={{width:width/1.3, height:width/1.3, resizeMode:"contain"}} />
          <TextInputFloat label="Email Address" value={email} setValue={setEmail} error={emailerror}  />
          <TextInputFloat label="Password" value={password} setValue={setPassword} error={passworderror} />
           <View style={{flexDirection:"row", width:width-20, justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#fff",fontFamily:boldtext,fontSize:20}}>Sign in with Face ID?</Text>
              <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:80, height:30, justifyContent:"center", alignItems:"flex-end", paddingRight:8, borderRadius:8}}
              >
              <View style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}}></View>
              </LinearGradient>
           </View>
         
            <TouchableOpacity onPress={() => navigation.navigate("CreataAccount")} style={width}>
            <Text style={{color:graycolor, fontSize:14,fontFamily:simpletext, marginVertical:15, }}>Don't Have an account? <Text style={{color:bluetext, fontFamily:simpletext}}>Sign up now</Text>  </Text>
                
            </TouchableOpacity>
         
          <CustomButton  text={"Login"} onPress={gotonextScreen} />
     </View>
        </ScrollView>
     </SafeAreaView>
    
   );
 
 }; 
 export default SliderScreenOne;
 