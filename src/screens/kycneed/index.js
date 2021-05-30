import React from 'react';
import { View,  StatusBar,Text, Image } from 'react-native';
import CustomButton from '../../components/Button'
import {Container, Content} from 'native-base'
import Header from '../../components/CreateAccountHeader'
import styles from './styles'
import { bluetext, graycolor } from '../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
 const SliderScreenOne = ({navigation}) => {
   StatusBar.setHidden(true)
   const gotonextScreen = () => {
     navigation.navigate("DashBoardScreen")
   }
   return (
     <View style={styles.container}>
        <Header />
         <Content style={{flexGrow:1}} contentContainerStyle={{justifyContent:"space-evenly", alignItems:"center"}}  >
          <Image source={require("../../assets/slider3.png")} style={{width:200, height:200, resizeMode:"center"}} />
          <Text style={{color:"#fff",fontSize:16,fontWeight:"bold", marginVertical:10, textAlign:"center"}}>KYC Needed</Text>
          <Text style={{color:graycolor,marginVertical:15, textAlign:"left", paddingHorizontal:20}}>Duo the regulations we will need to ask you for your documents, so we can allow you to use our features. Your document will be only used for verification and will NOT be sent to 3rd parties. Here is the link:</Text>
          <TouchableOpacity>
             <Text style={{color:bluetext, fontSize:16, fontWeight:"bold", paddingHorizontal:20}}> https://ginkopay.sb.getid.dev/vp/getid-doc-selfie-liveness</Text>
          </TouchableOpacity>
       </Content>
       <View style={{position:"absolute", alignSelf:"center", bottom:20,}}>
            <CustomButton text={"Remind Me later"} onPress={gotonextScreen} />
          </View>
     </View>
   );
 
 }; 
 export default SliderScreenOne;
 