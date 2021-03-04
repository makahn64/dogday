import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from "react-native";
import {useRoute} from '@react-navigation/native';
import {randomImageForBreed} from "../../services/dogapi/images";
import {Button} from "react-native-elements";
import * as Animatable from 'react-native-animatable';


interface Props {
}

export const KennelScreen: FC<Props> = (props) => {

  const route = useRoute();
  const {params: {breed}} = route;
  const [randoms, setRandoms] = useState<string[]>([]);

  const getRandoms = async () => {
    const promises = [];
    for (let i = 0; i < 6; i++) {
      promises.push(randomImageForBreed(breed));
    }
    const r = await Promise.all(promises);
    // dedup w/o lodash :D
    setRandoms(Array.from(new Set(r)));
  };

  useEffect(() => {
    getRandoms();
  }, []);

  const handleMore = () => {
    setRandoms([]);
    setTimeout(getRandoms, 1000);
  }

  return (
    <ScrollView style={{backgroundColor: '#000000'}}>
      {randoms.map( (url) => <Animatable.Image source={{uri: url}}
                                            animation="zoomIn"
                                               duration={1000}
                                            style={{width: '100%', height: 200, resizeMode: 'contain', margin: 10}}
                                            PlaceholderContent={<ActivityIndicator/>} />) }
    </ScrollView>
  );
};
