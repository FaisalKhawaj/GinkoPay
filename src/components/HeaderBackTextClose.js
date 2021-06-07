import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { mystyles } from '../styles'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderBackTextCloseBtn = ({ text, closeModal }) => {
    return (
        <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

            <TouchableOpacity style={{ alignSelf: 'center' }}
                onPress={() => setShowBannerModal(false)}>
                <Icon name="chevron-back-outline" size={20} color="#FFFF" />
            </TouchableOpacity>

            <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-SemiBold', color: '#FFFF' }}>{text}</Text>

            <TouchableOpacity style={mystyles.circleCloseBtn}
                onPress={() => closeModal()}>
                <Image style={{ tintColor: "#FFFF" }}
                    source={require('../assets/closecircle.png')} />
            </TouchableOpacity>
        </View>

    )
}

export default HeaderBackTextCloseBtn