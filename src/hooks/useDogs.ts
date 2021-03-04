import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListAllBreedsResponse, listAllMajorBreeds} from "../services/dogapi/listBreeds";

const BREED_PERSIST_KEY = '@breeds';

const loadCached = async () => {
  const cached = await AsyncStorage.getItem(BREED_PERSIST_KEY);
  if (cached) {
    JSON.parse(cached);
  }

  // nothing in the cache. Let's grab the data we sent with the app. The data "changes infrequently" per the
  // instructions, so this should be fine and a better UX
  const preloadedBreeds = require('../data/initial-breeds.json') as ListAllBreedsResponse;
  const majorBreeds = Object.keys(preloadedBreeds.message).sort();
  // cache it for next time
  await setCached(majorBreeds);
  return majorBreeds;
};

const setCached = async (breeds: string[]) =>
  AsyncStorage.setItem(BREED_PERSIST_KEY, JSON.stringify(breeds));

export const useDogs = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  // This useEffect first grabs cached major breeds, then goes off to api for the freshest data and updates the cache
  // Could get fancy and set a stale timestamp, but we're talking a handful of bytes
  useEffect(() => {
    // see if anything is in the Async cache
    loadCached()
      .then((cached: string[] | undefined) => {
        if (cached) {
          setBreeds(cached);
        }
        // now fetch while the UI continues
        return listAllMajorBreeds();
      })
      .then((fetchedBreeds) => {
        setBreeds(fetchedBreeds);
        // ok to ignore the then of the promise
        setCached(fetchedBreeds);
      })
      .catch(setError);
  }, []);

  return {breeds, error};
};
