import React, {FC} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
}

export const Footer: FC<Props> = ({text}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    top: Dimensions.get('screen').height - 120,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#010145',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
});
