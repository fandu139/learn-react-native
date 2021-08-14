/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style = {styles.sectionContainer} >
        <View style = {{width: 50,height: 50,backgroundColor: 'powderblue'}} />
        <View style = {{width: 50,height: 50,backgroundColor: 'skyblue'}} />
        <View style = {{width: 50,height: 50,backgroundColor: 'steelblue'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

export default App;
