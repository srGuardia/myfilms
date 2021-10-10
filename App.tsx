import 'react-native-gesture-handler';
import React from 'react';

import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {
  Raleway_300Light,
  Raleway_400Regular,
} from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Raleway_400Regular,
    Raleway_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}
