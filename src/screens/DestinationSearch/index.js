import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';

import searchResults from '../../../assests/data/search';

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

  return (
    <View style = {styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Where are you going ?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles = {{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCzygy7GHGVw7jZIJnjxyA6WQQswhcBNi8',
          language: 'en',
          types: '(cities)'
        }}
        suppressDefaultStyles
        renderRow = {(item) => <SuggestionRow item = {item} /> }
      />
    </View>
  );
}

export default DestinationSearchScreen;