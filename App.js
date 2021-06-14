import React from 'react';

import { SafeAreaView, StatusBar, StyleSheet,Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';
import feed from './assests/data/feed';

const post1 = feed[0];
const post2 = feed[2];

const App = () => {

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Router />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
