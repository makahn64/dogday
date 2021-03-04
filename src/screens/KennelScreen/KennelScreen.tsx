import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {randomImageForBreed} from '../../services/dogapi/images';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native-elements';

const NUM_RANDOM_IMG = 6;

const AnimatableRNEImage = Animatable.createAnimatableComponent(Image);

export const KennelScreen: FC = () => {
  const route = useRoute();
  // the parameters should be typed, but this is an area where React Nav can be a bit of a hassle
  // @ts-ignore
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
    // the illusion of work
    setTimeout(getRandoms, 500);
  };

  return (
    <ScrollView
      style={{backgroundColor: '#101010'}}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handleMore}
          colors={['#2020ff']}
          tintColor="#2020ff"
        />
      }>
      {randoms.map((url, idx) => (
        <AnimatableRNEImage
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
