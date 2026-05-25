import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {categories} from '../data/places';
import {colors, typography} from '../theme';
import type {Place} from '../types';
import {AppButton} from './AppButton';
import {Badge} from './Badge';

type Props = {
  place: Place;
  saved: boolean;
  onDetails: () => void;
  onToggleSaved: () => void;
  onMap?: () => void;
  onShare?: () => void;
  compact?: boolean;
  onRemove?: () => void;
};

export function PlaceCard({
  place,
  saved,
  onDetails,
  onToggleSaved,
  onMap,
  onShare,
  compact = false,
  onRemove,
}: Props) {
  const color = categories.find(item => item.id === place.categoryId)?.color;

  return (
    <View style={[styles.card, compact && styles.compactCard]}>
      <Pressable onPress={onDetails}>
        <ImageBackground
          source={place.image}
          imageStyle={styles.imageRadius}
          style={styles.image}>
          <View style={styles.imageShade} />
          {onRemove ? (
            <Pressable onPress={onRemove} style={styles.remove}>
              <Text style={styles.removeText}>🗑️</Text>
            </Pressable>
          ) : null}
          <View style={styles.badgeWrap}>
            <Badge label={place.categoryLabel} color={color} />
          </View>
        </ImageBackground>
      </Pressable>
      <View style={styles.body}>
        <Text numberOfLines={2} style={styles.title}>
          {place.name}
        </Text>
        <Text style={styles.coords}>
          {place.coordinates.latitude.toFixed(4)},{' '}
          {place.coordinates.longitude.toFixed(4)}
        </Text>
        <Text numberOfLines={compact ? 2 : 3} style={styles.description}>
          {place.shortDescription}
        </Text>
        <View style={styles.actions}>
          <AppButton
            label="View Details"
            emoji="👁️"
            onPress={onDetails}
            style={styles.detailsButton}
          />
          {onMap ? (
            <AppButton
              label="Open on Map"
              emoji="📍"
              variant="dark"
              onPress={onMap}
              style={styles.mapButton}
            />
          ) : (
            <Pressable
              onPress={onToggleSaved}
              style={[styles.iconButton, saved && styles.iconSaved]}>
              <Text style={styles.iconText}>{saved ? '🔖' : '☆'}</Text>
            </Pressable>
          )}
          {!onMap ? (
            <Pressable onPress={onShare} style={styles.iconButton}>
              <Text style={styles.iconText}>🔗</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    marginBottom: 18,
  },
  compactCard: {
    marginBottom: 16,
  },
  image: {
    height: 150,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  badgeWrap: {
    padding: 12,
  },
  remove: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(30,30,30,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    fontSize: 15,
  },
  body: {
    padding: 16,
  },
  title: {
    color: colors.text,
    fontSize: typography.cardTitle,
    lineHeight: 23,
    fontWeight: '900',
  },
  coords: {
    color: colors.muted,
    fontSize: typography.tiny,
    lineHeight: 16,
    marginTop: 6,
    fontWeight: '700',
  },
  description: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: 8,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
  },
  detailsButton: {
    flex: 1,
  },
  mapButton: {
    flex: 1,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panelSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSaved: {
    backgroundColor: colors.yellowSoft,
    borderColor: colors.lineBright,
  },
  iconText: {
    color: colors.yellow,
    fontSize: 18,
  },
});
