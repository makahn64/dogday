import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {randomImageForBreed} from '../../services/dogapi/images';
import * as Animatable from 'react-native-animatable';

const NUM_RANDOM_IMG = 6;

export const KennelScreen: FC = () => {
  const route = useRoute();
  const {
    params: {breed},
  } = route;
  const [randoms, setRandoms] = useState<string[]>([]);
  const [isRefreshing, setRefreshing] = useState(true);

  const getRandoms = async () => {
    setRefreshing(true);
    const promises = [];
    for (let i = 0; i < NUM_RANDOM_IMG; i++) {
      promises.push(randomImageForBreed(breed));
    }
    try {
      const r = await Promise.all(promises);
      // dedup w/o lodash :D
      setRandoms(Array.from(new Set(r)));
    } catch (e) {
      console.log('ERROR fetching randoms in KennelScreen');
      // I would normally handle this in some intelligent way, or at least log it out via React/Flipper.
      // For this exercise, I will just log it.
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getRandoms();
  }, []);

  const handleMore = () => {
    setRandoms([]);
    setTimeout(getRandoms, 1000);
  };

  return (
    <ScrollView
      style={{backgroundColor: '#101010'}}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={getRandoms}
          colors={['#2020ff']}
          tintColor="#2020ff"
        />
      }>
      {randoms.map((url, idx) => (
        <Animatable.Image
          source={{uri: url}}
          key={idx}
          animation="zoomIn"
          duration={1000}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            margin: 10,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      ))}
    </ScrollView>
  );
};
