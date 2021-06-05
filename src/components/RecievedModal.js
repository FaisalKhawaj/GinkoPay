import React,{useState} from 'react';
import { View,FlatList,   Dimensions,StyleSheet, Image, Text, TouchableOpacity, Touchable, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { boldtext, fontmedium, simpletext } from '../constants/fonts';
import { graycolor, green } from '../constants/colors';
import CustomButton from './Button';
import RECIEVED from '../assets/recievemodal.svg'
const {width, height} = Dimensions.get("window");


const AssetsModal = ({visible, setVisible}) => {
    const gotonextScreen = () => {
        navigation.navigate("DashBoardScreen")
     }
    return (
        <Modal 
            isVisible={visible}
            animationIn="fadeInRight"
            deviceHeight={Dimensions.get("screen").height*2}
            transparent={true}
            style={styles.modal}
            coverScreen={true}
            animationOut="slideOutDown"
            onBackdropPress = {() => setVisible()}
            onBackButtonPress = {() => setVisible()}
            useNativeDriver = {true}
            hasBackdrop = {true}
            backdropColor = "#1D1F27"
            backdropOpacity = {.85}
        >
            <View style={styles.mainview}>
                <View style={{backgroundColor:"#ffffff",bottom:10,height:4,width:50,borderRadius:5}} />
                <Text style={styles.Receive}> Receive</Text>
                <RECIEVED  width={150}  height={150}/>
                <Text style={styles.otherassets}>Your address to Receive payment</Text>
                <TouchableOpacity style={{flexDirection:"row", marginVertical:20, backgroundColor:"#2A2D3C", height:40, minWidth:100, paddingHorizontal:20, borderRadius:10}}>
                <Text style={styles.Receive}> Receive</Text>
                    <Image 
                        style={{width:40, height:40, resizeMode:"cover", borderRadius:60,}}
                        source={{uri:"http://callerapp.net/finder/apis/v1/images/03119998999.jpg"}} />
                </TouchableOpacity>
                <CustomButton  text={"Request Payment"} onPress={gotonextScreen} />
            </View>        
        </Modal>
    )
}

export default AssetsModal;

const styles = StyleSheet.create({
    modal:{
        margin: 0
    },
    mainview:{
        height:height/1.5,
        flex:1,
        width:width,
        bottom:0,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor:'#17171A',
        width:width,
        position:'absolute',
        borderTopRightRadius:10, 
        borderTopLeftRadius:10
    },
    Receive:{
        color:"#fff",
        margin:10,
        fontSize:15 ,
        fontFamily:fontmedium
    },
    text:{
        color:'#fff',
        fontSize:14,
        alignSelf:"center",
        fontFamily:simpletext
    },
    otherassets:{
        color:graycolor,
        fontSize:16,
        
        marginVertical:30,
        alignSelf:"center"
    },
    flatlistitemmain:{
        flexDirection:'row',
        width:width,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center',
        
        marginBottom:30
    }
})