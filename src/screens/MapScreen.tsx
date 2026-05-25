import React, {useMemo, useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {AppButton} from '../components/AppButton';
import {Badge} from '../components/Badge';
import {CategoryPills} from '../components/CategoryPills';
import {Header} from '../components/Header';
import {Screen} from '../components/Screen';
import {categories, places} from '../data/places';
import {colors, spacing, typography} from '../theme';
import type {CategoryId, Place} from '../types';

type Filter = CategoryId | 'all';

type Props = {
  savedIds: string[];
  onToggleSaved: (id: string) => void;
  onOpenPlace: (id: string) => void;
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#080c14'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#777777'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#080c14'}]},
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#111821'}],
  },
  {featureType: 'road', elementType: 'geometry', stylers: [{color: '#211b0b'}]},
  {featureType: 'poi', stylers: [{visibility: 'off'}]},
];

export function MapScreen({savedIds, onToggleSaved, onOpenPlace}: Props) {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Place | null>(places[0]);

  const filteredPlaces = useMemo(
    () =>
      places.filter(place => filter === 'all' || place.categoryId === filter),
    [filter],
  );

  const region = {
    latitude: -41.45,
    longitude: 172.15,
    latitudeDelta: 15.5,
    longitudeDelta: 12.5,
  };

  return (
    <Screen
      scroll={false}
      noHorizontalPadding
      noBottomPadding
      contentStyle={styles.content}>
      <View style={styles.header}>
        <Header
          eyebrow="NAVIGATE"
          title="Star Map"
          subtitle="See every route point in one place"
        />
        <CategoryPills value={filter} onChange={value => setFilter(value)} />
      </View>
      <View style={styles.mapWrap}>
        <MapView
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          style={StyleSheet.absoluteFill}
          initialRegion={region}
          customMapStyle={mapStyle}
          showsUserLocation={false}
          showsCompass={false}
          toolbarEnabled={false}
          rotateEnabled={false}>
          {filteredPlaces.map(place => {
            const category = categories.find(
              item => item.id === place.categoryId,
            );

            return (
              <Marker
                key={place.id}
                coordinate={place.coordinates}
                tracksViewChanges={false}
                onPress={() => setSelected(place)}>
                <View
                  style={[
                    styles.marker,
                    {backgroundColor: category?.color ?? colors.yellow},
                    selected?.id === place.id && styles.markerActive,
                  ]}
                />
              </Marker>
            );
          })}
        </MapView>
        <Pressable style={styles.locateButton}>
          <Text style={styles.locateText}>☀️</Text>
        </Pressable>
        <View style={styles.legend}>
          {categories.map(category => (
            <View key={category.id} style={styles.legendRow}>
              <View
                style={[styles.legendDot, {backgroundColor: category.color}]}
              />
              <Text style={styles.legendText}>{category.label}</Text>
            </View>
          ))}
        </View>
      </View>
      {selected ? (
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.sheetRow}>
            <Image source={selected.image} style={styles.sheetImage} />
            <View style={styles.sheetInfo}>
              <Badge
                label={selected.categoryLabel}
                color={
                  categories.find(item => item.id === selected.categoryId)
                    ?.color
                }
              />
              <Text numberOfLines={2} style={styles.sheetTitle}>
                {selected.name}
              </Text>
              <Text style={styles.sheetCoords}>
                {selected.coordinates.latitude.toFixed(4)},{' '}
                {selected.coordinates.longitude.toFixed(4)}
              </Text>
              <Text numberOfLines={2} style={styles.sheetText}>
                {selected.shortDescription}
              </Text>
            </View>
          </View>
          <View style={styles.sheetActions}>
            <AppButton
              label="View Details"
              emoji="👁️"
              onPress={() => onOpenPlace(selected.id)}
              style={styles.sheetDetails}
            />
            <AppButton
              label={savedIds.includes(selected.id) ? 'Saved' : 'Save'}
              emoji="🔖"
              variant={savedIds.includes(selected.id) ? 'outline' : 'dark'}
              onPress={() => onToggleSaved(selected.id)}
              style={styles.sheetSmall}
            />
            <Pressable
              onPress={() => setSelected(null)}
              style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: spacing.top + 24,
    paddingBottom: 14,
    zIndex: 2,
    backgroundColor: 'rgba(3,3,3,0.96)',
  },
  mapWrap: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#080c14',
  },
  marker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
  },
  markerActive: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: colors.text,
  },
  locateButton: {
    position: 'absolute',
    top: 18,
    right: 18,
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: 'rgba(22,22,22,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locateText: {
    fontSize: 18,
  },
  legend: {
    position: 'absolute',
    left: 16,
    bottom: spacing.tabHeight + spacing.bottom + 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: 'rgba(12,12,12,0.86)',
    padding: 12,
    gap: 7,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    color: colors.muted,
    fontSize: 10,
  },
  sheet: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: spacing.tabHeight + spacing.bottom + 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
  },
  handle: {
    alignSelf: 'center',
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.dim,
    marginBottom: 18,
  },
  sheetRow: {
    flexDirection: 'row',
    gap: 12,
  },
  sheetImage: {
    width: 96,
    height: 82,
    borderRadius: 12,
  },
  sheetInfo: {
    flex: 1,
  },
  sheetTitle: {
    color: colors.text,
    fontSize: typography.cardTitle,
    lineHeight: 22,
    fontWeight: '900',
    marginTop: 6,
  },
  sheetCoords: {
    color: colors.muted,
    fontSize: typography.tiny,
    lineHeight: 15,
    marginTop: 3,
  },
  sheetText: {
    color: colors.muted,
    fontSize: typography.small,
    lineHeight: 18,
    marginTop: 5,
  },
  sheetActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  sheetDetails: {
    flex: 1,
  },
  sheetSmall: {
    width: 88,
  },
  closeButton: {
    width: 44,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panelSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: colors.muted,
    fontSize: 22,
    lineHeight: 24,
  },
});
