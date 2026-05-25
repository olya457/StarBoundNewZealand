import React from 'react';
import {
  ImageBackground,
  Linking,
  Platform,
  Share,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Badge} from '../components/Badge';
import {Screen} from '../components/Screen';
import {categories} from '../data/places';
import {colors, spacing, typography} from '../theme';
import type {Place} from '../types';

type Props = {
  place: Place;
  saved: boolean;
  activeTitle: string;
  onBack: () => void;
  onToggleSaved: () => void;
};

export function PlaceDetailsScreen({
  place,
  saved,
  activeTitle,
  onBack,
  onToggleSaved,
}: Props) {
  const color = categories.find(
    category => category.id === place.categoryId,
  )?.color;

  const openMap = () => {
    const {latitude, longitude} = place.coordinates;
    const label = encodeURIComponent(place.name);
    const url =
      Platform.OS === 'ios'
        ? `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`
        : `geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`;

    Linking.openURL(url).catch(() => undefined);
  };

  const sharePlace = () => {
    Share.share({
      title: place.name,
      message: `${place.name}\n${place.address}\n${place.shortDescription}`,
    }).catch(() => undefined);
  };

  return (
    <Screen noHorizontalPadding>
      <ImageBackground source={place.image} style={styles.hero}>
        <View style={styles.heroShade} />
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← {activeTitle}</Text>
        </Pressable>
      </ImageBackground>
      <View style={styles.body}>
        <Badge label={place.categoryLabel} color={color} />
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.coords}>
          📍 {place.coordinates.latitude.toFixed(4)},{' '}
          {place.coordinates.longitude.toFixed(4)}
        </Text>
        <AppButton
          label={saved ? 'Saved' : 'Save Location'}
          emoji="🔖"
          variant={saved ? 'outline' : 'primary'}
          onPress={onToggleSaved}
          style={styles.saveButton}
        />
        <View style={styles.actions}>
          <AppButton
            label="Open on Map"
            emoji="📍"
            variant="dark"
            onPress={openMap}
            style={styles.action}
          />
          <AppButton
            label="Share"
            emoji="🔗"
            variant="dark"
            onPress={sharePlace}
            style={styles.action}
          />
        </View>
        <Text style={styles.lead}>{place.shortDescription}</Text>
        <Text style={styles.long}>{place.longDescription}</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🕒</Text>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoTitle}>Best Time to Visit</Text>
            <Text style={styles.infoText}>{place.bestTime}</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>💡</Text>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoTitle}>Travel Tip</Text>
            <Text style={styles.infoText}>{place.travelTip}</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>⚠️</Text>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoTitle}>Safety Note</Text>
            <Text style={styles.infoText}>{place.safetyNote}</Text>
          </View>
        </View>
        <View style={styles.addressCard}>
          <Text style={styles.infoTitle}>Address</Text>
          <Text style={styles.infoText}>{place.address}</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 235,
    justifyContent: 'flex-start',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.34)',
  },
  backButton: {
    marginTop: spacing.top + 18,
    marginLeft: 20,
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backText: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: '800',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    lineHeight: 32,
    fontWeight: '900',
    marginTop: 28,
  },
  coords: {
    color: colors.yellow,
    fontSize: typography.tiny,
    lineHeight: 16,
    marginTop: 8,
    fontWeight: '800',
  },
  saveButton: {
    marginTop: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  action: {
    flex: 1,
  },
  lead: {
    color: '#c2c2c2',
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: 32,
  },
  long: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 24,
    marginTop: 22,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    marginTop: 14,
  },
  infoIcon: {
    fontSize: 20,
    color: colors.yellow,
  },
  infoTextWrap: {
    flex: 1,
  },
  infoTitle: {
    color: colors.yellow,
    fontSize: typography.small,
    lineHeight: 17,
    fontWeight: '900',
  },
  infoText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 3,
  },
  addressCard: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    marginTop: 14,
  },
});
