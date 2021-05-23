import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RootStackNavigator from './src/Navigations/RootStackNavigator'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator>
        
      </RootStackNavigator>
    </NavigationContainer>
  );

};
export default App;
