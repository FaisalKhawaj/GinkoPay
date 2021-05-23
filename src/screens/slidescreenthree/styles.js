import {StyleSheet , Dimensions} from 'react-native'
import { BackgroundColor } from '../../constants/colors';
const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        paddingBottom:height/15,
        backgroundColor:BackgroundColor

    }
})

export default styles