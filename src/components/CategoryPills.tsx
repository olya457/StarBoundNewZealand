import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {categories} from '../data/places';
import {colors, typography} from '../theme';
import type {CategoryId} from '../types';

type Value = CategoryId | 'all';

type Props = {
  value: Value;
  onChange: (value: Value) => void;
};

export function CategoryPills({value, onChange}: Props) {
  const items: Array<{id: Value; label: string}> = [
    {id: 'all', label: 'All'},
    ...categories.map(category => ({
      id: category.id,
      label: category.shortLabel,
    })),
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.wrap}>
      {items.map(item => {
        const active = item.id === value;

        return (
          <Pressable
            key={item.id}
            onPress={() => onChange(item.id)}
            style={[styles.pill, active && styles.active]}>
            <Text style={[styles.text, active && styles.activeText]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8,
    paddingRight: 20,
  },
  pill: {
    height: 34,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panelSoft,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },
  text: {
    color: colors.muted,
    fontSize: typography.small,
    fontWeight: '700',
  },
  activeText: {
    color: colors.black,
  },
});
