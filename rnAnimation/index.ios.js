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
    let CustomAnime = null;
    switch(route.type) {
      case 'spring':{
        CustomAnime = SpringAnimation;
      } break;
      case 'decay':{
        CustomAnime = DecayAnimation;
      } break;
      case 'timing':{
        CustomAnime = TimingAnimation;
      } break;
      case 'combineAnime':{
        CustomAnime = ParallelAnimation;
      } break;
      case 'event':{
        CustomAnime = EventAnimation;
      } break;
      case 'LayoutAnime':{
        CustomAnime = LayoutAnime;
      } break;
      case 'AnimeList':{
        return <AnimeList onForward = {(animeType) => navigator.push({type : animeType})}/>
      } break;
      default: break;
    }

    return <CustomAnime onBack = {() => navigator.pop()}/>
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
