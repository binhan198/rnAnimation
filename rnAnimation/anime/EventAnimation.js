import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class EventAnimation extends BaseAnimation {

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white',
  },
  backBtn:{
    alignSelf:'flex-start',
    marginLeft:15,
    marginTop:20,
  },
});

AppRegistry.registerComponent('EventAnimation', () => EventAnimation);
