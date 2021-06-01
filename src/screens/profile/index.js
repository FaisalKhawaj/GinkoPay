import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { BackgroundColor } from '../../constants/colors';
import { mystyles } from '../../styles';
import CustomText from '../../components/Text';
import AddCompaignAddBannerBtn from '../../components/AddCompaignBanner';

const Profile = ({ navigation }) => {
    const [btnSelect, setBtnSelect] = useState('Compaign')
    const [Compaign, setCompaigns] = useState([
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

    const [showCompaign, setShowCompaign] = useState(false)
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
                            data={Compaign}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 10, borderRadius: 15, width: '90%' }}>
                                    <ImageBackground style={{ borderRadius: 10, width: '100%', height: 130 }}
                                        source={item.img}>
                                        <View style={{ marginHorizontal: 15, position: 'absolute', bottom: 10 }}>
                                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 28, color: '#FFFF' }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{ marginTop: -10, color: '#FFFF', fontSize: 13 }}>
                                                http://ginkopay.com/username
                                 </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            }
                        />

                        <AddCompaignAddBannerBtn text="Add compaign" />

                    </View>
                    : null
                }
                {btnSelect === 'Channels'
                    // && showCompaign != true
                    ?
                    <View>
                        <FlatList
                            data={Channels}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 10, borderRadius: 15, width: '90%' }}>
                                    <ImageBackground style={{ borderRadius: 10, width: '100%', height: 130 }}
                                        source={item.img}>
                                        <View style={{ marginHorizontal: 15, position: 'absolute', bottom: 10 }}>
                                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 28, color: '#FFFF' }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{ marginTop: -10, color: '#FFFF', fontSize: 13 }}>
                                                {item.url}
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            }
                        />
                        <AddCompaignAddBannerBtn text="Create Banner" />
                    </View>

                    : null
                }







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
    }

})