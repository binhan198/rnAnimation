import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class TimingAnimation extends BaseAnimation {

  constructor(props) {
    super(props);
    this.state = {
      opacityValue : new Animated.Value(100),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.opacityValue.setValue(100);
    Animated.timing(
      this.state.opacityValue, {
        toValue : 0,
        duration : 2000,
        delay : 200,
      }
      ).start((finished) => finished && finished.finished && this.startAnimation());
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
        <Animated.Image resizeMode = {'stretch'} source = {{uri : 'react_native_logo'}} style = {[
            styles.animatedImage,
            {opacity : this.state.opacityValue.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            })},  //这里就是想用一下插值，把0~100，映射成0~1
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
    marginTop : 120,
  },
});

AppRegistry.registerComponent('TimingAnimation', () => TimingAnimation);
