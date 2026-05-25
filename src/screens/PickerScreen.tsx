import React, {useMemo, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Badge} from '../components/Badge';
import {Header} from '../components/Header';
import {Screen} from '../components/Screen';
import {categories, places} from '../data/places';
import {colors, typography} from '../theme';
import type {Place} from '../types';

type Props = {
  savedIds: string[];
  onToggleSaved: (id: string) => void;
  onOpenPlace: (id: string) => void;
  onOpenMap: () => void;
};

export function PickerScreen({
  savedIds,
  onToggleSaved,
  onOpenPlace,
  onOpenMap,
}: Props) {
  const [selected, setSelected] = useState<Place | null>(null);
  const {height} = useWindowDimensions();
  const small = height < 720;

  const orbitDots = useMemo(
    () => Array.from({length: 12}, (_, index) => index),
    [],
  );

  const pick = () => {
    const currentIndex = selected
      ? places.findIndex(place => place.id === selected.id)
      : -1;
    const nextIndex =
      (currentIndex + Math.floor(Math.random() * (places.length - 1)) + 1) %
      places.length;
    setSelected(places[nextIndex]);
  };

  return (
    <Screen>
      <Header
        eyebrow="DISCOVER"
        title="Star Picker"
        subtitle="Let the sky choose your next route"
      />
      <Pressable
        onPress={pick}
        style={[styles.orbit, small && styles.orbitSmall]}>
        <View style={styles.orbitOuter} />
        <View style={styles.orbitInner} />
        {orbitDots.map(dot => (
          <View
            key={dot}
            style={[
              styles.orbitDot,
              {
                transform: [
                  {rotate: `${dot * 30}deg`},
                  {translateY: -84},
                  {rotate: `${dot * -30}deg`},
                ],
              },
            ]}
          />
        ))}
        <Text style={styles.orbitStar}>⭐</Text>
      </Pressable>
      {selected ? (
        <View style={styles.resultCard}>
          <ImageBackground
            source={selected.image}
            imageStyle={styles.imageRadius}
            style={styles.image}>
            <View style={styles.imageShade} />
            <View style={styles.resultBadge}>
              <Badge
                label={selected.categoryLabel}
                color={
                  categories.find(item => item.id === selected.categoryId)
                    ?.color
                }
              />
            </View>
            <View style={styles.smallStar}>
              <Text style={styles.smallStarText}>⭐</Text>
            </View>
          </ImageBackground>
          <View style={styles.resultBody}>
            <Text style={styles.resultTitle}>{selected.name}</Text>
            <Text style={styles.coords}>
              {selected.coordinates.latitude.toFixed(4)},{' '}
              {selected.coordinates.longitude.toFixed(4)}
            </Text>
            <Text style={styles.resultText}>{selected.shortDescription}</Text>
            <AppButton
              label="View Details"
              emoji="👁️"
              onPress={() => onOpenPlace(selected.id)}
            />
            <View style={styles.actions}>
              <AppButton
                label="Try Again"
                emoji="↻"
                variant="dark"
                onPress={pick}
                style={styles.action}
              />
              <AppButton
                label={savedIds.includes(selected.id) ? 'Saved' : 'Save'}
                emoji="🔖"
                variant={savedIds.includes(selected.id) ? 'outline' : 'dark'}
                onPress={() => onToggleSaved(selected.id)}
                style={styles.action}
              />
              <AppButton
                label="Map"
                emoji="📍"
                variant="dark"
                onPress={onOpenMap}
                style={styles.action}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            Tap the star to discover a route.
          </Text>
          <AppButton
            label="Pick a Star"
            onPress={pick}
            style={styles.pickButton}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  orbit: {
    width: 190,
    height: 190,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 28,
  },
  orbitSmall: {
    width: 160,
    height: 160,
    marginBottom: 14,
  },
  orbitOuter: {
    position: 'absolute',
    width: 176,
    height: 176,
    borderRadius: 88,
    borderWidth: 1,
    borderColor: 'rgba(255,203,24,0.22)',
  },
  orbitInner: {
    position: 'absolute',
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 2,
    borderColor: 'rgba(255,203,24,0.55)',
    backgroundColor: 'rgba(255,203,24,0.03)',
  },
  orbitDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.yellow,
  },
  orbitStar: {
    fontSize: 48,
  },
  empty: {
    alignItems: 'center',
    paddingTop: 10,
  },
  emptyText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },
  pickButton: {
    minWidth: 156,
  },
  resultCard: {
    overflow: 'hidden',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.lineBright,
    backgroundColor: colors.panel,
  },
  image: {
    height: 160,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.16)',
  },
  resultBadge: {
    padding: 16,
  },
  smallStar: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.yellow,
    backgroundColor: 'rgba(255,203,24,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallStarText: {
    fontSize: 18,
  },
  resultBody: {
    padding: 16,
  },
  resultTitle: {
    color: colors.text,
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '900',
  },
  coords: {
    color: colors.yellow,
    fontSize: typography.tiny,
    lineHeight: 15,
    marginTop: 8,
    fontWeight: '800',
  },
  resultText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  action: {
    flex: 1,
    minHeight: 42,
  },
});
