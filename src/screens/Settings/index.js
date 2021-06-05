import React, { useState } from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';

import { BackgroundColor, LinearGradientColorOne, LinearGradientColorTwo } from '../../constants/colors';
import styles from '../slidescreenone/styles';
import SettingsWithImgTextIcon from '../../components/SettingsImgTextArrowBtn';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import BackBtnWithMiddleText from '../../components/BackBtnMiddleText';
import CustomButton from '../../components/Button';
import { mystyles } from '../../styles';
const { width, height } = Dimensions.get('window');
const Settings = ({ navigation }) => {

    const EditProfileHandler = () => {
        setShowEditProfileModal(!showEditProfileModal)

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
    const UpdateHandler = () => {
        alert('Hi')
    }
    const BackBtnHandler = () => {
        navigation.navigate('Profile')
    }
    const [showEditProfileModal, setShowEditProfileModal] = useState(false)
    const [ProfileImg, setProfileImg] = useState('')
    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setProfileImg(image.path)

        }).catch((error) => {
            console.log(error)
        })
    }
    console.log(ProfileImg)
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }}>

                <TouchableOpacity style={{ marginVertical: 20, alignSelf: 'center' }}>
                    <Thumbnail large
                        source={require('../../assets/profilePic.png')} />
                    <View style={mystylesComp.arrowCircleGradientView}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={[LinearGradientColorTwo, LinearGradientColorOne]}
                            style={mystylesComp.LinearGradientCircleView}>
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


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', width: '100%' }}
                    coverScreen={true}
                    animationOut="slideOutDown"
                    visible={showEditProfileModal}
                // hasBackdrop={true}
                // onBackdropPress={() => setShowEditProfileModal(false)}
                >
                    <View style={[mystyles.referCodeModalMainView, { height: height / 1.7, width: width }]}>
                        <View style={mystyles.modalUpperSmallLine} />

                        <BackBtnWithMiddleText text="Choose New Account" backBtn={BackBtnHandler} navigation={navigation} />
                        <View style={{ alignSelf: 'center' }}>

                            <View style={mystylesComp.circleImageView}>
                                {ProfileImg != null ?
                                    <Image style={{ width: 30, height: 20, borderRadius: 25, }} resizeMode='center'
                                        source={ProfileImg} /> : null

                                }
                            </View>
                            <Image
                                style={{ position: 'absolute' }}
                                source={require('../../assets/smallAvatar.png')} />

                        </View>

                        <TouchableOpacity onPress={() => openPicker()} style={mystylesComp.chooseAvatarBtn}>
                            <Text style={mystylesComp.chooseAvatarText}>Choose an Avatar</Text>
                        </TouchableOpacity>

                        <View style={mystylesComp.TextNameTextInputView}>
                            <Text style={{ color: '#888DAA' }}>Account Name</Text>
                            <TextInput
                                style={{ marginTop: -15, fontWeight: 'bold', color: '#FFFF' }}
                                placeholder="Choose Username" placeholderTextColor="#FFFF" />
                        </View>
                        <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                            <CustomButton text={"Update"} onPress={UpdateHandler} />
                        </View>



                    </View>
                </Modal>
                {showEditProfileModal ?
                    <BlurView
                        style={mystyles.absolute}
                        blurType="light"
                        blurRadius={10}
                        blurAmount={10}
                        reducedTransparencyFallbackColor="#222531"
                    />
                    : null}


            </Content>
        </Container>
    )
}
export default Settings;

const mystylesComp = StyleSheet.create({
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
    },
    circleImageView:
    {
        width: 60, height: 60,
        backgroundColor: '#222531',
        borderRadius: 30,
        borderWidth: 1, borderColor: '#222531'
    },
    chooseAvatarBtn:
    {
        backgroundColor: '#2A2D3C', borderWidth: 1,
        width: wp('40%'),
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10, padding: 6,
    },
    chooseAvatarText:
    {
        textAlign: 'center',
        color: '#FEBF32'
    },
    TextNameTextInputView: {
        width: wp('90%'), alignSelf: 'center',
        borderRadius: 10, borderColor: '#FFFF',
        paddingTop: 4,
        marginTop: 20,
        paddingHorizontal: 10,
        borderWidth: 1
    }
})