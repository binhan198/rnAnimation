import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  LayoutAnimation,
} from 'react-native';

import BaseAnimation from './BaseAnimation';

export default class LayoutAnime extends BaseAnimation {

  constructor(props) {
    super(props);
    this.state = {
      imgTop : 120
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.backBtn}>
          {super.render()}
        </View>
        <Image resizeMode = {'stretch'} source = {{uri : 'react_native_logo'}} style = {[styles.animatedImage, {marginTop : this.state.imgTop}]}/>
        <TextInput style = {styles.textInput} onFocus = {() => {
                                                                  LayoutAnimation.easeInEaseOut();
                                                                  this.setState({imgTop : 0});}} 
                                              onEndEditing = {() => {
                                                                  LayoutAnimation.easeInEaseOut();
                                                                  this.setState({imgTop : 120})}}/>
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
  },
  textInput:{
    height : 40,
    borderWidth : 1,
    borderColor : 'gray',
  },
});

AppRegistry.registerComponent('LayoutAnime', () => LayoutAnime);
