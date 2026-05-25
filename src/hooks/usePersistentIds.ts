import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useMemo, useState} from 'react';

export function usePersistentIds(key: string) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(key)
      .then(value => {
        if (!mounted) {
          return;
        }

        if (value) {
          const parsed = JSON.parse(value);

          if (Array.isArray(parsed)) {
            setIds(parsed.filter(item => typeof item === 'string'));
          }
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
  }, [key]);

  const persist = useCallback(
    (next: string[]) => {
      setIds(next);
      AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => undefined);
    },
    [key],
  );

  const toggle = useCallback(
    (id: string) => {
      setIds(current => {
        const next = current.includes(id)
          ? current.filter(item => item !== id)
          : [id, ...current];

        AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => undefined);
        return next;
      });
    },
    [key],
  );

  const remove = useCallback(
    (id: string) => {
      setIds(current => {
        const next = current.filter(item => item !== id);
        AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => undefined);
        return next;
      });
    },
    [key],
  );

  const set = useCallback(
    (next: string[]) => {
      persist(Array.from(new Set(next)));
    },
    [persist],
  );

  return useMemo(
    () => ({
      ids,
      ready,
      set,
      toggle,
      remove,
      has: (id: string) => ids.includes(id),
    }),
    [ids, ready, remove, set, toggle],
  );
}
