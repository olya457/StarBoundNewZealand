import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, spacing, typography} from '../theme';
import type {TabKey} from './types';

type Item = {
  key: TabKey;
  label: string;
  emoji: string;
};

const items: Item[] = [
  {key: 'routes', label: 'Routes', emoji: '☄️'},
  {key: 'map', label: 'Map', emoji: '📍'},
  {key: 'picker', label: 'Picker', emoji: '⭐'},
  {key: 'saved', label: 'Saved', emoji: '🔖'},
  {key: 'notes', label: 'Notes', emoji: '📖'},
];

type Props = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

export function BottomTabs({active, onChange}: Props) {
  return (
    <View pointerEvents="box-none" style={styles.host}>
      <View style={styles.bar}>
        {items.map(item => {
          const selected = active === item.key;

          return (
            <Pressable
              key={item.key}
              onPress={() => onChange(item.key)}
              style={({pressed}) => [styles.item, pressed && styles.pressed]}>
              <View style={[styles.iconWrap, selected && styles.iconActive]}>
                <Text style={[styles.icon, selected && styles.iconSelected]}>
                  {item.emoji}
                </Text>
              </View>
              <Text style={[styles.label, selected && styles.labelActive]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: spacing.bottom,
    height: spacing.tabHeight,
  },
  bar: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: 'rgba(10,10,10,0.94)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 6,
  },
  item: {
    flex: 1,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.72,
  },
  iconWrap: {
    width: 32,
    height: 30,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: colors.yellowSoft,
    borderWidth: 1,
    borderColor: colors.lineBright,
  },
  icon: {
    fontSize: 18,
    opacity: 0.5,
  },
  iconSelected: {
    opacity: 1,
  },
  label: {
    color: colors.dim,
    fontSize: typography.tiny,
    lineHeight: 12,
    fontWeight: '800',
    marginTop: 3,
  },
  labelActive: {
    color: colors.yellow,
  },
});
