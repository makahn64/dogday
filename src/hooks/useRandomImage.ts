import {useEffect, useState} from 'react';
import {randomImageForBreed} from '../services/dogapi/images';

export const useRandomImage = (breed: string) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<Error | undefined>();

  const refresh = async () => {
    try {
      const u = await randomImageForBreed(breed);
      setUrl(u);
      setError(undefined);
    } catch (e) {
      setUrl('');
      setError(e);
    }
  };

  useEffect(() => {
    if (breed) {
      refresh();
    }
  }, [breed]);

  return {url, error, refresh};
}
