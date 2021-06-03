import React from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BackgroundColor } from '../constants/colors';
import { mystyles } from '../styles';
import BackBtnWithMiddleText from '../components/BackBtnMiddleText';
import PreferencesTitleDescriptionArrowBtn from '../components/PreferencesTitleDescriptionArrowBtn';

const Preferences = ({ navigation }) => {
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }} >

                <BackBtnWithMiddleText text="Preferences" navigation={navigation} />
                <View style={{ marginTop: 40 }}>
                    <PreferencesTitleDescriptionArrowBtn title="General"
                        description={"Currency conversion, primary currency\n,language and search engine"}
                    />
                </View>

                <PreferencesTitleDescriptionArrowBtn title="Security & Privacy"
                    description={"Privacy settings, private key and wallet\nseed phrase"}
                />
                <PreferencesTitleDescriptionArrowBtn title="Verification"
                    description={"In order to use the service of GinkoPay\nyou will need to verify your identy"}
                />



            </Content>
        </Container>
    )
}
export default Preferences

const styles = StyleSheet.create({


})