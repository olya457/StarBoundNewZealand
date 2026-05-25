import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Header} from '../components/Header';
import {PlaceCard} from '../components/PlaceCard';
import {Screen} from '../components/Screen';
import {placeById} from '../data/places';
import {colors, typography} from '../theme';

type Props = {
  savedIds: string[];
  onOpenPlace: (id: string) => void;
  onRemove: (id: string) => void;
  onOpenRoutes: () => void;
  onOpenMap: () => void;
};

export function SavedScreen({
  savedIds,
  onOpenPlace,
  onRemove,
  onOpenRoutes,
  onOpenMap,
}: Props) {
  const savedPlaces = useMemo(
    () =>
      savedIds
        .map(id => placeById[id])
        .filter((place): place is NonNullable<typeof place> => Boolean(place)),
    [savedIds],
  );

  return (
    <Screen>
      <Header
        eyebrow="COLLECTION"
        title="Saved Stars"
        subtitle="Your collected New Zealand routes"
      />
      {savedPlaces.length === 0 ? (
        <View style={styles.empty}>
          <View style={styles.starCircle}>
            <Text style={styles.star}>☆</Text>
          </View>
          <Text style={styles.emptyTitle}>No saved stars yet</Text>
          <Text style={styles.emptyText}>
            Start exploring New Zealand's brightest routes and keep your
            favorites here.
          </Text>
          <AppButton
            label="Explore Routes"
            onPress={onOpenRoutes}
            style={styles.emptyButton}
          />
        </View>
      ) : (
        <>
          <View style={styles.counter}>
            <View style={styles.counterIcon}>
              <Text style={styles.counterStar}>⭐</Text>
            </View>
            <Text style={styles.counterText}>
              {savedPlaces.length}{' '}
              {savedPlaces.length === 1 ? 'location' : 'locations'} saved
            </Text>
          </View>
          {savedPlaces.map(place => (
            <PlaceCard
              key={place.id}
              place={place}
              compact
              saved
              onDetails={() => onOpenPlace(place.id)}
              onToggleSaved={() => onRemove(place.id)}
              onRemove={() => onRemove(place.id)}
              onMap={onOpenMap}
            />
          ))}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    minHeight: 520,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1,
    borderColor: colors.lineBright,
    backgroundColor: colors.yellowSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  star: {
    color: colors.yellow,
    fontSize: 42,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
  },
  emptyText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 12,
    maxWidth: 300,
  },
  emptyButton: {
    marginTop: 28,
    minWidth: 170,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellowSoft,
    marginRight: 9,
  },
  counterStar: {
    fontSize: 12,
  },
  counterText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 20,
  },
});
