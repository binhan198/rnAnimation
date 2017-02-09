import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class DecayAnimation extends BaseAnimation {

  constructor(props) {
    super(props);
    this.state = {
      decayValue : new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.decayValue.setValue(0);  //初始位置
    Animated.decay(
      this.state.decayValue, {
        velocity : 0.4,       //初始速度
        deceleration : 0.999, //deceleration代表速度的衰减系数，每毫秒进行衰减，并不是加速度
      }
      ).start();
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
        <Animated.Image resizeMode = {'stretch'} source = {{uri : 'react_native_logo'}} style = {[
            styles.animatedImage,
            {marginTop : this.state.decayValue},
          ]}/>
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
    marginTop : 0,
  },
});

AppRegistry.registerComponent('DecayAnimation', () => DecayAnimation);
