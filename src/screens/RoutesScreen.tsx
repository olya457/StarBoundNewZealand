import React, {useMemo, useState} from 'react';
import {Share, StyleSheet, Text, TextInput, View} from 'react-native';
import {CategoryPills} from '../components/CategoryPills';
import {Header} from '../components/Header';
import {PlaceCard} from '../components/PlaceCard';
import {Screen} from '../components/Screen';
import {categories, places} from '../data/places';
import {colors, typography} from '../theme';
import type {CategoryId} from '../types';

type Filter = CategoryId | 'all';

type Props = {
  savedIds: string[];
  onToggleSaved: (id: string) => void;
  onOpenPlace: (id: string) => void;
};

export function RoutesScreen({savedIds, onToggleSaved, onOpenPlace}: Props) {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filteredPlaces = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return places.filter(place => {
      const matchesFilter = filter === 'all' || place.categoryId === filter;
      const matchesQuery =
        !normalized ||
        place.name.toLowerCase().includes(normalized) ||
        place.shortDescription.toLowerCase().includes(normalized);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const title =
    filter === 'all'
      ? 'Featured Routes'
      : categories.find(category => category.id === filter)?.label ??
        'Featured Routes';

  return (
    <Screen>
      <Header
        eyebrow="EXPLORE"
        title="Star Routes"
        subtitle="Choose your path across New Zealand"
      />
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔎</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search places..."
          placeholderTextColor={colors.dim}
          style={styles.searchInput}
          selectionColor={colors.yellow}
        />
      </View>
      <CategoryPills value={filter} onChange={setFilter} />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {filteredPlaces.map(place => (
        <PlaceCard
          key={place.id}
          place={place}
          saved={savedIds.includes(place.id)}
          onDetails={() => onOpenPlace(place.id)}
          onToggleSaved={() => onToggleSaved(place.id)}
          onShare={() =>
            Share.share({
              title: place.name,
              message: `${place.name}\n${place.shortDescription}`,
            }).catch(() => undefined)
          }
        />
      ))}
      {filteredPlaces.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyStar}>⭐</Text>
          <Text style={styles.emptyTitle}>No matching routes</Text>
          <Text style={styles.emptyText}>
            Try a different category or search phrase.
          </Text>
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  searchIcon: {
    fontSize: 15,
    opacity: 0.58,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: typography.body,
    paddingVertical: 0,
  },
  sectionHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    marginTop: 20,
    marginBottom: 16,
    paddingBottom: 10,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyStar: {
    fontSize: 44,
    marginBottom: 14,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  emptyText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 8,
    textAlign: 'center',
  },
});
