import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content } from 'native-base';
import Modal from 'react-native-modal';
import Svg, { Rect, Defs, Use, image, Path, Pattern } from 'react-native-svg';

import Icon from 'react-native-vector-icons/Ionicons'
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { BackgroundColor } from '../../constants/colors';
import { mystyles } from '../../styles';
import TextInputFloat from '../../components/TextInput'
import AddCompaignAddBannerBtn from '../../components/AddCompaignBanner';
import CompaignChannelViewBtn from '../../components/CompaignChannelViewBtn';
import Compaign from '../../components/compaign';
import CustomText from '../../components/Text';
import CustomButton from '../../components/Button';
import SvgImg from '../../components/Svg';

const Profile = ({ navigation }) => {

    const [showCompaign, setShowCompaign] = useState(false)
    const [showCompaignModal, setShowCompaignModal] = useState(false);
    const [showBannerModal, setShowBannerModal] = useState(false)
    const [btnSelect, setBtnSelect] = useState('Compaign')

    const [CompaignList, setCompaignsList] = useState([
        {
            id: 1,
            img: require('../../assets/backgroundPeople.png'),
            title: 'National compaign',
            url: 'http://ginkopay.com/username'
        },

        {
            id: 2,
            img: require('../../assets/backgroundPeople.png'),
            title: 'Rome compaign',
            url: 'http://ginkopay.com/username'
        },
        {
            id: 3,
            img: require('../../assets/backgroundPeople.png'),
            title: 'Totti compaign',
            url: 'http://ginkopay.com/username'
        },
    ])

    const [Channels, setChannels] = useState([
        {
            id: 1,
            img: require('../../assets/youtubeBg.png'),
            title: 'Youtube',
            url: 'http://ginkopay.com/username'
        },

        {
            id: 2,
            img: require('../../assets/TwitchBg.png'),
            title: 'Twitch',
            url: 'http://ginkopay.com/username'
        },
        {
            id: 3,
            img: require('../../assets/InstaBg.png'),
            title: 'Instagram',
            url: 'http://ginkopay.com/username'
        },
    ])
    const [compaignTitle, setCompaignTitle] = useState('');
    const [compaignError, setCompaignError] = useState('');
    const CompaignHandler = () => {
        console.log(showCompaign)
        setShowCompaign(!showCompaign)
    }
    const ChannelHandler = () => {
        console.log(showCompaign)
        setShowCompaign(!showCompaign)
    }
    const CreateBannerHandler = () => {
        setShowBannerModal(!showBannerModal)
        console.log('Banner')
    }
    const AddCompaignHandler = () => {
        setShowCompaignModal(!showCompaignModal)
        console.log('Compaign')
    }
    const CreateCompaignHandler = () => {
        alert('CompaignCreated')
    }
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{
                backgroundColor: BackgroundColor
            }}>
                <HeaderBackBtnWithLogo />

                <View style={styles.MainUserSettingsView}>

                    <Image style={{ alignSelf: 'center' }} resizeMode="contain" source={require('../../assets/personprofile.png')} />

                    <View style={styles.UserUsernameView}>
                        <Text style={styles.UsernameText}>Username</Text>
                        <Text style={styles.Username}>Team Italia</Text>
                    </View>

                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Image source={require('../../assets/settings.png')} />
                    </TouchableOpacity>

                </View>

                <View style={{ margin: 15, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            borderBottomWidth: btnSelect === 'Compaign' ? 2 : 0,
                            borderBottomColor: btnSelect === 'Compaign' ? '#FFFFFF' : '#17171A'
                        }}
                        onPress={() => {
                            setBtnSelect('Compaign')
                            setShowCompaign(false)
                        }}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'Compaign' ? '#FFFF' : '#888DAA'
                        }]}>
                            Compaign
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setBtnSelect('Channels')
                        setShowCompaign(false)
                    }}
                        style={[mystyles.RecentBtn, {
                            borderBottomWidth: btnSelect === 'Channels' ? 2 : 0,
                            borderBottomColor: btnSelect === 'Channels' ? '#FFFFFF' : '#17171A'
                        }]}>
                        <Text style={[mystyles.TopRatedRecentBtnText, {
                            color: btnSelect === 'Channels' ? '#FFFF' : '#888DAA'
                        }]}>Channels</Text>
                    </TouchableOpacity>
                </View>

                {btnSelect === 'Compaign' && showCompaign != true ?
                    <View>
                        <FlatList
                            data={CompaignList}
                            renderItem={({ item, index }) =>
                                <CompaignChannelViewBtn item={item}
                                    handler={CompaignHandler} />
                            }
                        />

                        <AddCompaignAddBannerBtn text="Add compaign" Addhandler={AddCompaignHandler} />

                    </View>
                    : null
                }
                {btnSelect === 'Channels' && showCompaign != true
                    ?
                    <View>
                        <FlatList
                            data={Channels}
                            renderItem={({ item, index }) =>
                                <CompaignChannelViewBtn item={item} handler={ChannelHandler} />
                            }
                        />
                        <AddCompaignAddBannerBtn text="Create Banner" Addhandler={CreateBannerHandler} />
                    </View>

                    : null
                }

                {btnSelect === 'Compaign' && showCompaign ?
                    <Compaign />
                    : null
                }

                {btnSelect === 'Channels' && showCompaign ?
                    <Compaign />
                    : null
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', backgroundColor: '#17171A', width: '100%' }}
                    coverScreen={true}
                    visible={showCompaignModal}
                    hasBackdrop={true}
                    onBackdropPress={() => setShowCompaignModal(false)}
                >


                    <View style={{ flex: 1, justifyContent: 'center', }}>

                        <TouchableOpacity style={styles.circleCloseBtn}
                            onPress={() => setShowCompaignModal(false)}>
                            <Image style={{ tintColor: "#FFFF" }}
                                source={require('../../assets/closecircle.png')} />
                        </TouchableOpacity>

                        <CustomText text="Create your own compaign"
                            locations={[0, 1,]} colors={["#72F6D1", "#FED365"]}
                            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }} />

                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.createYourOwnDescription}>
                                Create your own campaign to raise coins for{'\n'}your project. Please upload your banner{'\n'}and add a description
                           </Text>
                        </View>

                        <ImageBackground style={{ width: '100%', height: 190 }} source={require('../../assets/LargeKeyboardBg.png')}>
                            <TouchableOpacity style={styles.plusUploadBtn}>
                                <Image style={{ marginHorizontal: 5 }} source={require('../../assets/plusSquare.png')} />
                                <Text style={styles.uploadText}>Upload</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={{
                                fontSize: 16, fontFamily: 'Poppins-Regular',
                                color: '#FFFF'
                            }}>Compaign Title</Text>
                        </View>

                        <TextInput placeholder="Add a title"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />

                        <TextInput
                            multiline
                            textAlignVertical="top"
                            numberOfLines={5}
                            placeholderTextColor="#888DAA"
                            placeholder="Add a description"
                            style={[mystyles.simpleTextInput, {
                                backgroundColor: '#222531',
                                borderColor: '#222531',
                            }]}
                        />

                        <View style={{ marginVertical: 10 }}>
                            <CustomButton text={"Create your compaign"} onPress={CreateCompaignHandler} />
                        </View>

                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ alignSelf: 'center', backgroundColor: '#17171A', width: '100%' }}
                    coverScreen={true}
                    visible={showBannerModal}
                    hasBackdrop={true}
                    onBackdropPress={() => setShowBannerModal(false)}
                >


                    <View style={{ flex: 1, justifyContent: 'center', }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity
                                onPress={() => setShowBannerModal(false)}>
                                <Icon name="chevron-back-outline" size={20} color="#FFFF" />
                            </TouchableOpacity>

                            <Text style={{ color: '#FFFF' }}>Create</Text>

                            <TouchableOpacity style={styles.circleCloseBtn}
                                onPress={() => setShowBannerModal(false)}>
                                <Image style={{ tintColor: "#FFFF" }}
                                    source={require('../../assets/closecircle.png')} />
                            </TouchableOpacity>
                        </View>

                        {/* <SvgImg /> */}

                        <TouchableOpacity style={styles.LargeUploadBtn}>

                            <CustomText text="Upload"
                                locations={[0, 1,]} colors={["#72F6D1", "#FED365"]}
                                style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }} />
                        </TouchableOpacity>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: '#ABAFC4' }}>Upload a backgroud image for your{'\n'}banner. Choose a good quality.</Text>
                        </View>





                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={styles.compaignTitle}>Compaign Title</Text>
                        </View>


                        <TextInput placeholder="Add a title"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />

                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Text style={styles.compaignTitle}>Paste your own wallet address</Text>
                        </View>
                        <TextInput placeholder="Public addres(0x),or ENS"
                            placeholderTextColor="#888DAA"
                            style={mystyles.simpleTextInput}
                        />


                        <View style={{ marginVertical: 10 }}>
                            <CustomButton text={"Next"} onPress={CreateCompaignHandler} />
                        </View>

                    </View>
                </Modal>









            </Content>
        </Container>
    )
}

export default Profile;

const styles = StyleSheet.create({
    MainUserSettingsView:
    {
        marginHorizontal: 15,
        borderWidth: 1,
        backgroundColor: '#222531',
        borderColor: '#222531',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row'
    },
    compaignTitle:
    {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFF'
    },
    UserUsernameView:
    {
        marginHorizontal: 10,
        flex: 1
    },
    UsernameText:
    {
        fontSize: 16, fontFamily: 'Poppins-Bold', color: '#FFFF'
    },
    Username:
    {
        fontSize: 12, fontFamily: 'Poppins-Regular', color: '#ABAFC4'
    },
    circleCloseBtn:
    {
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1, borderRadius: 20,
        margin: 10,
        alignSelf: 'flex-end'
    },
    LargeUploadBtn:
    {
        width: '90%', alignSelf: 'center',
        borderColor: '#2A2D3C',
        borderRadius: 10, justifyContent: 'center',
        backgroundColor: '#2A2D3C',
        borderWidth: 1, height: 110
    },
    createYourOwnDescription:
    {
        color: '#FFFF',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    plusUploadBtn: {
        position: 'absolute',
        backgroundColor: '#222531',
        padding: 10,
        width: 120,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#222531',
        flexDirection: 'row',
        bottom: 15,
        left: 15,
        borderWidth: 1,
    },
    uploadText:
    {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#FFFF'
    }

})