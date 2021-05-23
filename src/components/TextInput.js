import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {StyleSheet,Text, View} from 'react-native'
import { BackgroundColor } from '../constants/colors';
const MyComponent = ({label, value , setValue , error , setError }) => {
  
  return (
    <View style={{height:80, width:"100%", marginTop:5, backgroundColor:BackgroundColor}}>
        <TextInput
            label={label}
            theme={{ 
                colors:{ 
                    primary: '#E5E5E5',                    
                    placeholder :"#E5E5E5",
                    text:"#E5E5E5",
                    underlineColor:'transparent',
                }}}
            mode="outlined"
            error={error.length === 0 ?false:true}
            value={value}
            style={{backgroundColor:BackgroundColor, fontWeight:"bold", color:"#E5E5E5", marginHorizontal:10, height:60, borderBottomColor:"green", borderRadius:10}}
            onChangeText={text => setValue(text)}
        />
        <Text style={{color:"red",marginHorizontal:10, fontSize:9}} >{error}</Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({

})