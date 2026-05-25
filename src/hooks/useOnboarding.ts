import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useState} from 'react';
import {storageKeys} from '../utils/storage';

export function useOnboarding() {
  const [ready, setReady] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(storageKeys.onboarding)
      .then(value => {
        if (mounted) {
          setSeen(value === 'true');
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (mounted) {
          setReady(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const complete = useCallback(() => {
    setSeen(true);
    AsyncStorage.setItem(storageKeys.onboarding, 'true').catch(() => undefined);
  }, []);

  return {ready, seen, complete};
}
