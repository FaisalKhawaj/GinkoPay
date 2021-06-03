import React from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import { BackgroundColor, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';
import styles from '../slidescreenone/styles';
import SettingsWithImgTextIcon from '../../components/SettingsImgTextArrowBtn';

const Settings = ({ navigation }) => {

    const EditProfileHandler = () => {
        alert('EDit')
    }
    const ShareMyPublicAddressHandler = () => {
        alert('Share')
    }
    const ChangePasswordHandler = () => {
        alert('Pass')
    }
    const PreferenceHandler = () => {
        navigation.navigate('Preferences')
    }
    const GetHelpHandler = () => {
        alert('Gt Help')
    }
    const SEndFeedBack = () => {
        alert('SendFeedback')
    }
    const LogOutHandler = () => {
        alert('Logout')
    }
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }}>

                <TouchableOpacity style={{ marginVertical: 20, alignSelf: 'center' }}>
                    <Thumbnail large
                        source={require('../../assets/profilePic.png')} />
                    <View style={mystyles.arrowCircleGradientView}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={[LinearGradientColorTwo, LinearGradientColorOne]}
                            style={mystyles.LinearGradientCircleView}>
                            <Image style={{ alignSelf: 'center' }} source={require('../../assets/squarearrow.png')} />
                        </LinearGradient>
                    </View>
                </TouchableOpacity>


                <SettingsWithImgTextIcon
                    name="Edit profile"
                    img={require('../../assets/profilecircle.png')}
                    handler={EditProfileHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/shareAddress.png')}
                    name="Share My Public Address" handler={ShareMyPublicAddressHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/eye.png')}
                    name=" Change Password" handler={ChangePasswordHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/settingLayer.png')}
                    name="Preferences" handler={PreferenceHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/headphone.png')}
                    name="Get Help" handler={GetHelpHandler} />

                <SettingsWithImgTextIcon
                    img={require('../../assets/messageDot.png')}
                    name="Send Feed back " handler={SEndFeedBack} />


                <SettingsWithImgTextIcon
                    img={require('../../assets/LogoutArrow.png')}
                    name="Logout" handler={LogOutHandler} />





            </Content>
        </Container>
    )
}
export default Settings;

const mystyles = StyleSheet.create({
    arrowCircleGradientView:
    {
        position: 'absolute', bottom: 0, right: -20
    },
    LinearGradientCircleView:
    {
        width: 45,
        borderRadius: 25,
        justifyContent: 'center',
        height: 45
    }
})