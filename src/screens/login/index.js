import React,{useState} from 'react';
import { View,  Dimensions, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import TextInputFloat from '../../components/TextInput'
import CustomButton from '../../components/Button'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';
const {width, height} = Dimensions.get("screen");
 const SliderScreenOne = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailerror , setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("")

   const gotonextScreen = () => {
     navigation.navigate("CreataAccount")
   }

   return (
     <View style={styles.container}>
          <Image source={require("../../assets/spalsh_text.png")} style={{width:200, height:200, resizeMode:"center"}} />
          <TextInputFloat label="Email Address" value={email} setValue={setEmail} error={emailerror}  />
          <TextInputFloat label="Password" value={password} setValue={setPassword} error={passworderror} />
           <View style={{flexDirection:"row", width:width-20, justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Sign in with Face ID?</Text>
              <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:80, height:30, justifyContent:"center", alignItems:"flex-end", paddingRight:8, borderRadius:8}}
              >
              <View style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}}></View>
              </LinearGradient>
           </View>
          <Text style={{color:"#ABABB0", fontSize:14, marginBottom:20, }}>Don't Have an account? 
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{color:"blue",textDecorationLine:"underline", textDecorationColor:"blue"}}>Sign up now</Text>
            </TouchableOpacity>
          </Text>
          <CustomButton  text={"Login"} onPress={gotonextScreen} />
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 