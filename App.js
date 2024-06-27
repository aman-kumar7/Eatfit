import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { Navigation } from './navigation/TabNavigation';
import * as Icon from "react-native-feather";



export default function App() {
  return (
    <NavigationContainer style={{flex:1, backgroundColor: 'white'}}>
   <Navigation/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
