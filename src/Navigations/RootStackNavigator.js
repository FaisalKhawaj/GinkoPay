import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from "@react-navigation/stack";
import SliderScreenOne from '../screens/slidescreenone'
import SliderScreenTwo from '../screens/slidescreentwo'
import SliderScreenThree from '../screens/slidescreenthree'
import CreateAccountIntro from '../screens/createaccountintro'
import Login from '../screens/login'
import CreataAccount from '../screens/createaccount'
import UploadImage from '../screens/uploadpicture'
import UploadedImage from '../screens/uploaddedpicture'
import KycNeed from '../screens/kycneed'

// DashBoard
import DashBoardScreen from '../screens/dashboard'
import Profile from '../screens/profile';

const RootStack = createStackNavigator();
enableScreens()
const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Profile"}
        >
            <RootStack.Screen
                name="SliderScreenOne"
                component={SliderScreenOne}
            />

            <RootStack.Screen
                name="SliderScreenTwo"
                component={SliderScreenTwo}
            />
            <RootStack.Screen
                name="SliderScreenThree"
                component={SliderScreenThree}
            />
            <RootStack.Screen
                name="CreateAccountIntro"
                component={CreateAccountIntro}
            />
            <RootStack.Screen
                name="Login"
                component={Login}
            />
            <RootStack.Screen
                name="CreataAccount"
                component={CreataAccount}
            />
            <RootStack.Screen
                name="UploadImage"
                component={UploadImage}
            />
            <RootStack.Screen
                name="UploadedImage"
                component={UploadedImage}
            />
            <RootStack.Screen
                name="KycNeed"
                component={KycNeed}
            />
            <RootStack.Screen
                name="DashBoardScreen"
                component={DashBoardScreen}
            />

            <RootStack.Screen
                name="Profile"
                component={Profile}
            />
        </RootStack.Navigator>
    )
}
export default RootStackScreen;