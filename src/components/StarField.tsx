import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

type Star = {
  id: number;
  left: `${number}%`;
  top: `${number}%`;
  size: number;
  opacity: number;
};

export function StarField({count = 84}: {count?: number}) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({length: count}, (_, index) => ({
        id: index,
        left: `${(index * 37 + 11) % 100}%` as `${number}%`,
        top: `${(index * 53 + 7) % 100}%` as `${number}%`,
        size: index % 11 === 0 ? 2 : 1,
        opacity: 0.18 + ((index * 19) % 50) / 100,
      })),
    [count],
  );

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {stars.map(star => (
        <View
          key={star.id}
          style={[
            styles.star,
            {
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    borderRadius: 2,
    backgroundColor: '#f7f7f7',
  },
});
