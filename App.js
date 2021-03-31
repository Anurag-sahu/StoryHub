import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadStory from './Screens/ReadStory.js';
import WriteStory from './Screens/WriteStory.js'

export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:WriteStory},
  Search:{screen:ReadStory},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'write'){
        return(
          <Image
          source = {require('./assets/book.png')}
          style={{width:40,height:40}}/>
        )
      }
      else if (routeName === 'Search'){
        return(
        <Image
        source = {require('./assets/searchingbook.png')}
        style={{width:40,height:40}}/>
        )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator);

