import React, {FC} from 'react';
import {Avatar, Text} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useRandomImage} from '../../hooks/useRandomImage';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks/useTheme';

interface Props {
  breed: string;
  showImage: boolean;
}

export const BreedCell: FC<Props> = ({breed, showImage}) => {
  const {url, refresh} = useRandomImage(breed);
  const navigation = useNavigation();
  const {surfaceColor, colors} = useTheme();
  const showBreed = () => {
    navigation.navigate('Kennel', {breed});
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: colors?.grey3 || '#dbdbdb',
      backgroundColor: surfaceColor,
      minHeight: 60,
    },
  });

  return (
    <TouchableOpacity onPress={showBreed} onLongPress={refresh}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{marginLeft: 10}}>{breed.toUpperCase()}</Text>
        </View>
        {showImage ? <Avatar source={{uri: url}} size="large" /> : null}
      </View>
    </TouchableOpacity>
  );
};
