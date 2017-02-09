import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class SpringAnimation extends BaseAnimation {

  constructor(props) {
    super(props);
    this.state = {
      springValue : new Animated.Value(0.8),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.springValue.setValue(1);
    Animated.spring(
      this.state.springValue, {
        toValue : 0.9,
        friction : 1,
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
            {transform : [{scale : this.state.springValue}]},
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

AppRegistry.registerComponent('SpringAnimation', () => SpringAnimation);
