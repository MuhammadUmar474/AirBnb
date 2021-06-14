import React from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    Pressable 
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const HomeScreen = (props) => {

  const navigation = useNavigation();
  return (
    <View >
        
      <ImageBackground 
      source = {require('../../../assests/images/wallpaper.jpg')} 
      style = {styles.image}
      >
          <Pressable 
            style = {styles.searchButton} 
            onPress = {() => navigation.navigate('Destination Search')}
        >
            <Fontisto name= {"search"} size={25} color={'#f15454'} />
            <Text style = {styles.searchButtonText}> Where are you going? </Text>
        </Pressable>
        <Text style = {styles.title} >GO Near</Text>
        
        <Pressable 
            style = {styles.button} 
            onPress = {() => console.warn('explore button')}
        >
            <Text style = {styles.buttonText}> Explore Nearby stays </Text>
        </Pressable>
      </ImageBackground>
     </View>
  );
}

export default HomeScreen;