import React, { useState } from 'react';
import { Container, Content, Thumbnail } from 'native-base'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import { BackgroundColor } from '../constants/colors';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mystyles } from '../styles';
import BackBtnWithMiddleText from '../components/BackBtnMiddleText';
import PreferencesTitleDescriptionArrowBtn from '../components/PreferencesTitleDescriptionArrowBtn';
import HeaderBackTextCloseBtn from '../components/HeaderBackTextClose';
import CustomButton from '../components/Button';
const { width, height } = Dimensions.get('window')
const Preferences = ({ navigation }) => {
    const [showGeneralModal, setShowGeneralModal] = useState(false)
    const [checkedCurrency, setCheckedCurrency] = React.useState('Native');
    const [checkedUserSearch, setCheckedUserSearch] = useState('Yes')
    const BackBtnHandler = () => {
        navigation.goBack()
    }
    const closeModalHandler = () => {
        setShowGeneralModal(!showGeneralModal)
    }
    const UpdateGeneralHandler = () => {
        alert('Update')
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [CurrencyDropDown, setCurrencyDropDown] = useState([
        { label: 'Dollar', value: 'USD-United State Dollar' },
        { label: 'Euro', value: 'Euro' },
    ]);
    const [openLanguage, setOpenLanguage] = useState(false)
    const [valueLanguage, setValueLanguage] = useState(null)
    const [LanguageDropDown, setLanguageDropDown] = useState([
        { label: 'English', value: 'English' },
        { label: 'Italic', value: 'Italic' },
    ]);
    // const GeneralModalHandler=()=>
    // {
    //     showGeneralModal(!showGeneralModal)
    // }
    return (
        <Container style={{ backgroundColor: BackgroundColor }}>
            <Content contentContainerStyle={{ backgroundColor: BackgroundColor }} >

                <BackBtnWithMiddleText text="Preferences" backBtn={BackBtnHandler} navigation={navigation} />
                <View style={{ marginTop: 40 }}>
                    <PreferencesTitleDescriptionArrowBtn 
                        title="General"
                        showModal={closeModalHandler}
                        description={"Currency conversion, primary currency\n,language and search engine"}
                    />
                </View>

                <PreferencesTitleDescriptionArrowBtn 
                    title="Security & Privacy"
                    showModal={closeModalHandler}
                    description={"Privacy settings, private key and wallet\nseed phrase"}
                />
                <PreferencesTitleDescriptionArrowBtn 
                    title="Verification"
                    showModal={closeModalHandler}
                    description={"In order to use the service of GinkoPay\nyou will need to verify your identy"}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ height: height / 1, alignSelf: 'center', width: '100%' }}
                    coverScreen={true}
                    animationOut="slideOutDown"
                    visible={showGeneralModal}
                // hasBackdrop={true}
                // onBackdropPress={() => setShowEditProfileModal(false)}
                >
                    <View style={{ height: height / 1.1, backgroundColor: '#17171A' }}>
                        <HeaderBackTextCloseBtn text="General" closeModal={closeModalHandler} />
                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Currency Conversion</Text>
                            <Text style={styles.descriptionText}>
                                Display fiat values in using o specific{'\n'}currency throughout the application
                         </Text>
                        </View>

                        <DropDownPicker
                            open={open}
                            value={value}
                            items={CurrencyDropDown}
                            searchable={false}
                            placeholder="USD-United State Dollar"
                            style={{
                                backgroundColor: '#131313',
                                borderColor: '#17171A',
                                borderRadius: 10,
                                // width: wp('90%'),
                                // alignSelf: 'center'
                            }}
                            showArrowIcon={true}
                            arrowIconStyle={{ tintColor: open ? 'green' : '#FFFFFF' }}
                            dropDownContainerStyle={{
                                backgroundColor: '#131313',
                                borderColor: '#272727',
                            }}
                            textStyle={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#FFFF',
                                fontFamily: 'Poppins-Bold',

                            }}
                            containerStyle={{ width: '90%', alignSelf: 'center', height: 44 }}
                            setValue={setValue}
                            setItems={setCurrencyDropDown}
                            setOpen={setOpen}
                        />

                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Privacy Currency</Text>
                            <Text style={styles.descriptionText}>
                                Select Native to prioritize displaying values{'\n'}in the native currency of the chain (e.g. ETH).{'\n'} Select Fiat to prioritize displaying values in{'\n'}your selected fiat currency
                             </Text>
                        </View>

                        <View style={{ marginLeft: 15, flexDirection: 'row' }}>

                            <RadioButton
                                color="#FEBF32"
                                uncheckedColor="#FFFF"
                                value="Native"
                                status={checkedCurrency === 'Native' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedCurrency('Native')}
                            />
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Native</Text>

                            <View style={{ marginLeft: 35, flexDirection: 'row' }}>
                                <RadioButton
                                    color="#FEBF32"
                                    uncheckedColor="#FFFF"
                                    value="Flat"
                                    status={checkedCurrency === 'Flat' ? 'checked' : 'unchecked'}
                                    onPress={() => setCheckedCurrency('Flat')}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Flat</Text>
                            </View>
                        </View>


                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>Current Language</Text>
                            <Text style={styles.descriptionText}>
                                Translate the application to a different{'\n'}supported language
                             </Text>
                        </View>

                        <DropDownPicker
                            open={openLanguage}
                            value={valueLanguage}
                            items={LanguageDropDown}
                            searchable={false}
                            placeholder="English"
                            style={{
                                backgroundColor: '#131313',
                                borderColor: '#17171A',
                                borderRadius: 10,
                                // width: wp('90%'),
                                // alignSelf: 'center'
                            }}
                            showArrowIcon={true}
                            arrowIconStyle={{ tintColor: open ? 'green' : '#FFFFFF' }}
                            dropDownContainerStyle={{
                                backgroundColor: '#131313',
                                borderColor: '#272727',
                            }}
                            textStyle={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#FFFF',
                                fontFamily: 'Poppins-Bold',
                            }}
                            containerStyle={{ width: '90%', alignSelf: 'center', height: 44 }}
                            setValue={setValueLanguage}
                            setItems={setLanguageDropDown}
                            setOpen={setOpenLanguage}
                        />





                        <View style={styles.CurrencyPRivacyCurrentLanUserSearchView}>
                            <Text style={styles.headingText}>User can search my profile </Text>
                            <Text style={styles.descriptionText}>
                                Other User can’t find your profile if you click{'\n'}no. Nobody will see your account.
                             </Text>
                        </View>

                        <View style={{ marginLeft: 15, flexDirection: 'row' }}>

                            <RadioButton
                                color="#FEBF32"
                                uncheckedColor="#FFFF"
                                value="Native"
                                status={checkedUserSearch === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedUserSearch('Yes')}
                            />
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>Yes</Text>

                            <View style={{ marginLeft: 35, flexDirection: 'row' }}>
                                <RadioButton
                                    color="#FEBF32"
                                    uncheckedColor="#FFFF"
                                    value="No"
                                    status={checkedUserSearch === 'No' ? 'checked' : 'unchecked'}
                                    onPress={() => setCheckedUserSearch('No')}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FFFF' }}>No</Text>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                            <CustomButton text={"Update"} onPress={UpdateGeneralHandler}
                            />
                        </View>

                    </View>
                </Modal>



            </Content>
        </Container >
    )
}
export default Preferences

const styles = StyleSheet.create({
    CurrencyPRivacyCurrentLanUserSearchView: {
        marginVertical: 10, marginLeft: 20
    },
    headingText: {
        fontSize: 16, fontFamily: 'Poppins-Bold', color: '#FFFF'
    },
    descriptionText: {
        fontFamily: 'Poppin-Regular', fontSize: 14, color: '#ABAFC4'
    }

})