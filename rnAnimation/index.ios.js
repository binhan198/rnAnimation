import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import AnimeList from './anime/AnimeList.js';
import SpringAnimation from './anime/SpringAnimation.js';
import DecayAnimation from './anime/DecayAnimation.js';
import TimingAnimation from './anime/TimingAnimation.js';
import ParallelAnimation from './anime/ParallelAnimation.js';
import LayoutAnime from './anime/LayoutAnime.js';
import EventAnimation from './anime/EventAnimation.js';

export default class rnAnimation extends Component {

  navigateToScene(route, navigator) {
    switch(route.type) {
      case 'spring':{
        return <SpringAnimation onBack = {() => navigator.pop()}/>
      } break;
      case 'decay':{
        return <DecayAnimation onBack = {() => navigator.pop()}/>
      } break;
      case 'timing':{
        return <TimingAnimation onBack = {() => navigator.pop()}/>
      } break;
      case 'combineAnime':{
        return <ParallelAnimation onBack = {() => navigator.pop()}/>
      } break;
      case 'event':{
        return <EventAnimation onBack = {() => navigator.pop()}/>
      } break;
      case 'LayoutAnime':{
        return <LayoutAnime onBack = {() => navigator.pop()}/>
      } break;
      case 'AnimeList':{
        return <AnimeList onForward = {(animeType) => navigator.push({type : animeType})}/>
      } break;
      default: break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{type:'AnimeList'}}
        renderScene = {(route, navigator) => this.navigateToScene(route, navigator)}/>
    );
  }
}

AppRegistry.registerComponent('rnAnimation', () => rnAnimation);
