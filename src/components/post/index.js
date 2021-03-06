import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }
  return (
    <Pressable onPress={goToPostPage} style = {styles.container}>
      {/* Image */}
      <Image 
      style ={styles.image}
      source={{ uri: post.image}}/>

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} Bed, 
        {post.bedroom} Bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
      {post.type}. {post.title}
      </Text>

      {/* Old & New Price */}
      <Text style = {styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice}</Text>
        / Night
      </Text>
      {/* Total Price */}

      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
}

export default Post;
