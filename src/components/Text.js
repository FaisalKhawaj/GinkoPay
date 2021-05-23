import React from 'react'
import { LinearTextGradient } from "react-native-text-gradient";
import {Text} from 'react-native'
const CustomText = (props) =>{
    return(
        <LinearTextGradient
            style={{ fontSize: 45, textAlign:"center" }}
            locations={[0, 1,2,3,4]}
            colors={["#A9CDFF", "#72F6D1","#A0ED8D","#FED365","#FAA49E"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
        <Text>{props.text}</Text>
        </LinearTextGradient>
    )
}
export default CustomText