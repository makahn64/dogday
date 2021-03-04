import React, {FC, useState} from 'react';
import {useDogs} from '../../hooks/useDogs';
import {ScrollView, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {BreedCell} from '../../components/cells/BreedCell';
import {SafeAreaView} from "react-native-safe-area-context";

interface Props {}

export const SearchBreedsScreen: FC<Props> = (props) => {
  const {breeds, error} = useDogs();
  const [filter, setFilter] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const filteredBreeds = breeds.filter((b) =>
    b.toLowerCase().startsWith(filter.toLowerCase()),
  );

  // list isn't long enough to use FlatList
  return (
    <SafeAreaView>
      <Input
        placeholder="Enter breed..."
        leftIconContainerStyle={{marginRight: 10}}
        leftIcon={{type: 'font-awesome', name: 'search'}}
        onFocus={() => setHasSearched(true)}
        onChangeText={setFilter}
      />
      {/*<Text>{filteredBreeds.length} major breeds in the database.</Text>*/}
      <ScrollView>
        {filteredBreeds.map((b) => (
          <BreedCell breed={b} key={b} showImage={filter}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
