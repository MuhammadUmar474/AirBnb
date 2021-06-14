import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../screens/Home';
import SearchResultsMap from '../screens/SearchResultsMap';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator 
    tabBarOptions = {{
        activeTintColor: '#f15454',
    }}>
        <Tab.Screen 
            name = {"Explore"}
            component = {ExploreNavigator}
            options = {{
                tabBarIcon : ({ color }) => (
                    <Fontisto name= 'search' size={25} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name = {"Saved"}
            component = {HomeScreen}
            options = {{
                tabBarIcon : ({ color }) => (
                    <FontAwesome name= 'heart-o' size={25} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name = {"AirBnb"}
            component = {HomeScreen}
            options = {{
                tabBarIcon : ({ color }) => (
                    <FontAwesome5 name= 'airbnb' size={25} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name = {"Message"}
            component = {HomeScreen}
            options = {{
                tabBarIcon : ({ color }) => (
                    <Feather name= 'message-square' size={25} color={color} />
                )
            }}
        />

        <Tab.Screen 
            name = {"Profile"}
            component = {HomeScreen}
            options = {{
                tabBarIcon : ({ color }) => (
                    <EvilIcons name= 'user' size={25} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;