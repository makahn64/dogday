import React, {FC, useState} from 'react';
import {useDogs} from '../../hooks/useDogs';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {BreedCell} from '../../components/cells/BreedCell';
import {SafeAreaView} from 'react-native-safe-area-context';

const CTA = 'Search for breeds by entering the name in the search box above.';

export const SearchBreedsScreen: FC = () => {
  const {breeds, error} = useDogs();
  const [filter, setFilter] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const filteredBreeds = breeds.filter((b) =>
    b.toLowerCase().startsWith(filter.toLowerCase()),
  );

  // list isn't long enough to use FlatList
  return (
    <SafeAreaView>
      <View>
        <Input
          placeholder="Enter breed..."
          leftIconContainerStyle={{marginRight: 10}}
          leftIcon={{type: 'font-awesome', name: 'search'}}
          onFocus={() => setHasSearched(true)}
          onChangeText={setFilter}
        />
        <Text style={styles.count}>
          Showing {filteredBreeds.length} of {breeds.length} breeds.
        </Text>
        {hasSearched ? (
          <ScrollView>
            {filteredBreeds.map((b) => (
              <BreedCell breed={b} key={b} showImage={!!filter} />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.cta}>{CTA}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  count: {
    fontSize: 10,
    alignSelf: 'center',
    color: '#7f7f7f',
    marginTop: -20,
  },
  cta: {
    fontSize: 20,
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 30,
  },
});
