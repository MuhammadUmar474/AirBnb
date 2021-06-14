import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarousalItem from '../../components/PostCarousalItem';
import places from '../../../assests/data/feed';


const SearchResultsMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  const width = useWindowDimensions().width;
  useEffect( () => {
    if (!selectedPlaceId || !flatList){
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatList.current.scrollToIndex({index})

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId])
  return (
    <View style = {{width: '100%', height: '100%'}}>
      <MapView
        ref = {map}
        style = {{width: '100%', height: '100%'}}
        initialRegion={{
        latitude: 28.080798046161917,
        longitude: -16.59407023667273,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
        }}
      >
        {places.map(place => 
        (<CustomMarker
        coordinate={place.coordinate}
        price={place.newPrice}
        isSelected={ place.id === selectedPlaceId}
        onPress= {() => setSelectedPlaceId(place.id)}
        />))}
      </MapView>

      <View style = {{position: 'absolute', bottom: 10}}>
          <FlatList
            ref={flatList}
            data = {places}
            renderItem = {({item}) => <PostCarousalItem post = {item} />}
            horizontal
            showsHorizontalScrollIndicator = {false}
            snapToInterval = {width - 60}
            snapToAlignment = {"center"}
            decelerationRate = {"fast"}
            viewabilityConfig={viewConfig.current}
            onViewableItemsChanged={onViewChanged.current}
          />
      </View>
     </View>
  );
}

export default SearchResultsMap;    
