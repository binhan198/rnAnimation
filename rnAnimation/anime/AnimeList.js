import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Navigator,
} from 'react-native';

class AnimationList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged : (r1, r2) => r1 !== r2, 
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource : ds.cloneWithRowsAndSections(this.props.dataSource)
    };
  }

  renderRowData(rowData, sectionId, rowId) {
    let rowBackColor = rowId & 0x1 ? '#7fffd4' : '#6fefc4';
    return (
        <TouchableOpacity 
          activeOpacity = {0.7} 
          style = {[styles.rowView, {backgroundColor : rowBackColor}]} 
          onPress = {() => this.rowDidSelected(rowData)}>

          <Text style = {styles.row}>{rowData}</Text>
          <View style = {styles.rowImageView}>
            <Image style = {styles.rowImage} resizeMode = {'center'} source = {{uri : 'next_icon'}}></Image>
          </View>

        </TouchableOpacity>
      );
  }

  renderHeaderData(Header, sectionId) {
    return (
        <View style = {styles.headView}>
          <Text style = {styles.head}>{sectionId}</Text>
        </View>
      );
  }

  rowDidSelected(rowData) {
    this.props.onForward(rowData);
  }

  render() {
    return (
      <ListView style = {styles.ListView}
        dataSource = {this.state.dataSource}
        renderRow = {(rowData, sectionId, rowId) => this.renderRowData(rowData, sectionId, rowId)} 
        renderSectionHeader = {(Header, sectionId) => this.renderHeaderData(Header, sectionId)}/>
      );
  }

}

export default class AnimeList extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <AnimationList 
          onForward = {this.props.onForward ? this.props.onForward : () => {}}
          dataSource = {{
          '动画' : ['spring', 'decay', 'timing'], 
          '其他' : ['combineAnime', 'event', 'LayoutAnime'],
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  ListView: {
    marginTop:20,
  },
  rowView:{
    height:28,
    flexDirection:'row',
  },
  row:{
    fontSize:20,
    marginHorizontal:15,
  },
  rowImageView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginHorizontal:15,
  },
  rowImage:{
    alignSelf:'stretch',
    width:20,
  },
  headView:{
    height:36,
    backgroundColor:'darkturquoise',
    justifyContent:'center',
  },
  head: {
    fontSize:24,
    textAlign:'center',
  },
});

AppRegistry.registerComponent('AnimeList', () => AnimeList);
