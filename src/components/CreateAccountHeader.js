import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import CustomButton from './Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { LinearGradientColorOne,transparent, LinearGradientColorTwo } from '../constants/colors';
import { View, Dimensions } from 'react-native';
const {width, height} = Dimensions.get("screen")
const  CustomerHeader = () =>  {
    return (
      <View>
        <Header transparent noLeft>
          
            <Button transparent>
              <MaterialIcons name='arrow-back-ios' style={{color:"#fff"}} />
            </Button>
        
          <Body style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
          <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:width/5, borderRadius:10, height:10}}>
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:width/5, borderRadius:10, height:10}}>
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[LinearGradientColorOne,LinearGradientColorTwo]} 
                style={{width:width/5, borderRadius:10, height:10}}>
            </LinearGradient>
            <Text style={{color:"#fff",  fontSize:12,}}>1/3</Text>
          </Body>
        </Header>
      </View>
    );
  }

  export default CustomerHeader