import React, {FC} from 'react';
import {Avatar} from 'react-native-elements';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRandomImage} from '../../hooks/useRandomImage';
import {useNavigation} from '@react-navigation/native';

interface Props {
  breed: string;
  showImage: boolean;
}

export const BreedCell: FC<Props> = ({breed, showImage}) => {
  const {url, error, refresh} = useRandomImage(breed);
  const navigation = useNavigation();

  const showBreed = () => {
    navigation.navigate('Kennel', {breed});
  };

  return (
    <TouchableOpacity onPress={showBreed} onLongPress={refresh}>
      <View style={styles.container} animation="zoomInAi">
        <View style={{justifyContent: 'center'}}>
          <Text style={{marginLeft: 10}}>{breed.toUpperCase()}</Text>
        </View>
        {showImage ?
          <Avatar source={{uri: url}} size="large"/> :
        null
        }
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    minHeight: 60,
  },
});
