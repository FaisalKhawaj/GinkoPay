import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderBackBtnWithLogo from '../../components/HeaderBackArrowWithGinkoPay';
import { BackgroundColor } from '../../constants/colors';

const Profile = ({ navigation }) => {
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{
                backgroundColor: BackgroundColor
            }}>
                <HeaderBackBtnWithLogo />
            </Content>
        </Container>
    )
}

export default Profile;