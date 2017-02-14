import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  PanResponder,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class EventAnimation extends BaseAnimation {
  constructor(props) {
    super(props);
    this.state = {
      panXY : new Animated.ValueXY()
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true,
      onMoveShouldSetPanResponder : () => true,
      onPanResponderMove : Animated.event([null, {
        dx : this.state.panXY.x,
        dy : this.state.panXY.y,
      }]),
      onPanResponderRelease : () => {
        Animated.spring(
          this.state.panXY,
          {toValue : {x : 0, y : 0}} // Back to zero
        ).start();
      },
    });
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
        <Animated.Image 
          resizeMode = {'stretch'} 
          source = {{uri : 'react_native_logo'}} 
          {...this.panResponder.panHandlers} 
          style = {[styles.animatedImage, {left : this.state.panXY.x, top : this.state.panXY.y}]}/>
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
  animatedImage:{
    width : 200,
    height : 200, 
    marginTop : 120,
  },
});

AppRegistry.registerComponent('EventAnimation', () => EventAnimation);
