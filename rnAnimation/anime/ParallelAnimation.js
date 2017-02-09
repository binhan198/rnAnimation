import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class ParallelAnimation extends BaseAnimation {

  constructor(props) {
    super(props);
    this.state = {
      springValue : new Animated.Value(1),
      decayValue : new Animated.Value(0),
      opacityValue : new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.state.springValue.setValue(1);
    this.state.decayValue.setValue(0);
    this.state.opacityValue.setValue(1);

    Animated.parallel([ //parallel（同时执行）、sequence（顺序执行）、stagger的第一个参数是毫秒时间Animated.stagger(200, [动画数组])表示所有动画都延迟一个固定时间
      Animated.spring(
        this.state.springValue, {
          toValue : 0.9,
          friction : 1,
        }
        ),
      Animated.decay(
        this.state.decayValue, {
          velocity : 0.4,
          deceleration : 0.999,
        }
        ),

      Animated.delay(2000),   //作为一种动画执行，只有执行的时间，没有动作

      Animated.timing(
        this.state.opacityValue, {
          toValue : 0.2,
          duration : 1800,
        }
        )
      ]).start((finished) => finished && finished.finished && this.startAnimation());
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
        <Animated.Image resizeMode = {'stretch'} source = {{uri : 'react_native_logo'}} style = {[
            styles.animatedImage,
            {transform : [{scale : this.state.springValue}], marginTop : this.state.decayValue, opacity : this.state.opacityValue},
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

AppRegistry.registerComponent('ParallelAnimation', () => ParallelAnimation);
