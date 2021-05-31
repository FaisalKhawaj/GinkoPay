import React, { useState } from 'react';
import { Container, Content } from 'native-base'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { BackgroundColor } from '../../constants/colors';
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';


const Profile = ({ navigation }) => {
    const [TopCompaigns, setTopCompaigns] = useState([
        {
            id: 1,
            img: require('../../assets/Gaming.png')
        },
        {
            id: 2,
            img: require('../../assets/fifa.png')
        },
        {
            id: 3,
            img: require('../../assets/fifa.png')
        },
        {
            id: 4,
            img: require('../../assets/fifa.png')
        },
        {
            id: 5,
            img: require('../../assets/fifa.png')
        },
    ])
    return (
        <Container>
            <Content contentContainerStyle={{
                flex: 1,
                backgroundColor: BackgroundColor
            }}>

                <HeaderBackBtnWithLogo />

                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.TopCompaignsText}>
                        Top Compaigns
        </Text>
                </View>
                <FlatList
                    data={TopCompaigns}
                    horizontal
                    renderItem={({ item, index }) =>
                        <View>
                            <TouchableOpacity style={styles.TopCompaignsImgBtn}>
                                <Image resizeMode="contain"
                                    style={styles.TopCompaignsImgStyle}
                                    source={item.img} />
                            </TouchableOpacity>

                        </View>
                    }
                />



            </Content>
        </Container >
    )
}

export default Profile;

const styles = StyleSheet.create({
    TopCompaignsText:
    {
        color: '#FFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    TopCompaignsImgBtn:
    {
        borderRadius: 20,
        marginHorizontal: 4
    },
    TopCompaignsImgStyle:
    {
        width: 150,
        height: 170
    }
})
