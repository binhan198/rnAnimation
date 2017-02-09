import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class BaseAnimation extends Component {
  render() {
    return (
      <TouchableOpacity onPress = {this.props.onBack ? this.props.onBack : () => {}}>
        <Text style = {styles.backBtn}>{'<-BACK'}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backBtn:{
    fontSize:24,
  },
});
