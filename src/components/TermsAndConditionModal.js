import React, {useState} from 'react';
import {Button, Text,Dimensions, View} from 'react-native';
import Modal from 'react-native-modal';
import { BackgroundColor } from '../constants/colors';
import CustomButton from './Button'
const {width, height} = Dimensions.get("screen");
const  TermsAndConditionModal = ({isModalVisible,toggleModal}) =>  {
  return (
      <Modal 
        isVisible={isModalVisible}
        backdropOpacity={.4}
        style={{width:width, marginLeft:0, marginRight:0,}}
        useNativeDriver={true}
        >
        <View style={{flex: 1,width:width,alignItems:"center", justifyContent:"space-evenly", height:height/3 , backgroundColor:BackgroundColor, marginTop:height/2}}>
          <Text style={{color:"#fff" ,fontSize:16, }}>Term and Conditions</Text>
          <Text style={{color:"#fff" , paddingHorizontal:20, textAlign:"justify", fontSize:15, }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          <CustomButton text={"I Got it"} onPress ={() => toggleModal()} />
        </View>
      </Modal>
  );
}

export default TermsAndConditionModal;