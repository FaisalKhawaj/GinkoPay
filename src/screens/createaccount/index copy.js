import React, {useState} from 'react';
import { View,  StatusBar,Text,Dimensions, } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'
import { TextInput,Checkbox  } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import { bluetext,graycolor, LinearGradientColorOne,LinearGradientColorTwo } from '../../constants/colors';
import CustomButton from '../../components/Button'
import Header from '../../components/CreateAccountHeader'
import styles ,{theme} from './styles'
import Modal from '../../components/TermsAndConditionModal'
import { boldtext, simpletext } from '../../constants/fonts';
const {width, height} = Dimensions.get("window");

 const CreateAccountScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailerror , setEmailError] = useState("");

  const [name , setName] = useState("")
  const [nameerror, setNameError] =useState("")

  const [password, setPassword] = useState("")
  const [passowrderror, setPasswordError] = useState("")

  const [confrimpassword, setConfirmPassword] = useState("")
  const [confirmpasswordwrror, setConfirmPassordError] = useState("")
  
  const [checked, setChecked] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [ispasswordVisible, setispasswordVisible] = useState(true);
  const [secureTextEntry, setsecureTextEntry] = useState(true)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const gotonextScreen = () => {
    navigation.navigate("UploadImage")
  }

   StatusBar.setHidden(true)

   return (
     <Container style={styles.container}>
        <Header num={1} />
       <Content style={{flexGrow:1}}  >
      
       <Text style={{color:bluetext, marginVertical:10,fontSize:14, fontFamily:boldtext, alignSelf:"center"}}> Create Your Acccount</Text>
       <TextInput
            label={"Name"}
            theme={theme}
            mode="outlined"
            secureTextEntry={false}
            placeholder="choose your name"
            setispasswordVisible={setispasswordVisible}
            ispasswordVisible={false}
            error={nameerror.length === 0 ?false:true}
            value={name}
           
            onChangeText={text => setName(text)}
        />
        <Text style={{color:graycolor , marginHorizontal:10,}}>Username <Text style={{color:bluetext}}>Avaliable</Text></Text>
         <TextInput
            label={"Email Address"}
            theme={theme}
            mode="outlined"
            placeholder="Choose Your Name"
            error={emailerror.length === 0 ?false:true}
            value={email}
            style={styles.textinput}
            onChangeText={text => setEmail(text)}
        />

        <TextInput
            label={"New Password"}
            theme={theme}
            mode="outlined"
            placeholder="Enter Your Password"
            error={passowrderror.length === 0 ?false:true}
            value={password}
            style={styles.textinput}
            onChangeText={text => setPassword(text)}
        />
        <Text style={{color:graycolor , marginHorizontal:10,}}>Username <Text style={{color:bluetext}}>Avaliable</Text></Text>

        <TextInput
            label={"Name"}
            theme={theme}
            mode="outlined"
            placeholder="Choose Your Name"
            error={confirmpasswordwrror.length === 0 ?false:true}
            value={confrimpassword}
            style={styles.textinput}
            onChangeText={text => setConfirmPassword(text)}
        />

      <Text style={{color:graycolor , marginHorizontal:10,}}>Must be at least 8 characters </Text>
      <View style={{flexDirection:"row", width:width-20, alignSelf:"center", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Sign in with Face ID?</Text>
              <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:80, height:30, justifyContent:"center", alignItems:"flex-end", paddingRight:8, borderRadius:8}}
              >
              <View style={{height:20, width:20, borderRadius:4, backgroundColor:"#fff"}}></View>
              </LinearGradient>
           </View>
       <View style={{flexDirection:"row", marginVertical:10,}}>
       <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          uncheckedColor={graycolor}
          color={LinearGradientColorOne}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        
        <Text style={{color:graycolor , marginHorizontal:10,}}>By proceeding, you agree to these 
        <Text style={{color:bluetext}}onPress={() => toggleModal()} >Term and Conditions.</Text></Text>
       </View>
       <CustomButton text={"Create Passowrd"} onPress ={() => gotonextScreen()} />
       </Content>
       <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} toggleModal={toggleModal} />
     </Container>
   );
 
 }; 
 export default CreateAccountScreen;
